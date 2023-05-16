'use strict'
{
  // 最初から、スイッチOFFになっているswitch-containerの挙動
  const switchContainerList = document.querySelectorAll(".switch-container");//.switch-containeroというクラスが付いた要素を全て取得する。それを.switchContainerListという変数に格納する。
  for (let i = 0; i < switchContainerList.length; i++) {//.switch-containerの要素数分だけループを実行する。
    const switchContainer = switchContainerList[i];//ループ内で現在処理中の.switch-container要素を.switchContainerという変数に格納する。
    const switchOnButton = switchContainer.querySelector(".switch-on");//ONクラスのボタン要素の取得
    const switchOffButton = switchContainer.querySelector(".switch-off");//OFFクラスのボタン要素の取得
    switchOffButton.classList.add("clicked");//OFFボタン要素に.clickedクラスを追加する。これで、初期状態で、スイッチがOFFになる。
    switchOffButton.onclick = function () {//ON→OFFの時の挙動
      switchOffButton.classList.add("clicked");
      switchOnButton.classList.remove("clicked");
    }
    switchOnButton.onclick = function () {//OFF→ONの時の挙動
      switchOnButton.classList.add("clicked");
      switchOffButton.classList.remove("clicked");
    }
  }
  // 最初から、スイッチONになっている”旋回ブレーキ”の挙動
  const switchContainerOnList = document.querySelectorAll(".switch-container-ON");
  for (let i = 0; i < switchContainerOnList.length; i++) {
    const switchContainer = switchContainerOnList[i];
    const switchOnButton = switchContainer.querySelector(".switch-on");
    const switchOffButton = switchContainer.querySelector(".switch-off");
    switchOnButton.classList.add("clicked");
    switchOffButton.onclick = function () {
      switchOffButton.classList.add("clicked");
      switchOnButton.classList.remove("clicked");
    }
    switchOnButton.onclick = function () {
      switchOnButton.classList.add("clicked");
      switchOffButton.classList.remove("clicked");
    }
  }
// 黄色になっているcontainer（1、2、3とISO、タダノ、カスタム）
  const selectContainerList = document.querySelectorAll(".select-container");
  for (let i = 0; i < selectContainerList.length; i++) {
    const selectContainer = selectContainerList[i];
    const select1 = selectContainer.querySelector(".select-1");
    const select2 = selectContainer.querySelector(".select-2");
    const select3 = selectContainer.querySelector(".select-3");
    select1.classList.add("clicked");
    select1.onclick = function () {
      select1.classList.add("clicked");
      select2.classList.remove("clicked");
      select3.classList.remove("clicked");
    }
    select2.onclick = function () {
      select1.classList.remove("clicked");
      select2.classList.add("clicked");
      select3.classList.remove("clicked");
    }
    select3.onclick = function () {
      select1.classList.remove("clicked");
      select2.classList.remove("clicked");
      select3.classList.add("clicked");
    }
  }

  function registerSwitchEvents(target) {
    function resetColor() {
      target.style.backgroundColor = 'white';
    }
    target.addEventListener("mousedown", () => {
      target.style.backgroundColor = 'yellow';
    });
    target.addEventListener("mouseup", resetColor);
    target.addEventListener("mouseleave", resetColor);
  }
  registerSwitchEvents(document.querySelector('.switch-up'));
  registerSwitchEvents(document.querySelector('.switch-down'));

  const circle = document.querySelector('.circle');
  circle.addEventListener('mousedown', () => {
    circle.style.backgroundColor = 'yellow';
  });
  circle.addEventListener('mouseup', () => {
    circle.style.backgroundColor = 'white';
  });
  circle.addEventListener('mouseleave', () => {
    circle.style.backgroundColor = 'white';
  });

  //レバー・ペダル配列のボタンを押した時の、挙動
  //ISOボタンを押した時の挙動
  const isoButton = document.getElementById("iso-button");

  isoButton.addEventListener("click", () => {
    const panelContainer = document.getElementById("settings-panel");
    panelContainer.style.display = "none";//settings-panelを消す。
  });
  //タダノボタンを押した時の挙動
  const tadanoButton = document.getElementById('tadano-button');

  tadanoButton.addEventListener('click', () => {
    const panelContainer = document.getElementById('settings-panel');
    panelContainer.style.display = 'none';//settings-panelを消す。
  })
  //カスタムボタンを押した時の挙動
  const customButton = document.getElementById("custom-button");

  customButton.addEventListener("click", () => {
    const panelContainer = document.getElementById("settings-panel");
    panelContainer.style.display = "block";//settings-panelをブロックで表示。
  });

const saveSettingButton = document.querySelector('.save-settings');
const settingsPanel = document.getElementById('settings-panel');
saveSettingButton.addEventListener('click', function() {
  settingsPanel.style.display = 'none';
});


}
