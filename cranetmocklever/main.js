'use strict'

const editButton = document.getElementById('edit-button');

const leverList2 = document.getElementById('lever-list-2');
const leverList3 = document.getElementById('lever-list-3');
const leverList4 = document.getElementById('lever-list-4');
const leverList5 = document.getElementById('lever-list-5');

const leverLists = {
  leverList2: document.getElementById('lever-list-2'),
  leverList3: document.getElementById('lever-list-2'),
  leverList4: document.getElementById('lever-list-2'),
  leverList5: document.getElementById('lever-list-2'),
};

leverList4.addEventListener('change', () => {
  if (leverList4.value === '未選択') {
    editButton.setAttribute('disabled', '');
  } else {
  editButton.removeAttribute('disabled');
}
});

leverList2.addEventListener('change', () => {
  if (leverList2.value === '未選択') {
    editButton.setAttribute('disabled', '');
  } else {
  editButton.removeAttribute('disabled');
}
});

