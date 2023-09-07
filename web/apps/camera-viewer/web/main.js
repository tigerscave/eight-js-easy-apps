'use strict'

//Webページの拡大、縮小
const zoomInScreenBtn = document.getElementById("zoom-in-screen-btn")
const zoomOutScreenBtn = document.getElementById("zoom-out-screen-btn")
const screenPage = document.getElementById("screen-page")
const screenZoomLevel = document.getElementById("screen-zoom-gradation")

let zoomLevel = 1.0;

zoomInScreenBtn.addEventListener('click', () => {
  zoomLevel = zoomLevel + 0.1;
  screenPage.style.transformOrigin = `top left`;//左上を基準
  screenPage.style.transform = `scale(${zoomLevel})`;//0.1ずつ拡大
  screenZoomLevel.innerText = zoomLevel.toFixed(1);
});

zoomOutScreenBtn.addEventListener('click', () => {
  zoomLevel = zoomLevel - 0.1;
  screenPage.style.transformOrigin = `top left`;
  screenPage.style.transform = `scale(${zoomLevel})`;
  screenZoomLevel.innerText = zoomLevel.toFixed(1);
});

const reloadBtn = document.getElementById("reload-btn")
const reloadText = document.getElementById("reload-text")

reloadBtn.addEventListener('click', () => {
  reloadText.classList.add('appear');
  setTimeout(() => {
    reloadText.classList.remove('appear');
    location.reload()
  }, 1000)
});

//IPアドレス関係
const ipAddressInput = document.getElementById("ip-address-input")
const connectIpAddressBtn = document.getElementById("connect-ip-address-btn")
const cameraViewer = document.getElementById("camera-viewer")
const networkMessage = document.getElementById("network-message")

connectIpAddressBtn.addEventListener('click', () => {
  if (connectIpAddressBtn.innerText === "編集") {
    connectIpAddressBtn.innerText = "保存";
    ipAddressInput.disabled = false;
    connectIpAddressBtn.style.background = "#EEEEEE";
  } else if (connectIpAddressBtn.innerText === "保存") {
    connectIpAddressBtn.innerText = "編集";
    //入力されたIPアドレスの値を、カメラビューワーに反映させる。
    cameraViewer.src = "http://" + ipAddressInput.value + "/ImageViewer?Mode=Motion&Resolution=640x360&Quality=Standard&Interval=10";
    ipAddressInput.disabled = true;
    localStorage.setItem('ip-address', ipAddressInput.value);
    connectIpAddressBtn.style.background = "#D9E5FF";

    //文字の切り替え（接続中⇔表示する映像はありません）
    if (localStorage.getItem('ip-address') !== "") {
      ipAddressInput.value = localStorage.getItem('ip-address')
      cameraViewer.src = "http://" + ipAddressInput.value + "/ImageViewer?Mode=Motion&Resolution=640x360&Quality=Standard&Interval=10";
      networkMessage.innerText = "接続中！"
    } else {
      networkMessage.innerText = "表示する映像はありません。"
    }
  }
});

//リロード時に、IPアドレスの値が入力されていたら、カメラビューワーに反映させる。
if (localStorage.getItem('ip-address') !== "") {
  ipAddressInput.value = localStorage.getItem('ip-address')
  cameraViewer.src = "http://" + ipAddressInput.value + "/ImageViewer?Mode=Motion&Resolution=640x360&Quality=Standard&Interval=10";
  networkMessage.innerText = "接続中！"
} else {
  networkMessage.innerText = "表示する映像はありません。"
}

//ビューワーの拡大縮小
const zoomInCameraBtn = document.getElementById("zoom-in-camera-btn")
const zoomOutCameraBtn = document.getElementById("zoom-out-camera-btn")

zoomInCameraBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/directctrl?zoom=1";
});

zoomOutCameraBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/directctrl?zoom=-1";
});

//ビューワーのプリセット
//保存 
const saveAngle1Btn = document.getElementById('save-angle1') // first-angle-btn
const saveAngle2Btn = document.getElementById('save-angle2')
const saveAngle3Btn = document.getElementById('save-angle3')

saveAngle1Btn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camposiset?presetset=1"
  //画面遷移を防止するため、ページをリロードする。
  setTimeout(() => {
    location.reload()
  }, 100)
});

saveAngle2Btn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camposiset?presetset=2"
  setTimeout(() => {
    location.reload()
  }, 100)
});

saveAngle3Btn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/image_adjust?brightness=3"
  setTimeout(() => {
    location.reload()
  }, 100)
});

//移動
const moveAngle1Btn = document.getElementById("move-angle1")
const moveAngle2Btn = document.getElementById("move-angle2")
const moveAngle3Btn = document.getElementById("move-angle3")

moveAngle1Btn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?preset=1";
});
moveAngle2Btn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?preset=2";
});
moveAngle3Btn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?preset=3";
});

//ビューワーの視点移動
const upArrowBtn = document.getElementById("up-btn")
const downArrowBtn = document.getElementById("down-btn")
const leftArrowBtn = document.getElementById("left-btn")
const rightArrowBtn = document.getElementById("right-btn")

upArrowBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?pan=0&tilt=-1&Language=0";
});

downArrowBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?pan=0&tilt=1&Language=0";
});

leftArrowBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?pan=-1&tilt=0&Language=0";
});

rightArrowBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?pan=1&tilt=0&Language=0";
});

//ビューワーの比率
const wideFrameSizeBtn = document.getElementById("wide-frame-size")
const smallFrameSizeBtn = document.getElementById("small-frame-size")

wideFrameSizeBtn.addEventListener('click', () => {
  cameraViewer.style.width = '40rem'
  cameraViewer.style.height = '20rem';
});

smallFrameSizeBtn.addEventListener('click', () => {
  cameraViewer.style.width = '30rem'
  cameraViewer.style.height = '18rem';
});

//サイドのボタン
const angle1SideBtn = document.getElementById("side1")
const angle2SideBtn = document.getElementById("side2")
const angle3SideBtn = document.getElementById("side3")
const zoomInSideBtn = document.getElementById("side+")
const zoomOutSideBtn = document.getElementById("side-")
const upSideBtn = document.getElementById("side-up")
const downSideBtn = document.getElementById("side-down")
const leftSideBtn = document.getElementById("side-left")
const rightSideBtn = document.getElementById("side-right")

angle1SideBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?preset=1";
});

angle2SideBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?preset=2";
});

angle3SideBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?preset=3";
});

zoomInSideBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/directctrl?zoom=1";
});

zoomOutSideBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/directctrl?zoom=-1";
});

upSideBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?pan=0&tilt=-1&Language=0";
});

downSideBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?pan=0&tilt=1&Language=0";
});

leftSideBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?pan=-1&tilt=0&Language=0";
});

rightSideBtn.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInput.value + "/cgi-bin/camctrl?pan=1&tilt=0&Language=0";
});


//pingの値が表示される コード書き途中
const pingStartBtn = document.getElementById("ping-start-btn")
const pingStopBtn = document.getElementById("ping-stop-btn")
const pingResultValue = document.getElementById("ping-value")
let pingRunning = false;

pingStartBtn.addEventListener('click', async () => {
  pingRunning = true;
  for(let i = 0; i<i+1;i++){
    if(!pingRunning) {//ping停止ボタンが押されたらループから抜ける。
      break;
    }
    const host = ipAddressInput.value;
    const startTime = new Date().getTime(); // ping開始時間
    const result = await eel.ping_host(host)(); // ping_host関数を非同期で呼び出す
    const endTime = new Date().getTime(); // ping終了時間
    const pingTime = endTime - startTime; // ping実行時間
    const newPre = document.createElement("pre");
    newPre.classList.add("new-pre-class");
    newPre.textContent = `ping:${pingTime}ミリ秒`;
    pingResultValue.parentNode.appendChild(newPre);

    await new Promise(resolve => setTimeout(resolve, 1000))
  }
});

pingStopBtn.addEventListener('click', () => {
  pingRunning = false;
});

