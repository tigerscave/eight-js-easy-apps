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

//各項目のプルダウンについて、イベントを付与する
const pedalListAValue = localStorage.getItem('pedal-list-A')
const pedalListBValue = localStorage.getItem('pedal-list-B')
const pedalListCValue = localStorage.getItem('pedal-list-C')

pedalListA.value = pedalListAValue
pedalListB.value = pedalListBValue
pedalListC.value = pedalListCValue

pedalListA.addEventListener('change', event => {
  localStorage.setItem('pedal-list-A', event.target.value);
  if(event.target.value === pedalListC.value === 'S'|| '伸縮' || event.target.value === pedalListB.value === 'S'|| '伸縮'){
    editButton.setAttribute('disabled', null)
  } else {
    editButton.removeAttribute('disabled')
  }
})

pedalListB.addEventListener('change', event => {
  if(event.target.value === pedalListA.value === 'S'|| '伸縮' || event.target.value === pedalListC.value === 'S'|| '伸縮'){
    editButton.setAttribute('disabled', null)
  } else {
    editButton.removeAttribute('disabled')
  }
  localStorage.setItem(event.target.id, event.target.value);
})

pedalListC.addEventListener('change', event => {
  if(event.target.value === pedalListA.value === 'S'|| '伸縮' || event.target.value === pedalListB.value === 'S'|| '伸縮'){
    editButton.setAttribute('disabled', null)
  } else {
    editButton.removeAttribute('disabled')
  }
  localStorage.setItem(event.target.id, event.target.value);
})

// 各項目のプルダウンについて、初期値を未選択とする。
pedalListA.value = pedalListAValue || '未選択'; 
pedalListB.value = pedalListBValue || '未選択'; 
pedalListC.value = pedalListCValue || '未選択'; 









