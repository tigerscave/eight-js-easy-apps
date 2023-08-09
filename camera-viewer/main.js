'use strict'

//Webサイトの拡大、縮小
const zoomInHtmlButton = document.getElementById("zoom-in-html-button")
const zoomOutHtmlButton = document.getElementById("zoom-out-html-button")
const htmlPage = document.getElementById("html-page")
const htmlZoomLevel = document.getElementById("html-zoom-level")

let zoomLevel = 1.0;

zoomInHtmlButton.addEventListener('click', () => {
  zoomLevel = zoomLevel + 0.1;
  htmlPage.style.transformOrigin = `top left`;//左上を基準
  htmlPage.style.transform = `scale(${zoomLevel})`;//0.1ずつ拡大
  htmlZoomLevel.innerText = zoomLevel.toFixed(1);
});

zoomOutHtmlButton.addEventListener('click', () => {
  zoomLevel = zoomLevel - 0.1;
  htmlPage.style.transformOrigin = `top left`;
  htmlPage.style.transform = `scale(${zoomLevel})`;
  htmlZoomLevel.innerText = zoomLevel.toFixed(1);
});

//IPアドレス関係
const ipAddressInputElement = document.getElementById("ip-address")
const registerIpAddressButton = document.getElementById("register-ip-address-button")
const cameraViewer = document.getElementById("camera-viewer")
const networkMessage = document.getElementById("network-message")

registerIpAddressButton.addEventListener('click', () => {
  if (registerIpAddressButton.innerText === "編集") {
    registerIpAddressButton.innerText = "保存";
    ipAddressInputElement.disabled = false;
    registerIpAddressButton.style.background = "#EEEEEE";
  } else if (registerIpAddressButton.innerText === "保存") {
    registerIpAddressButton.innerText = "編集";
    //入力されたIPアドレスの値を、カメラビューワーに反映させる。
    cameraViewer.src = "http://" + ipAddressInputElement.value + "/ImageViewer?Mode=Motion&Resolution=640x360&Quality=Standard&Interval=10";
    ipAddressInputElement.disabled = true;
    localStorage.setItem('address-number', ipAddressInputElement.value);
    registerIpAddressButton.style.background = "#D9E5FF";

    //文字の切り替え（接続中⇔表示する映像はありません）
    if (localStorage.getItem('address-number') !== "") {
      ipAddressInputElement.value = localStorage.getItem('address-number')
      cameraViewer.src = "http://" + ipAddressInputElement.value + "/ImageViewer?Mode=Motion&Resolution=640x360&Quality=Standard&Interval=10";
      networkMessage.innerText = "接続中！"
    } else {
      networkMessage.innerText = "表示する映像はありません。"
    }
  }
});

//リロード時に、IPアドレスの値が入力されていたら、カメラビューワーに反映させる。
if (localStorage.getItem('address-number') !== "") {
  ipAddressInputElement.value = localStorage.getItem('address-number')
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/ImageViewer?Mode=Motion&Resolution=640x360&Quality=Standard&Interval=10";
  networkMessage.innerText = "接続中！"
} else {
  networkMessage.innerText = "表示する映像はありません。"
}

//ビューワーの拡大縮小
const zoomInMonitorButton = document.getElementById("zoom-in-monitor-button")
const zoomOutMonitorButton = document.getElementById("zoom-out-monitor-button")

zoomInMonitorButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/directctrl?zoom=1";
});

zoomOutMonitorButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/directctrl?zoom=-1";
});

//ビューワーのプリセット
//保存
const savePreset1Button = document.getElementById('save-preset1')
const savePreset2Button = document.getElementById('save-preset2')
const savePreset3Button = document.getElementById('save-preset3')

savePreset1Button.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camposiset?presetset=1"
  //画面遷移を防止するため、ページをリロードする。
  setTimeout(() => {
    location.reload()
  }, 200)
});

savePreset2Button.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camposiset?presetset=2"
  setTimeout(() => {
    location.reload()
  }, 200)
});

savePreset3Button.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/image_adjust?brightness=3"
  setTimeout(() => {
    location.reload()
  }, 200)
});

//移動
const movePreset1Button = document.getElementById("move-preset1")
const movePreset2Button = document.getElementById("move-preset2")
const movePreset3Button = document.getElementById("move-preset3")

movePreset1Button.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?preset=1";
});
movePreset2Button.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?preset=2";
});
movePreset3Button.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?preset=3";
});


//ビューワーの上下左右移動
const upArrowButton = document.getElementById("up-button")
const downArrowButton = document.getElementById("down-button")
const leftArrowButton = document.getElementById("left-button")
const rightArrowButton = document.getElementById("right-button")

upArrowButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=0&tilt=-1&Language=0";
});

downArrowButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=0&tilt=1&Language=0";
});

leftArrowButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=-1&tilt=0&Language=0";
});

rightArrowButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=1&tilt=0&Language=0";
});

//ビューワーの比率
const enlargeRatioButton = document.getElementById("enlarge-ratio")
const reduceRatioButton = document.getElementById("reduce-ratio")

enlargeRatioButton.addEventListener('click', () => {
  cameraViewer.style.width = '40rem'
  cameraViewer.style.height = '20rem';
});

reduceRatioButton.addEventListener('click', () => {
  cameraViewer.style.width = '30rem'
  cameraViewer.style.height = '18rem';
});

//ミニボタン
const miniMove1Button = document.getElementById("mini1")
const miniMove2Button = document.getElementById("mini2")
const miniMove3Button = document.getElementById("mini3")
const miniZoomInButton = document.getElementById("mini+")
const miniZoomOutButton = document.getElementById("mini-")
const miniUpButton = document.getElementById("mini-up")
const miniDownButton = document.getElementById("mini-down")
const miniLeftButton = document.getElementById("mini-left")
const miniRightButton = document.getElementById("mini-right")

miniMove1Button.addEventListener('click',()=>{
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?preset=1";
});

miniMove2Button.addEventListener('click',()=>{
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?preset=2";
});

miniMove3Button.addEventListener('click',()=>{
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?preset=3";
});

miniZoomInButton.addEventListener('click',()=>{
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/directctrl?zoom=1";
});

miniZoomOutButton.addEventListener('click',()=>{
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/directctrl?zoom=-1";
});

miniUpButton.addEventListener('click',()=>{
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=0&tilt=-1&Language=0";
});

miniDownButton.addEventListener('click',()=>{
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=0&tilt=1&Language=0";
});

miniLeftButton.addEventListener('click',()=>{
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=-1&tilt=0&Language=0";
});

miniRightButton.addEventListener('click',()=>{
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=1&tilt=0&Language=0";
});