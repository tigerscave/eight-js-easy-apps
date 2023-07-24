'use strict';

const mqttBrokerUrl = 'wss://mqtt.devwarp.work';

const mqttClient = mqtt.connect(mqttBrokerUrl);

const topic = '/move_base/status';

function handleMessage(topic, message) {
  const moveBaseStatus = JSON.parse(message.toString())
  const sequenceTextElement = document.getElementById("sequence")
  sequenceTextElement.innerText = moveBaseStatus.header.seq
}

mqttClient.on('connect', function () {
  console.log('Connected to MQTT broker');
  // topicをsubscribe
  mqttClient.subscribe(topic, function (err) {
      if (err) {
          console.error('Error while subscribing:', err);
      } else {
          console.log('Subscribed to topic:', topic);
      }
  });
});

// mqttClientがメッセージを受け取った時にfireするコールバック
mqttClient.on('message', function (topic, message) {
  handleMessage(topic, message);
});
