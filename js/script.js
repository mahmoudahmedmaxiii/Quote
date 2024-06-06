//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {
     'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {
     'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough'
    },
    {
     'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {
     'author': 'Mark Twain', 
     'quote': 'If you tell the truth, you dont have to remember anything.'
    },
    {
     'author': 'Maya Angelou',
     'quote': 'people will never forget how you made them feel.'
    }
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
}