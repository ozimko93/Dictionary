import React from 'react';

function WordCard(props) {
  return (
    <div className="word-card">
      <h2>{props.term}</h2>
      <p>Транскрипция: {props.transcription}</p>
      <p>Перевод: {props.translation}</p>
      <p>Тема: {props.topic}</p>
    </div>
  );
}

export default WordCard;
