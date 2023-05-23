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

const leverList2 = document.getElementById('lever-list-2')
const leverList3 = document.getElementById('lever-list-3')
const leverList4 = document.getElementById('lever-list-4')
const leverList5 = document.getElementById('lever-list-5')

const leverList2Value = localStorage.getItem('lever-list-2')
const leverList3Value = localStorage.getItem('lever-list-3')
const leverList4Value = localStorage.getItem('lever-list-4')
const leverList5Value = localStorage.getItem('lever-list-5')

leverList2.value = leverList2Value
leverList3.value = leverList3Value
leverList4.value = leverList4Value
leverList5.value = leverList5Value

leverList2.addEventListener('change', event => {
  if(event.target.value === leverList3.value || event.target.value === leverList4.value || event.target.value === leverList5.value) {
    editButton.setAttribute('disabled', null)
  } else {
    editButton.removeAttribute('disabled')
    localStorage.setItem('lever-list-2', event.target.value);
  }
})

leverList3.addEventListener('change', event => {
  if(event.target.value === leverList2.value || event.target.value === leverList4.value || event.target.value === leverList5.value){
    editButton.setAttribute('disabled', null)
  } else {
    editButton.removeAttribute('disabled')
    localStorage.setItem(event.target.id, event.target.value);
  }
})

leverList4.addEventListener('change', event => {
  if(event.target.value === leverList2.value || event.target.value === leverList3.value || event.target.value === leverList5.value) {
    editButton.setAttribute('disabled', null)
  } else {
    editButton.removeAttribute('disabled')
    localStorage.setItem(event.target.id, event.target.value);
  }

})

leverList5.addEventListener('change', event => {
  if(event.target.value === leverList2.value || event.target.value === leverList3.value || event.target.value === leverList4.value) {
    editButton.setAttribute('disabled', null)
  } else {
    editButton.removeAttribute('disabled')
    localStorage.setItem(event.target.id, event.target.value);
  }
 
})

if (leverList2Value === '未選択' && leverList3Value === '未選択' && leverList4Value === '未選択' && leverList5Value === '未選択')  {
    editButton.textContent = 'カスタム設定を保存';
    isDisable = true
}