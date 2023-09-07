'use strict'
const hornButton = document.getElementById('horn-button');

hornButton.addEventListener("mousedown",() => {
  hornButton.style.backgroundColor = 'pink';
  hornButton.textContent = "ON";
});
hornButton.addEventListener("mouseup",() => {
  hornButton.style.backgroundColor = 'white';
  hornButton.textContent ="OFF";
}
);


const slider = document.getElementById('slider');

slider.addEventListener('input', () => {
  const leverLength = document.getElementById('lever-length');
  leverLength.textContent = slider.value;
});


//target属性を使ったON⇔OFF切り替えのコード
// hornButtonEvent(document.querySelector('.button'));
// function hornButtonEvent(target) {
//   function resetEvent() {
//     target.style.backgroundColor = 'white';
//     target.textContent ="OFF";
//   }
//   target.addEventListener("mousedown", () => {
//     target.style.backgroundColor = 'pink';
//     target.textContent = "ON";
//   });
//   target.addEventListener("mouseup", resetEvent);
// }