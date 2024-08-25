import React from 'react';
import './WordCard.scss';

class WordCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    const newTerm = document.getElementById('editTerm').value;
    const newTranscription = document.getElementById('editTranscription').value;
    const newTranslation = document.getElementById('editTranslation').value;
    const newTopic = document.getElementById('editTopic').value;
    this.props.onUpdate(newTerm, newTranscription, newTranslation, newTopic);
    this.setState({ isEditing: false });
  };

  handleCancel = () => {
    this.setState({ isEditing: false });
  };

  render() {
    const { term, transcription, translation, topic, onDelete } = this.props;
    const { isEditing } = this.state;

    return (
      <div className="word-card">
        {isEditing ? (
          <>
            <input id="editTerm" defaultValue={term} />
            <input id="editTranscription" defaultValue={transcription} />
            <input id="editTranslation" defaultValue={translation} />
            <input id="editTopic" defaultValue={topic} />
            <button className="btnSave" onClick={this.handleSave}>
              Сохранить
            </button>
            <button className="btnCancel" onClick={this.handleCancel}>
              Отмена
            </button>
          </>
        ) : (
          <>
            <h2>{term}</h2>
            <p>Транскрипция: {transcription}</p>
            <p>Перевод: {translation}</p>
            <p>Тема: {topic}</p>
            <button className="btnEdit" onClick={this.handleEdit}>
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
}

export default WordCard;
