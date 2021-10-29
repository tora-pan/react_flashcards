import React, { useState, useEffect } from "react";
import { DataProvider, useData } from "../../contexts/DataContext";

import "./card.styles.css";

const Card = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [wordList, setWordList] = useState([
    { eng: 'Hover the "i"', jpn: "To reveal the back of the card" },
  ]);
  const { getData, firebaseData } = useData();

  const getNextWord = () => {
    if (firebaseData.length === 0) {
      getData();
    } else {
      setWordList(firebaseData);
    }
    if (currentWord < wordList.length - 1) {
      setCurrentWord(currentWord + 1);
    } else if (currentWord === wordList.length - 1) {
      setCurrentWord(0);
    }
  };

  return (
    <DataProvider>
      <>
        <div className="card-container">
          <div class="card">
            <h1>{wordList && wordList[currentWord].eng}</h1>
            <span class="info">i</span>
            <div class="answer">
              <p>{wordList && wordList[currentWord].jpn}</p>
            </div>
          </div>
          <button onClick={getNextWord}>Next Word</button>
        </div>
      </>
    </DataProvider>
  );
};

export default Card;
