import { useState } from 'react';
import './WordCard.scss';

function WordCard({
  term,
  transcription,
  translation,
  topic,
  onUpdate,
  onDelete,
}) {
  const [isTranslationVisible, setIsTranslationVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({
    term,
    transcription,
    translation,
    topic,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues({
      ...editValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    onUpdate(
      editValues.term,
      editValues.transcription,
      editValues.translation,
      editValues.topic
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValues({ term, transcription, translation, topic });
    setIsEditing(false);
  };

  const toggleTranslationVisibility = () => {
    setIsTranslationVisible(!isTranslationVisible);
  };

  return (
    <div className="word-card">
      {isEditing ? (
        <>
          <input name="term" value={editValues.term} onChange={handleChange} />
          <input
            name="transcription"
            value={editValues.transcription}
            onChange={handleChange}
          />
          <input
            name="translation"
            value={editValues.translation}
            onChange={handleChange}
          />
          <input
            name="topic"
            value={editValues.topic}
            onChange={handleChange}
          />
          <button className="btnSave" onClick={handleSave}>
            Сохранить
          </button>
          <button className="btnCancel" onClick={handleCancel}>
            Отмена
          </button>
        </>
      ) : (
        <>
          <h2>{term}</h2>
          <p>Транскрипция: {transcription}</p>
          {isTranslationVisible ? (
            <p>Перевод: {translation}</p>
          ) : (
            <button
              className="btnShowTranslation"
              onClick={toggleTranslationVisibility}
            >
              Показать перевод
            </button>
          )}
          <p>Тема: {topic}</p>
          <button className="btnEdit" onClick={() => setIsEditing(true)}>
            Редактировать
          </button>
          <button className="btnDelete" onClick={onDelete}>
            Удалить
          </button>
        </>
      )}
    </div>
  );
}

export default WordCard;
