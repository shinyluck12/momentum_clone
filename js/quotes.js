const quotes = [
  {
    quotes:
      "할 수 없는 일을 해낼때가 아니라 할 수 있는 일을 매일 할 때, 우주는 우리를 돕는다.",
    author: "김연수<<지지 않는다는 말>>",
  },
  {
    quotes: "과거는 잊어버리고 다른 일에 몰두하자. 이것이 고민의 해결이다.",
    author: "잭 탬프시",
  },
  {
    quotes:
      "빛을 보기엔 늦었다길래 창밖을 보니 어둠이 몰려오고 있었다. 늦었구나 생각했는데 생각해보니 달빛은 이제 시작이구나",
    author: "<아무것도 늦지 않았다>",
  },
  {
    quotes: "만남은 인연이고 관계는 노력이다",
    author: "양광모, <비상>",
  },
  {
    quotes:
      "재능은 누구나 가지고 있지만, 재능을 실현하기 위해 걸어야 할 어려운 과정을 밟을 용기를 지닌 사람은 드물다.",
    author: "에리카 종",
  },
  {
    quotes: "하고싶은 일에는 방법이 보이고, 하기싫은 일에는 변명이 보인다.",
    author: "필리핀 속담",
  },
  {
    quotes:
      "세상에 사소한 일은 없다. 다만 그 일을 사소하게 생각하는 사람이 있을 뿐이다.",
    author: "공병호, 소울 메이트",
  },
  {
    quotes: "행동은 모든 성공의 가장 기초적인 핵심이다.",
    author: "파블로 피카소",
  },
  {
    quotes: "'지금이 최악이야'라고 말 할 수 없는 한 지금이 최악은 아니다.",
    author: "윌리엄 셰익스피어",
  },
  {
    quotes: "NOBODY CAN STOP YOU FROM BEING YOU",
    author: "JOHNNY",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
