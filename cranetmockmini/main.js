'use strict'

const editButton = document.getElementById('edit-button');
const groupSelectItems = document.querySelectorAll(".groups-select-item")

//カスタム編集ボタンを使う宣言。edit-button
let isDisable = true
// レバー設定ボタン・ペダル設定ボタンが有効になる。
editButton.addEventListener('click', () => {
  console.log('__clicked___')
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

const padelListA = document.getElementById('pedal-list-A')
const padelListB = document.getElementById('pedal-list-B')
const padelListC = document.getElementById('pedal-list-C')

const padelListAValue = localStorage.getItem('pedal-list-A')
const padelListBValue = localStorage.getItem('pedal-list-B')
const padelListCValue = localStorage.getItem('pedal-list-C')

padelListA.value = padelListAValue
padelListB.value = padelListBValue
padelListC.value = padelListCValue

padelListA.addEventListener('change', event => {
  localStorage.setItem('pedal-list-A', event.target.value);
  if(event.target.value === padelListC.value || event.target.value === padelListB.value){
    editButton.setAttribute('disabled', null)
  } else {
    editButton.removeAttribute('disabled')
  }
})

padelListB.addEventListener('change', event => {
  if(event.target.value === padelListA.value || event.target.value === padelListC.value){
    editButton.setAttribute('disabled', null)
  } else {
    editButton.removeAttribute('disabled')
  }
  localStorage.setItem(event.target.id, event.target.value);
})

padelListC.addEventListener('change', event => {
  if(event.target.value === padelListA.value || event.target.value === padelListB.value){
    editButton.setAttribute('disabled', null)
  } else {
    editButton.removeAttribute('disabled')
  }
  localStorage.setItem(event.target.id, event.target.value);
})