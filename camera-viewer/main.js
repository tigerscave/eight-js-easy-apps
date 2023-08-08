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
  }
});

// IPアドレスの値をlocalStorageから読み込み
if (localStorage.getItem('address-number') === null) {
  ipAddressInputElement.value = '';
} else {
  ipAddressInputElement.value = localStorage.getItem('address-number');
  //既にIPアドレスの値が入力されていたら、カメラビューワーに反映させる。
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/ImageViewer?Mode=Motion&Resolution=640x360&Quality=Standard&Interval=10";
};

//ビューワーの拡大縮小
const zoomInMonitorButton = document.getElementById("zoom-in-monitor-button")
const zoomOutMonitorButton = document.getElementById("zoom-out-monitor-button")

zoomInMonitorButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/directctrl?zoom=1";
});

zoomOutMonitorButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/directctrl?zoom=-1";
});

//ビューワーの上下左右移動
const moveUpButton = document.getElementById("up-button")
const moveDownButton = document.getElementById("down-button")
const moveLeftButton = document.getElementById("left-button")
const moveRightButton = document.getElementById("right-button")

moveUpButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=0&tilt=-1&Language=0";
});

moveDownButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=0&tilt=1&Language=0";
});

moveLeftButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=-1&tilt=0&Language=0";
});

moveRightButton.addEventListener('click', () => {
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/cgi-bin/camctrl?pan=1&tilt=0&Language=0";
});