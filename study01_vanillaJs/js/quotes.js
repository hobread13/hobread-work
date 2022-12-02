const quotes = [
  {
    quote: "aaaa",
    author: "0000",
  },
  {
    quote: "bbbb",
    author: "1111",
  },
  {
    quote: "cccc",
    author: "2222",
  },
  {
    quote: "dddd",
    author: "3333",
  },
  {
    quote: "eeee",
    author: "4444",
  },
  {
    quote: "ffff",
    author: "5555",
  },
  {
    quote: "gggg",
    author: "6666",
  },
  {
    quote: "hhhh",
    author: "7777",
  },
  {
    quote: "iiii",
    author: "8888",
  },
  {
    quote: "jjjj",
    author: "9999",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;