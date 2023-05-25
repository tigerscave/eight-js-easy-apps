'use strict'

const editButton = document.getElementById('edit-button');

const leverList2 = document.getElementById('lever-list-2');
const leverList3 = document.getElementById('lever-list-3');
const leverList4 = document.getElementById('lever-list-4');
const leverList5 = document.getElementById('lever-list-5');
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
leverList2.addEventListener('change', checkSelection);
leverList3.addEventListener('change', checkSelection);
leverList4.addEventListener('change', checkSelection);
leverList5.addEventListener('change', checkSelection);

function checkSelection() {
  if (leverList2.value === '未選択' || leverList3.value === '未選択' || leverList4.value === '未選択' || leverList5.value === '未選択' || leverList2.value === leverList3 || leverList2.value === leverList4 || leverList2.value === leverList5 || leverList3.value === leverList4 || leverList3.value === leverList5 || leverList4.value === leverList5.value) {
    editButton.setAttribute('disabled', '');
  } else {
    editButton.removeAttribute('disabled');
  }
}
