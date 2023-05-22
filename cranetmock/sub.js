'use strict'
{
  //ペダル設定について
  //伸縮、S、未選択から選択できる。同じのはダメ。
  //ペダルA＝伸縮、ペダルB＝伸縮、ペダルC＝伸縮
  //ペダルA＝S、ペダルB＝S、ペダルC＝S
  //A=B, A=C, B=Cのとき、カスタム設定を保存がdisabled

  const doubleChoice = [
    { source: 'pedal-list-A', target: 'pedal-list-B', value: '伸縮' },
    { source: 'pedal-list-A', target: 'pedal-list-C', value: '伸縮' },
    { source: 'pedal-list-B', target: 'pedal-list-C', value: '伸縮' }
  ];
  doubleChoice.forEach((select) => {
    select.setAttribute('edit-button', 'disabled');
  });
   
}

