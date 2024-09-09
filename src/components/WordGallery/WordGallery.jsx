import { useState } from 'react';
import WordCard from '../WordCard/WordCard';
import './WordGallery.scss';

function WordGallery({ words = [], initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [currentWords, setCurrentWords] = useState(words);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleNext = () => {
    if (isEditing) return; // Не переключаем карточки в режиме редактирования

    setShowTranslation(false); // Сбросить состояние перевода при переключении
    setCurrentIndex((prevIndex) =>
      prevIndex === currentWords.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    if (isEditing) return; // Не переключаем карточки в режиме редактирования

    setShowTranslation(false); // Сбросить состояние перевода при переключении
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentWords.length - 1 : prevIndex - 1
    );
  };

  const handleUpdate = (
    newTerm,
    newTranscription,
    newTranslation,
    newTopic
  ) => {
    const updatedWords = [...currentWords];
    updatedWords[currentIndex] = {
      term: newTerm,
      transcription: newTranscription,
      translation: newTranslation,
      topic: newTopic,
    };
    setCurrentWords(updatedWords);
  };

  const handleDelete = () => {
    const updatedWords = currentWords.filter((_, i) => i !== currentIndex);
    setCurrentWords(updatedWords);

    if (currentIndex >= updatedWords.length) {
      setCurrentIndex(0);
    }
  };

  if (currentWords.length === 0) {
    return <p>Список слов пуст!</p>;
  }

  return (
    <div className="word-gallery">
      <div className="navigation">
        <button className="btnPrev" onClick={handlePrev} disabled={isEditing}>
          &#8592; Предыдущая
        </button>
        <WordCard
          term={currentWords[currentIndex].term}
          transcription={currentWords[currentIndex].transcription}
          translation={
            isEditing || showTranslation
              ? currentWords[currentIndex].translation
              : ''
          }
          topic={currentWords[currentIndex].topic}
          onUpdate={(newTerm, newTranscription, newTranslation, newTopic) =>
            handleUpdate(newTerm, newTranscription, newTranslation, newTopic)
          }
          onDelete={handleDelete}
          setIsEditing={setIsEditing}
          setShowTranslation={setShowTranslation}
          showTranslation={showTranslation}
          isEditing={isEditing}
        />
        <button className="btnNext" onClick={handleNext} disabled={isEditing}>
          Следующая &#8594;
        </button>
      </div>
    </div>
  );
}

export default WordGallery;
