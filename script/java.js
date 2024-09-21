
var Quotes = [
  {id:1,
    quoteName: `“Be yourself; everyone else is already taken.”
    `,
    author: `― Oscar Wilde
    `,
  },
  {
    id:2,
    quoteName: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    `,
    author: `― Marilyn Monroe
    `,
   
  },
  {
    id:3,
    quoteName: `“So many books, so little time.”
    `,
    author: `― Frank Zappa
    `,

  },
  {
    id:4,
    quoteName:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    `,
    author:`― Albert Einstein
    `,

  }
  ,{
    id:5,
    quoteName:`“A room without books is like a body without a soul.”
    `,
    author:`― Marcus Tullius Cicero
    `,

  }
];

function displayQuotes()
{
    var dQuotes= Math.floor(Math.random() * Quotes.length);
  var QuoteName=  document.getElementById("quotesName").textContent=`${Quotes[dQuotes].quoteName}`
   var AuthorName= document.getElementById("quotesAuthor").textContent=`${Quotes[dQuotes].author}`
 console.log("Quote Name: " + QuoteName, "Author Name: " + AuthorName);
 var lastRandom
do {
  lastQuotes=Math.floor(Math.random() * Quotes.length)
} while (lastRandom===dQuotes);
 return dQuotes
}






