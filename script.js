const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const btn = document.querySelector('#new-quote');

const quotes = [
  {
      quote: '“Do what is right, not what is easy nor what is popular.” ',
      person:"—Roy T. Bennett"

  },
  {
      quote:'“Start where you are. Use what you have. Do what you can.” ',
      person:"—Arthur Ashe"

  },
  {
      quote:'“A ship in harbor is safe, but that is not what ships are built for.” ',
      person:"—John A. Shedd"

  },
  {
      quote: '“If you’re serious about changing your life, you’ll find a way. If you’re not, you’ll find an excuse.” ',
      person:"—Jen Sincero"

  },
];
btn.addEventListener('click',function(){
  const random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})