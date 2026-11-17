const quotes = [
"Success is built from the small promises you keep to yourself.",
"Every sunrise is another chance to rewrite yesterday's story.",
"Confidence grows when action becomes a habit.",
"The strongest people are shaped by the storms they refused to run from.",
"Dreams remain ideas until courage turns them into action.",
"Your future is quietly created by what you repeatedly do today.",
"A calm mind can solve problems that panic never will.",
"Kindness costs little, but its value is priceless.",
"Growth begins where your comfort zone ends.",
"The only competition that truly matters is becoming better than you were yesterday."
] 


const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*10);

    quote.textContent = quotes[index];
})