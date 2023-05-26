'use strict'

const editButton = document.getElementById('edit-button');

const leverList2 = document.getElementById('lever-list-2');
const leverList3 = document.getElementById('lever-list-3');
const leverList4 = document.getElementById('lever-list-4');
const leverList5 = document.getElementById('lever-list-5');
const groupSelectItems = document.querySelectorAll(".groups-select-item")

//カスタム設定を編集⇔保存の文字切り替え
let isDisable = true
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

//各項目のプルダウンについて、イベントを付与する
leverList2.addEventListener('change', checkSelection);
leverList3.addEventListener('change', checkSelection);
leverList4.addEventListener('change', checkSelection);
leverList5.addEventListener('change', checkSelection);

function checkSelection() {
  const leverListArray = [leverList2, leverList3, leverList4, leverList5];
  let hasUnselected = false;
  let hasDuplicates = false;

  for (let i = 0; i < leverListArray.length; i++) {
    const currentSelection = leverListArray[i].value;

    if (currentSelection === '未選択') {
      hasUnselected = true;
      break; //未選択がある場合、ループを終了
    }

    for (let j = i + 1; j < leverListArray.length; j++) {
      if (currentSelection === leverListArray[j].value) {
        hasDuplicates = true;
        break;//重複がある場合、ループを終了
      }
    }
    if (hasDuplicates) {
      break;//重複がある場合、ループを終了
    }
  }
  if (hasUnselected || hasDuplicates) {
    editButton.setAttribute('disabled', '');
  } else {
    editButton.removeAttribute('disabled');
  }
}

//ローカルストレージへの値の保存
groupSelectItems.forEach(item => {
  item.addEventListener('change', () => {
    const key = item.getAttribute('id');
    const value = item.value;
    localStorage.setItem(key, value);
  });
});

//ローカルストレージからの値の読み込み
groupSelectItems.forEach(item => {
  const key = item.getAttribute('id');
  const value = localStorage.getItem(key);
  if (value) {
    item.value = value;
  }
});

const pedalListA = document.getElementById('pedal-list-A')
const pedalListB = document.getElementById('pedal-list-B')
const pedalListC = document.getElementById('pedal-list-C')

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
