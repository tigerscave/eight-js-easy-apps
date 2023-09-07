'use strict';

{
  function render(quiz) {
    const main = document.querySelector('main');

    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = quiz[0];

    const ul = document.createElement('ul');
    const li0 = document.createElement('li');
    li0.textContent = quiz[1];
    li0.addEventListener('click', () => {
      if (quiz[4] === 0) {
        li0.classList.add('correct');
      } else {
        li0.classList.add('wrong');
      }
    });
    const li1 = document.createElement('li');
    li1.textContent = quiz[2];
    li1.addEventListener('click', () => {
      if (quiz[4] === 1) {
        li1.classList.add('correct');
      } else {
        li1.classList.add('wrong');
      }
    });
    const li2 = document.createElement('li');
    li2.textContent = quiz[3];
    li2.addEventListener('click', () => {
      if (quiz[4] === 2) {
        li2.classList.add('correct');
      } else {
        li2.classList.add('wrong');
      }
    });

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);

    section.appendChild(h2);
    section.appendChild(ul);

    main.appendChild(section);
  }


  // 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)
 const quizzes = [
   ['①出身地は？', '愛知県', '高知県', '山口県', 0],
   ['②好きな動物は？', '北極グマ', 'キリン', 'マンドリル', 1],
   ['③好きな音楽は？', 'スピッツ', '大塚愛', '神聖かまってちゃん', 0],
   ['④好きな偉人は？', '織田信長', '福沢諭吉', 'やなせたかし', 2],
];
  quizzes.forEach((quiz) => {
     render(quiz);
  });
} 