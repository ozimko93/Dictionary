import './assets/styles/main.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import WordCard from './components/WordCard/wordcard';

function App() {
  const words = [
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
  return (
    <>
      <Header />
      <div className="body">
        {words.map((word, index) => (
          <WordCard
            key={index}
            term={word.term}
            transcription={word.transcription}
            translation={word.translation}
            topic={word.topic}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
