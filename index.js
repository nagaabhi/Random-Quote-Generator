const handleGenerateBtn = document.querySelector(".js-generate-button");
const displayQuotes = document.querySelector(".js-display-quotes");
const randomQuotesArray = [
  "The only way to do great work is to love what you do.",
  "Our greatest glory is not in never failing, but in rising up every time we fail.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Strive not to be a success, but rather to be of value.",
  "The mind is everything. What you think you become.",
  "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
  "The journey of a thousand miles begins with a single step.",
  "Believe you can and you're halfway there.",
  "It is never too late to be what you might have been.",
  "The only person you are destined to become is the person you decide to be.",
  "Do not wait to strike till the iron is hot; but make the iron hot by striking.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Life is what happens when you're busy making other plans.",
  "You must be the change you wish to see in the world.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Happiness is not something readymade. It comes from your own actions.",
  "The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
  "Don't count the days, make the days count.",
  "The best revenge is massive success.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "The secret of getting ahead is getting started.",
  "Don't be afraid to give up the good to go for the great.",
  "Our lives begin to end the day we become silent about things that matter.",
  "You miss 100% of the shots you don't take.",
  "The purpose of our lives is to be happy.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Never let the fear of striking out keep you from playing the game.",
  "Money and success don’t change people; they merely amplify what was already there.",
  "Not how long, but how well you have lived is the main thing.",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
  "Go confidently in the direction of your dreams. Live the life you've imagined.",
  "The greatest mistake you can make in life is to be continually fearing you will make one.",
  "When you know better you do better.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The mind is a powerful thing. Fill it with positive thoughts.",
  "It's not the years in your life that count. It's the life in your years.",
  "Change your thoughts and you change your world.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only way to predict the future is to create it.",
  "Don't watch the clock; do what it does. Keep going.",
  "The difference between ordinary and extraordinary is that little extra.",
  "You are never too old to set another goal or to dream a new dream.",
  "The power of imagination makes us infinite.",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  "In three words I can sum up everything I’ve learned about life: it goes on.",
  "Do what you can, with what you have, where you are.",
  "Let us not look back in anger, nor forward in fear, but around in awareness.",
];

function generateRandomQuotes() {
  const generateRandomIndex = Math.floor(
    Math.random() * randomQuotesArray.length
  );
  displayQuotes.innerHTML = `<p class="js-display-quotes">"${randomQuotesArray[generateRandomIndex]}"</p>`;
}
handleGenerateBtn.addEventListener("click", () => {
  generateRandomQuotes();
});

// setInterval(() => {

//   generateRandomQuotes();
// }, 1000);
