'use strict'
// 左上：旋回ブレーキのON⇔OFF切り替え
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

// 他：ON⇔OFFの切り替え
const switchContainerList = document.querySelectorAll(".switch-container");

for (let i = 0; i < switchContainerList.length; i++) {
  const switchContainer = switchContainerList[i];
  const switchOnButton = switchContainer.querySelector(".switch-on");
  const switchOffButton = switchContainer.querySelector(".switch-off");

  switchOffButton.classList.add("clicked");
  switchOffButton.onclick = function () {
    switchOffButton.classList.add("clicked");
    switchOnButton.classList.remove("clicked");
  }
  switchOnButton.onclick = function () {
    switchOnButton.classList.add("clicked");
    switchOffButton.classList.remove("clicked");
  }
}

// ブームジブ選択・レバーペダル配列の切り替え
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
//アイドルボリュームをクリック時→黄色
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

//巻き過解除をクリック時→黄色
const circle = document.querySelector('.circle');
circle.addEventListener('mousedown', () => {
  circle.style.backgroundColor = 'yellow';
});
circle.addEventListener('mouseup', () => {
  circle.style.backgroundColor = 'white';
});


//レバ＝設定、ペダル設定の定義
const panelContainer = document.getElementById("settings-panel");

//ISOボタン、タダノボタンをクリック時→settings-panelを消す。
const isoButton = document.getElementById("iso-button");
const tadanoButton = document.getElementById('tadano-button');
isoButton.addEventListener("click", () => {
  panelContainer.style.display = "none";
});
tadanoButton.addEventListener('click', () => {
  panelContainer.style.display = 'none';
})

//カスタムボタンをクリック時→//settings-panelを表示する
const customButton = document.getElementById("custom-button");

customButton.addEventListener("click", () => {
  panelContainer.style.display = "block";
});
