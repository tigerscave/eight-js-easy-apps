'use strict';
{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  btn.addEventListener('click' , () => {
    const results = ['あさり汁', '野菜炒め' ,'ぱらぱらチャーハン', '塩ラーメン', '小倉トースト'];
    const n = Math.floor(Math.random() * results.length);  
    result.textContent = results[n];
    
    const foodImgs = document.querySelectorAll('.food-img');
      foodImgs.forEach((img) => {
        img.style.display='none'
      });
    if (results[n] === 'あさり汁') {
      foodImgs.forEach((img) => {
        img.src = 'asarijiru.jpeg';
        img.alt = 'あさり汁の画像';
        img.style.display = 'block';
      });
    } else if (results[n] === '野菜炒め') {
      foodImgs.forEach((img) => {
        img.src = 'yasaiitame.jpeg';
        img.alt = '野菜炒めの画像';
        img.style.display = 'block';
      });
    } else if (results[n] === 'ぱらぱらチャーハン') {
      foodImgs.forEach((img) => {
        img.src = 'tya-han.jpeg';
        img.alt = 'ぱらぱらチャーハンの画像';
        img.style.display = 'block';
      });
    } else if (results[n] === '塩ラーメン') {
      foodImgs.forEach((img) => {
        img.src = 'sio-ramen.jpeg';
        img.alt = '塩ラーメンの画像';
        img.style.display = 'block';
      });
    } else if (results[n] === '小倉トースト') {
      foodImgs.forEach((img) => {
        img.src = 'ogura-tosuto.jpeg';
        img.alt = '小倉トーストの画像';
        img.style.display = 'block';
      });
    }
  }); 
}