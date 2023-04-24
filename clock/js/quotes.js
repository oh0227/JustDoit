const quotes = [
    {
        quote: "One repays a teacher badly if one always remains nothing but a pupil.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "To love someone is to identify with them.",
        author: "Aristotle"
    },
    {
        quote: "Food is an important part of a balanced diet.",
        author: "Lebowitz"
    },
    {
        quote: "The sufferings that fate inflicts on us should be borne with patience, what enemies inflict with manly courage.",
        author: "Thucydides"
    },
    {
        quote: "Thank you for sending me a copy of your book. I'll waste no time reading it.",
        author: "Moses Hadas"
    },
    {
        quote: "Great minds have purposes, others have wishes.",
        author: "Washington Irving"
    },
    {
        quote: "Now there are more overweight people in America than average-weight people. So overweight people are now average. Which means you've met your New Year's resolution.",
        author: "Jay Leno"
    },
    {
        quote: "The body is a sacred garment.",
        author: "Martha Graham"
    },
    {
        quote: "Creditors have better memories than debtors.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Common sense is the best sense I know of.",
        author: "Lord Chesterfield"
    }
];

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
