const quotes = [
{
    quote: "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
    author: "Walt Disney",
},
{
    quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
    author: "Mulan",
},
{
    quote: "If you focus on what you left behind, you will never see what lies ahead.",
    author: "Ratatouille",
},
{
    quote: "Anyone can be anything.",
    author: "Zootopia",
},
{
    quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé",
},
{
    quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: "Kamal Ravikant",
},
{
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
},
{
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
},
{
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
},
{
    quote: "Love the moment, and the energy of that moment will spread beyond all boundaries.",
    author: "Corita Kent"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;