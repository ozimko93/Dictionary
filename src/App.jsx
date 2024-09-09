import { useState, useEffect } from 'react';
import './assets/styles/main.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import WordCard from './components/WordCard/WordCard';
import WordGallery from './components/WordGallery/WordGallery';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

const MainContent = ({ words, updateWord, deleteWord }) => {
  const [isGallery, setIsGallery] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/game') {
      setIsGallery(true);
    } else {
      setIsGallery(false);
    }
  }, [location.pathname]);

  const toggleViewMode = () => {
    if (isGallery) {
      navigate('/');
    } else {
      navigate('/game');
    }
  };

  return (
    <div className="body">
      <button className="view-mode blink" onClick={toggleViewMode}>
        {isGallery ? 'Показать все карточки' : 'Переключить на галерею'}
      </button>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route
          path="/game"
          element={
            <WordGallery
              words={words}
              initialIndex={0}
              onUpdate={updateWord}
              onDelete={deleteWord}
            />
          }
        />
      </Routes>
    </div>
  );
};

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
    {
      term: 'beautiful',
      transcription: '[ˈbjuːtɪfl]',
      translation: 'красивый',
      topic: 'Прилагательные',
    },
    {
      term: 'friendship',
      transcription: '[ˈfrɛndʃɪp]',
      translation: 'дружба',
      topic: 'Существительные',
    },
    {
      term: 'run',
      transcription: '[rʌn]',
      translation: 'бежать',
      topic: 'Глаголы',
    },
    {
      term: 'forest',
      transcription: '[ˈfɔːrɪst]',
      translation: 'лес',
      topic: 'Природа',
    },
    {
      term: 'banana',
      transcription: '[bəˈnænə]',
      translation: 'банан',
      topic: 'Фрукты',
    },
    {
      term: 'improve',
      transcription: '[ɪmˈpruːv]',
      translation: 'улучшать',
      topic: 'Глаголы',
    },
    {
      term: 'strength',
      transcription: '[strɛŋθ]',
      translation: 'сила',
      topic: 'Существительные',
    },
    {
      term: 'intelligent',
      transcription: '[ɪnˈtɛlɪdʒənt]',
      translation: 'умный',
      topic: 'Прилагательные',
    },
    {
      term: 'joy',
      transcription: '[dʒɔɪ]',
      translation: 'радость',
      topic: 'Существительные',
    },
    {
      term: 'swim',
      transcription: '[swɪm]',
      translation: 'плавать',
      topic: 'Глаголы',
    },
    {
      term: 'ocean',
      transcription: '[ˈoʊʃən]',
      translation: 'океан',
      topic: 'Природа',
    },
    {
      term: 'apple',
      transcription: '[ˈæpl]',
      translation: 'яблоко',
      topic: 'Фрукты',
    },
  ];

  const [words, setWords] = useState(initialWords);
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

  return (
    <Router>
      <>
        <Header />
        <MainContent
          words={words}
          updateWord={updateWord}
          deleteWord={deleteWord}
        />
        <Footer />
      </>
    </Router>
  );
}

export default App;
