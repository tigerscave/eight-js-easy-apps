'use strict'

const editButton = document.getElementById('edit-button');
const groupSelectItems = document.querySelectorAll(".groups-select-item")

//カスタム編集ボタンを使う宣言。edit-button
let isDisable = true
// レバー設定ボタン・ペダル設定ボタンが有効になる。
editButton.addEventListener('click', () => {
  if (isDisable) {
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

const leverList2 = document.getElementById('lever-list-2')
const leverList3 = document.getElementById('lever-list-3')
const leverList4 = document.getElementById('lever-list-4')
const leverList5 = document.getElementById('lever-list-5')

const leverList2Value = localStorage.getItem('lever-list-2')
const leverList3Value = localStorage.getItem('lever-list-3')
const leverList4Value = localStorage.getItem('lever-list-4')
const leverList5Value = localStorage.getItem('lever-list-5')

leverList2.value = leverList2Value ? leverList2Value : "未選択"
leverList3.value = leverList3Value ? leverList3Value : "未選択"
leverList4.value = leverList4Value ? leverList4Value : "未選択"
leverList5.value = leverList5Value ? leverList5Value : "未選択"

leverList2.addEventListener('change', event => {
  saveToLocalstorage(event, leverList3, leverList4, leverList5)
})

leverList3.addEventListener('change', event => {
  saveToLocalstorage(event, leverList2, leverList4, leverList5)

})

leverList4.addEventListener('change', event => {
  saveToLocalstorage(event, leverList2, leverList3, leverList5)

})

leverList5.addEventListener('change', event => {
  saveToLocalstorage(event, leverList2, leverList3, leverList4)
})

if (leverList2Value === '未選択' && leverList3Value === '未選択' && leverList4Value === '未選択' && leverList5Value === '未選択') {
  editButton.textContent = 'カスタム設定を保存';
  isDisable = true
}


const saveToLocalstorage = (event, lever1, lever2, lever3) => {
  const value = event.target.value
  if (value != "未選択") {

    if (value === lever1.value || value === lever2.value || value === lever3.value) {
      editButton.setAttribute('disabled', null)
    } else {
      editButton.removeAttribute('disabled')
      localStorage.setItem(event.target.id, value);
    }
  } else {
    editButton.removeAttribute('disabled')
  }
}

const disableSaveButton = () => {
  if (editButton.textContent === 'カスタム設定を保存' && value === "未選択") {
    editButton.setAttribute('disabled', '');
  }
};