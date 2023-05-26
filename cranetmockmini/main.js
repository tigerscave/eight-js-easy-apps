'use strict'

const editButton = document.getElementById('edit-button');

const pedalListA = document.getElementById('pedal-list-A')
const pedalListB = document.getElementById('pedal-list-B')
const pedalListC = document.getElementById('pedal-list-C')

const groupSelectItems = document.querySelectorAll(".groups-select-item")

//カスタム設定を編集⇔保存の文字切り替え
let isDisable = true
editButton.addEventListener('click', () => {
  if(isDisable) {
    groupSelectItems.forEach(item => {
      item.removeAttribute('disabled')
    })
    editButton.textContent = 'カスタム設定を保存';
    isDisable = false
  } else {
    groupSelectItems.forEach(item => {
      item.setAttribute('disabled', null)
    })
    editButton.textContent = 'カスタム設定を編集';
    isDisable = true
  }
});

// 各項目のプルダウンについて、イベントを付与する
const pedalListAValue = localStorage.getItem('pedal-list-A');
const pedalListBValue = localStorage.getItem('pedal-list-B');
const pedalListCValue = localStorage.getItem('pedal-list-C');

// 初期値の設定
pedalListA.value = pedalListAValue || "未選択";
pedalListB.value = pedalListBValue || "未選択";
pedalListC.value = pedalListCValue || "未選択";

// イベントリスナーの追加
pedalListA.addEventListener('change', event => {
  localStorage.setItem('pedal-list-A', event.target.value);
  if (
    (event.target.value === 'S' || event.target.value === '伸縮') &&
    (pedalListB.value === 'S' || pedalListB.value === '伸縮' || pedalListC.value === 'S' || pedalListC.value === '伸縮')
  ) {
    editButton.setAttribute('disabled', '');
  } else {
    editButton.removeAttribute('disabled');
  }
});

pedalListB.addEventListener('change', event => {
  localStorage.setItem(event.target.id, event.target.value);
  if (
    (event.target.value === 'S' || event.target.value === '伸縮') &&
    (pedalListA.value === 'S' || pedalListA.value === '伸縮' || pedalListC.value === 'S' || pedalListC.value === '伸縮')
  ) {
    editButton.setAttribute('disabled', '');
  } else {
    editButton.removeAttribute('disabled');
  }
});

pedalListC.addEventListener('change', event => {
  localStorage.setItem(event.target.id, event.target.value);
  if (
    (event.target.value === 'S' || event.target.value === '伸縮') &&
    (pedalListA.value === 'S' || pedalListA.value === '伸縮' || pedalListB.value === 'S' || pedalListB.value === '伸縮')
  ) {
    editButton.setAttribute('disabled', '');
  } else {
    editButton.removeAttribute('disabled');
  }
});