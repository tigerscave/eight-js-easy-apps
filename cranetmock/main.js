'use strict'
{
  // 最初から、スイッチOFFになっているswitch-containerの挙動
  const switchContainerList = document.querySelectorAll(".switch-container");//.switch-containeroというクラスが付いた要素を全て取得する。それを.switchContainerListという変数に格納する。
  for (let i = 0; i < switchContainerList.length; i++) {//.switch-containerの要素数分だけループを実行する。
    const switchContainer = switchContainerList[i];//ループ内で現在処理中の.switch-container要素を.switchContainerという変数に格納する。
    const switchOnButton = switchContainer.querySelector(".switch-on");//ONクラスのボタン要素の取得
    const switchOffButton = switchContainer.querySelector(".switch-off");//OFFクラスのボタン要素の取得
    switchOffButton.classList.add("clicked");//OFFボタン要素に.clickedクラスを追加する。これで、初期状態で、スイッチがOFFになる。
    switchOffButton.onclick = function () {//ON→OFFの時の挙動
      switchOffButton.classList.add("clicked");
      switchOnButton.classList.remove("clicked");
    }
    switchOnButton.onclick = function () {//OFF→ONの時の挙動
      switchOnButton.classList.add("clicked");
      switchOffButton.classList.remove("clicked");
    }
  }
  // 最初から、スイッチONになっている”旋回ブレーキ”の挙動
  const switchContainerOnList = document.querySelectorAll(".switch-container-ON");
  for (let i = 0; i < switchContainerOnList.length; i++) {
    const switchContainer = switchContainerOnList[i];
    const switchOnButton = switchContainer.querySelector(".switch-on");
    const switchOffButton = switchContainer.querySelector(".switch-off");
    switchOnButton.classList.add("clicked");
    switchOffButton.onclick = function () {
      switchOffButton.classList.add("clicked");
      switchOnButton.classList.remove("clicked");
    }
    switchOnButton.onclick = function () {
      switchOnButton.classList.add("clicked");
      switchOffButton.classList.remove("clicked");
    }
  }
  // 黄色になっているcontainer（1、2、3とISO、タダノ、カスタム）
  const selectContainerList = document.querySelectorAll(".select-container");
  for (let i = 0; i < selectContainerList.length; i++) {
    const selectContainer = selectContainerList[i];
    const select1 = selectContainer.querySelector(".select-1");
    const select2 = selectContainer.querySelector(".select-2");
    const select3 = selectContainer.querySelector(".select-3");
    select1.classList.add("clicked");
    select1.onclick = function () {
      select1.classList.add("clicked");
      select2.classList.remove("clicked");
      select3.classList.remove("clicked");
    }
    select2.onclick = function () {
      select1.classList.remove("clicked");
      select2.classList.add("clicked");
      select3.classList.remove("clicked");
    }
    select3.onclick = function () {
      select1.classList.remove("clicked");
      select2.classList.remove("clicked");
      select3.classList.add("clicked");
    }
  }
  //アイドルボリュームと巻き過解除ボタンの挙動
  function registerSwitchEvents(target) { //関数名の定義
    function resetColor() {
      target.style.backgroundColor = 'white';//要素の背景色を白色にリセットする。
    }
    target.addEventListener("mousedown", () => {//mousedownイベントでクリックされている間だけ、実行される。
      target.style.backgroundColor = 'yellow';//targetを引数として渡す。styleプロパティは、要素のスタイルを操作するプロパティ
    });
    target.addEventListener("mouseup", resetColor);
    target.addEventListener("mouseleave", resetColor);
  }
  registerSwitchEvents(document.querySelector('.switch-up'));
  registerSwitchEvents(document.querySelector('.switch-down'));

  const circle = document.querySelector('.circle');
  circle.addEventListener('mousedown', () => {
    circle.style.backgroundColor = 'yellow';
  });
  circle.addEventListener('mouseup', () => {
    circle.style.backgroundColor = 'white';
  });
  circle.addEventListener('mouseleave', () => {
    circle.style.backgroundColor = 'white';
  });

  //レバー・ペダル配列のボタンを押した時の、挙動
  //ISOボタンを押した時の挙動
  const isoButton = document.getElementById("iso-button");

  const panelContainer = document.getElementById("settings-panel");

  isoButton.addEventListener("click", () => {
    panelContainer.style.display = "none";//settings-panelを消す。
  });
  //タダノボタンを押した時の挙動
  const tadanoButton = document.getElementById('tadano-button');

  tadanoButton.addEventListener('click', () => {
    panelContainer.style.display = 'none';//settings-panelを消す。
  })
  //カスタムボタンを押した時の挙動
  const customButton = document.getElementById("custom-button");

  customButton.addEventListener("click", () => {
    panelContainer.style.display = "block";//settings-panelをブロックで表示。
  });

  //レバー設定を押した時のプルダウン
  const leverChoice = [
    { name: "伸縮" },
    { name: "S" },
    { name: "M" },
    { name: "起伏" },
  ];

  const leverSettings = document.querySelectorAll("[id^='lever-list']");

  leverSettings.forEach((select) => {
    leverChoice.forEach((choice) => {
      let option = document.createElement("option");
      option.text = choice.name;
      select.appendChild(option);
    });
  });

  //ペダ設定を押した時のプルダウン
  const PedalChoice = [
    { name: "伸縮" },
    { name: "S" },
  ];

  const pedalSettings = document.querySelectorAll("[id^='pedal-list']");

  pedalSettings.forEach((select) => {
    PedalChoice.forEach((choice) => {
      let option = document.createElement("option");
      option.text = choice.name;
      select.appendChild(option);
    });
  });

  //カスタム編集ボタンを使う宣言。edit-button
  const editButton = document.getElementById('edit-button');
  let isDisable = "yes"
  // レバー設定ボタン・ペダル設定ボタンが有効になる。
  editButton.addEventListener('click', () => {

    if (isDisable == 'yes') {
      leverSettings.forEach((select) => {
        select.removeAttribute('disabled');//属性.関数('属性名')
      });
      pedalSettings.forEach((select) => {
        select.removeAttribute('disabled');
      });

      editButton.textContent = 'カスタム設定を保存';
      isDisable = 'no'
    } else {
      leverSettings.forEach((select) => {
        select.setAttribute('disabled', null);//属性.関数('属性名')
      });
      pedalSettings.forEach((select) => {
        select.setAttribute('disabled', null);
      });

      editButton.textContent = 'カスタム設定を編集';
      isDisable = 'yes'
    }

  });


  //ローカルストレージにデータを保存する。
  const settingsStorage = document.querySelectorAll('.choice');
  editButton.addEventListener('click', () => {
    settingsStorage.forEach(select => {
      const selectedOption = select.options[select.selectedIndex];
      const selectedValue = selectedOption.value;
      localStorage.setItem(select.id, selectedValue);
    });
  });

  settingsStorage.forEach(select => {
    const savedValue = localStorage.getItem(select.id);
    if (savedValue) {
      select.value = savedValue;
    }
  });












}






