const blague = [ "il est tombé comme du n'importe quoi, on dirait la giraffe 🦒 qui s'emmêle les pattes.",
 "La France fr nous a souvent volé nos richesses 💎💰 vous allez aussi nous volé nos footbaleur 🏃🏾‍♂ ?",
  "l'oiseau 🦜 sur le baobab ne doit pas oublier qu'il a porté des lunettes 👓 !",
  "on a pas besoin d'eau 💦 potable pour éteindre un incendie 🔥 .",
  "le crocodile 🐊 n'attend que le gorille 🦍 accouche"
];


let quote = document.querySelector('.quote');
let button = document.querySelector('button');

 function blagueGenerator() {
    let bobo = Math.floor(Math.random() * blague.length);
    let newQuote = blague[bobo]

    return newQuote
}

quote.innerHTML = 

blagueGenerator();

button.addEventListener('click' , function () {
    quote.textContent = 
    blagueGenerator();
})

