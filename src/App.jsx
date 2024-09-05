import { useState } from 'react';
import './assets/styles/main.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import WordCard from './components/WordCard/WordCard';
import WordGallery from './components/WordGallery/WordGallery';

function App() {
  const initialWords = [
    {
      term: 'nice',
      transcription: '[nais]',
      translation: 'мило',
      topic: 'Прилагательные',
    },
    {
      term: 'wonderful',
      transcription: '[wʌndərfəl]',
      translation: 'замечательно',
      topic: 'Прилагательные',
    },
    {
      term: 'admit',
      transcription: '[ədˈmɪt]',
      translation: 'признавать',
      topic: 'Глаголы',
    },
    {
      term: 'advantage',
      transcription: '[ədˈvæntɪdʒ]',
      translation: 'преимущество',
      topic: 'Существительные',
    },
    {
      term: 'melon',
      transcription: '[ˈmelən]',
      translation: 'дыня',
      topic: 'Фрукты',
    },
    {
      term: 'park',
      transcription: '[pɑːrk]',
      translation: 'парк',
      topic: 'Места',
    },
    {
      term: 'love',
      transcription: '[lʌv]',
      translation: 'любовь',
      topic: 'Существительные',
    },
    {
      term: 'active',
      transcription: '[ˈæktɪv]',
      translation: 'активный',
      topic: 'Прилагательные',
    },
  ];

  const [words, setWords] = useState(initialWords);
  const [isGallery, setIsGallery] = useState(false);

  const updateWord = (
    index,
    newTerm,
    newTranscription,
    newTranslation,
    newTopic
  ) => {
    const updatedWords = [...words];
    updatedWords[index] = {
      term: newTerm,
      transcription: newTranscription,
      translation: newTranslation,
      topic: newTopic,
    };
    setWords(updatedWords);
  };

  const deleteWord = (index) => {
    const updatedWords = words.filter((_, i) => i !== index);
    setWords(updatedWords);
  };
  const toggleViewMode = () => {
    setIsGallery((prevMode) => !prevMode);
  };

  return (
    <>
      <Header />
      <div className="body">
        <button className="view-mode blinkgit " onClick={toggleViewMode}>
          {isGallery ? 'Показать все карточки' : 'Переключить на галерею'}
        </button>
        {isGallery ? (
          <WordGallery
            words={words}
            initialIndex={0}
            onUpdate={updateWord}
            onDelete={deleteWord}
          />
        ) : (
          <div className="card-list">
            {words.map((word, index) => (
              <WordCard
                key={index}
                term={word.term}
                transcription={word.transcription}
                translation={word.translation}
                topic={word.topic}
                onUpdate={(
                  newTerm,
                  newTranscription,
                  newTranslation,
                  newTopic
                ) =>
                  updateWord(
                    index,
                    newTerm,
                    newTranscription,
                    newTranslation,
                    newTopic
                  )
                }
                onDelete={() => deleteWord(index)}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
