import "./App.css";
import GameLayout from "./GameLayout";
import { useState, useEffect } from "react";
import GuessButton from "./GuessButton";
import getWord from "./GetRandomWord";
import Legend from "./Legend";

export default function App() {
  const [word, setWord] = useState("");
  const [rowEditable, setRowEditable] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [rowBackgroundState, setRowBackgroundState] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  //=====

  useEffect(() => {
    if (word == "") {
      const randomWord = getWord();
      setWord(randomWord);
      console.log(randomWord);
    }
  }, [word]);
  //=====

  function validateWord(userWord) {
    userWord = userWord.toUpperCase();
    if (userWord === word) {
      return true;
    }
    let letterHits = [];
    for (let i = 0; i < 5; i++) {
      if (userWord[i] === word[i]) {
        letterHits.push("green");
      } else if (word.includes(userWord[i])) {
        letterHits.push("yellow");
      } else {
        letterHits.push("red");
      }
    }
    return letterHits;
  }

  function handleGuessWordValidation() {
    let currActiveRow = rowEditable;
    let userWord = "";
    for (let i = 0; i < 5; i++) {
      userWord += document.getElementById(currActiveRow + "" + i).value;
    }
    let backgrounds = validateWord(userWord);
    if (backgrounds === true) {
      setRowEditable(-1);
      setIsCorrect(true);
    } else {
      setRowEditable((x) => x + 1);
      setRowBackgroundState((x) => {
        x[currActiveRow][0] = backgrounds[0];
        x[currActiveRow][1] = backgrounds[1];
        x[currActiveRow][2] = backgrounds[2];
        x[currActiveRow][3] = backgrounds[3];
        x[currActiveRow][4] = backgrounds[4];
        return x;
      });
    }
  }

  function handleNewGameReset() {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        document.getElementById(i + "" + j).value = "";
      }
    }
    setRowEditable(0);
    setWord("");
    setIsCorrect(false);
    setRowBackgroundState([[], [], [], [], [], []]);
  }

  return (
    <>
      <div className="app">
        <div className="legend">
          <Legend />
        </div>
        <div className="game">
          <p>
            Rotate your screen if you are using mobile phone for better
            experience
          </p>
          <h2>Guess the word</h2>
          <h3>
            {isCorrect
              ? "You got it: " + word
              : rowEditable > 5 && "The word is:" + word}
          </h3>
          <GameLayout
            rowEditable={rowEditable}
            activeRow={rowEditable}
            rowBackGround={rowBackgroundState}
          />
          <div>
            <GuessButton onClick={handleGuessWordValidation} name="Guess" />
            {(isCorrect || rowEditable > 5) && (
              <GuessButton onClick={handleNewGameReset} name="Reset" />
            )}
          </div>
        </div>
      </div>
      <div>
        <footer>
          Developed By: <b>Sai Harsha Gangari</b> using pure ReactJs
        </footer>
      </div>
    </>
  );
}
