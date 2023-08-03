"use strict";

const mqttBrokerUrl = "wss://mqtt.devwarp.work";

const mqttClient = mqtt.connect(mqttBrokerUrl);

const voltageTopic = "/seed_r7_ros_controller/voltage";
const gamepadCmdVelTopic = "/gamepad/cmd_vel"
const subscribeTopics = [voltageTopic, gamepadCmdVelTopic]

let enableToSendMessage = false;

const rightArrowButtonElement = document.getElementById("right-arrow");
const leftArrowButtonElement = document.getElementById("left-arrow");

const sequenceTextElement = document.getElementById("sequence");
const controlModeText = document.getElementById("control-mode");
const onlineGreenColor = document.querySelector(".check-online");

function handleVoltageMessage(message) {
  const voltageStatus = JSON.parse(message.toString())
  sequenceTextElement.innerText = voltageStatus.data.toFixed(2)
  onlineGreenColor.style.backgroundColor = "lightgreen"
  controlModeText.innerText = "遠隔操作可能";//立ち上げ後、テキスト変更（入力を待たない）
}

function handleGamepadCmdVelMessage(message) {
  const data = JSON.parse(message.toString())
  const linearSum = data.linear.x + data.linear.y + data.linear.z;
  const angularSum = data.angular.x + data.angular.y + data.angular.z;

  // ロボットのliner.xが0かつangular.zが0なら、遠隔操作可能
  if ((linearSum === 0) && (angularSum === 0)) {
    controlModeText.innerText = "遠隔操作可能";
  } else {  // それ以外は、現地操作中
    controlModeText.innerText = "スタッフ操作中";
  }
}

// liner: 前後　angular: 右回転、左回転
function sendVelocity(linear, angular) {
  if (enableToSendMessage) {
    rightArrowButtonElement.disabled = true;
    leftArrowButtonElement.disabled = true;
  }
  const cmdVelMsg = JSON.stringify({
    linear: {
      x: linear,
      y: 0,
      z: 0
    },
    angular: {
      x: 0,
      y: 0,
      z: angular
    }
  });

  const slowDown1VelMsg = JSON.stringify({
    linear: {
      x: linear * 0.8,
      y: 0,
      z: 0
    },
    angular: {
      x: 0,
      y: 0,
      z: angular * 0.8
    }
  });

  const slowDown2VelMsg = JSON.stringify({
    linear: {
      x: linear * 0.6,
      y: 0,
      z: 0
    },
    angular: {
      x: 0,
      y: 0,
      z: angular * 0.6
    }
  });

  const slowDown3VelMsg = JSON.stringify({
    linear: {
      x: linear * 0.3,
      y: 0,
      z: 0
    },
    angular: {
      x: 0,
      y: 0,
      z: angular * 0.3
    }
  });

  const stopVelMsg = JSON.stringify({
    linear: {
      x: linear * 0,
      y: 0,
      z: 0
    },
    angular: {
      x: 0,
      y: 0,
      z: angular * 0
    }
  });

  if (enableToSendMessage) {
    mqttClient.publish("/cmd_vel", cmdVelMsg);

    setTimeout(() => {
      mqttClient.publish("/cmd_vel", slowDown1VelMsg);
    }, 650)

    setTimeout(() => {
      mqttClient.publish("/cmd_vel", slowDown2VelMsg);
    }, 800)

    setTimeout(() => {
      mqttClient.publish("/cmd_vel", slowDown3VelMsg);
    }, 900)

    setTimeout(() => {
      mqttClient.publish("/cmd_vel", stopVelMsg);
      rightArrowButtonElement.disabled = false;
      leftArrowButtonElement.disabled = false;
    }, 1000)
  }
}

// リフト上下
function sendJointTrajectoryPoint(positions) {
  const data = {
    joint_names: ["ankle_joint", "knee_joint"],
    points: [{
      positions: positions,
      velocities: [],
      accelerations: [],
      time_from_start: {
        secs: 2,
        nsecs: 500000000
      }
    }]
  }

  if (enableToSendMessage) {
    mqttClient.publish("/lifter_controller/command", JSON.stringify(data));
  }
}

mqttClient.on("connect", function () {
  console.log("Connected to MQTT broker");
  // topicをsubscribe
  mqttClient.subscribe(subscribeTopics, function (err) {
    if (err) {
      console.error("Error while subscribing:", err);
    } else {
      console.log("Subscribed to topic:", subscribeTopics);
    }
  });
});

let lastMessageTimestamp = Date.now();
const lastMessageTime = document.getElementById("time-stamp");

// mqttClientがメッセージを受け取った時にfireするコールバック
mqttClient.on('message', function (topic, message) {
  console.log("Receiving a message!")
  lastMessageTimestamp = Date.now();
  lastMessageTime.innerText = lastMessageTimestamp
  if (topic === voltageTopic) handleVoltageMessage(message);
  if (topic === gamepadCmdVelTopic) handleGamepadCmdVelMessage(message);
});

//5秒以上、messageを受信しなかった時の処理
setInterval(function () {
  const currentTime = Date.now();
  const pastTime = currentTime - lastMessageTimestamp;
  if (pastTime >= 5000) {
    console.log("offline!!!!!")
    onlineGreenColor.style.backgroundColor = "lightgray";
    controlModeText.innerText = "ロボット立ち上げ中";
  }
}, 5000);

// Element周り

// 操作ON/OFFボタン
const controlOnButtonElement = document.getElementById("control-on");
controlOnButtonElement.addEventListener("click", () => {
  enableToSendMessage = true;
  controlOffButtonElement.style.backgroundColor = "white";
  controlOnButtonElement.style.backgroundColor = "#FFB6C1"
})

const controlOffButtonElement = document.getElementById("control-off");
controlOffButtonElement.addEventListener("click", () => {
  enableToSendMessage = false;
  controlOffButtonElement.style.backgroundColor = "#BAD3FF";
  controlOnButtonElement.style.backgroundColor = "white"
})

// 操作ボタン
const upArrowButtonElement = document.getElementById("up-arrow");
upArrowButtonElement.addEventListener("click", () => sendJointTrajectoryPoint([0.0, 0.0]));

const downArrowButtonElement = document.getElementById("down-arrow");
downArrowButtonElement.addEventListener("click", () => sendJointTrajectoryPoint([0.5, -0.5]));

const downArrow2ButtonElement = document.getElementById("down-arrow2");
downArrow2ButtonElement.addEventListener("click", () => sendJointTrajectoryPoint([0.9, -0.9]));

rightArrowButtonElement.addEventListener("click", () => sendVelocity(0, -0.3));

leftArrowButtonElement.addEventListener("click", () => sendVelocity(0, 0.3));

