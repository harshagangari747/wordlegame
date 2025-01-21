import WordleWords from "./WordleWords.json";
function getWord() {
  const words = WordleWords;
  return words[Math.floor(Math.random() * words.length)];
}

export default getWord;
