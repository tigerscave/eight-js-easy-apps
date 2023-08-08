'use strict'

const ipAddressInputElement = document.getElementById("ip-address")
const registerIpAddressButton = document.getElementById("register-ip-address-button")
const cameraViewer = document.getElementById("camera-viewer")

registerIpAddressButton.addEventListener('click', () => {
  if (registerIpAddressButton.innerText === "編集") {
    registerIpAddressButton.innerText = "保存";
    ipAddressInputElement.disabled = false;
  } else if (registerIpAddressButton.innerText === "保存") {
    registerIpAddressButton.innerText = "編集";
    //入力されたIPアドレスの値を、カメラビューワーに反映させる。
    cameraViewer.src = "http://" + ipAddressInputElement.value + "/ImageViewer?Mode=Motion&Resolution=640x360&Quality=Standard&Interval=10";
    ipAddressInputElement.disabled = true;
    localStorage.setItem('address-number', ipAddressInputElement.value);
  }
});

// IPアドレスの値をlocalStorageから読み込み
if (localStorage.getItem('address-number') === null) {
  ipAddressInputElement.value = '';
} else {
  ipAddressInputElement.value = localStorage.getItem('address-number');
  cameraViewer.src = "http://" + ipAddressInputElement.value + "/ImageViewer?Mode=Motion&Resolution=640x360&Quality=Standard&Interval=10";
}