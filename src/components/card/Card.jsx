import React, { useState } from "react";

import "./card.styles.css";

const Card = () => {
  const [currentWord, setCurrentWord] = useState(0);

  const wordList = [
    { jpn: "こんにちは", eng: "Hello" },
    { jpn: "これは何ですか？", eng: "What is this?" },
    { jpn: "今は何時ですか？", eng: "What time is it right now?" },
    { jpn: "日本語を理解出来ますか？", eng: "Do you understand Japanese?" },
    { jpn: "プログラミングが大好きです", eng: "I love programming." },
  ];

  const getNextWord = () => {
    if (currentWord < wordList.length - 1) {
      setCurrentWord(currentWord + 1);
    } else if (currentWord === wordList.length - 1) {
      setCurrentWord(0);
    }
    console.log(`The currentWord is ${wordList[currentWord].eng} `);
  };

  return (
    <>
      <div className="card-container">
        <div class="card">
          <h1>{wordList[currentWord].eng}</h1>
          <span class="info">i</span>
          <div class="answer">
            <p>{wordList[currentWord].jpn}</p>
          </div>
        </div>
        <button onClick={getNextWord}>Next Word</button>
      </div>
    </>
  );
};

export default Card;
