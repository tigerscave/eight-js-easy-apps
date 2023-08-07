'use strict'

const inputIPaddress = document.getElementById("ip-address")
const toggleButton = document.getElementById("toggle-button")
const cameraViewer = document.getElementById("camera-viewer")

toggleButton.addEventListener('click',()=>{
  if(toggleButton.innerText === "編集"){
    toggleButton.innerText = "保存";
    inputIPaddress.disabled = false;
  } else if(toggleButton.innerText === "保存"){
    toggleButton.innerText = "編集";
    //入力されたIPアドレスの値を、カメラビューワーに反映させる。
    cameraViewer.src = "http://" + inputIPaddress.value + "/ImageViewer?Mode=Motion&Resolution=640x360&Quality=Standard&Interval=10";
    inputIPaddress.disabled = true;
  }
});