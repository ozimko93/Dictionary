import { useState } from 'react';
import WordCard from '../WordCard/WordCard';

import './WordGallery.scss';

function WordGallery({ words = [], initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  WordGallery.defaultProps = {
    words: [],
    initialIndex: 0,
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };

  if (words.length === 0) {
    return <p>Список слов пуст!</p>;
  }

  return (
    <div className="word-gallery">
      <div className="navigation">
        <button className="btnPrev" onClick={handlePrev}>
          &#8592; Предыдущая
        </button>
        <WordCard
          term={words[currentIndex].term}
          transcription={words[currentIndex].transcription}
          translation={words[currentIndex].translation}
          topic={words[currentIndex].topic}
          onUpdate={(newTerm, newTranscription, newTranslation, newTopic) =>
            console.log('Обновление данных карточки', newTerm)
          }
          onDelete={() =>
            console.log('Удаление карточки', words[currentIndex].term)
          }
        />
        <button className="btnNext" onClick={handleNext}>
          Следующая &#8594;
        </button>
      </div>
    </div>
  );
}

export default WordGallery;
