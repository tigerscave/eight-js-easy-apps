'use strict';
{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  btn.addEventListener('click', () => {
    const results = ['あさり汁', '野菜炒め', 'ぱらぱらチャーハン', '塩ラーメン', '小倉トースト'];
    const n = Math.floor(Math.random() * results.length);
    result.textContent = results[n];
  });
}