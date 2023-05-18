'use strict';

{
  const text = document.getElementById('text');
  const save = document.getElementById('save');
  const clear = document.getElementById('clear');
  const message = document.getElementById('message');
/*
今回のアプリでは、メモ帳のテキストを保存するために、memootいうキーを用意する。その値も保存する。
localStorageでは、３つの命令がある。
setaitem（’キー','値'）キーと値のペアをlocalStorrageに保存できる。
getItem（'キー'）引数にキーを指定することで、ペアの値を取得できる。
removeItem（'キー'）値を削除できる。
*/ 

// ページをリロードすると、データが消えてしまう。
// ページを読み込んだときに、localStorageのデータを取得し、それをテキストボックスで表示させる。
  if (localStorage.getItem('memo') === null) {
    text.value = '';
  } else {
    text.value = localStorage.getItem('memo');
  }
//saveをクリックしたときに保存する。
//保存ボタンを押したときにmessageにappearをつける。
  save.addEventListener('click', () => {
    message.classList.add('appear');
//設定ボタンを押したら、1秒後にappearクラスを外す。
    setTimeout(() => {
      message.classList.remove('appear');
    }, 1000);
  //ローカルストレージに保存する。
    localStorage.setItem('memo', text.value);
  });
//ローカルストレージから削除する。
  clear.addEventListener('click', () => {
    if (confirm('本当に削除しますか?') === true) {
      text.value = '';
      localStorage.removeItem('memo');
    }
  });
}