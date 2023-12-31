// FlashCard.js

import React, { useState } from 'react';

export default function FlashCard({ flashcard, onDelete, onEdit }) {
  const [flip, setFlip] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(flashcard.question);
  const [editedAnswer, setEditedAnswer] = useState(flashcard.answer);
  const [editedOptions, setEditedOptions] = useState(flashcard.options.join(','));
  const [editedStatus, setEditedStatus] = useState(flashcard.status);

  const handleDelete = () => {
    onDelete(flashcard.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    const editedOptionsArray = editedOptions.split(',');

    const editedFlashcard = {
      ...flashcard,
      question: editedQuestion,
      answer: editedAnswer,
      options: editedOptionsArray,
      status: editedStatus,
    };

    onEdit(editedFlashcard);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const handleClick = () => {
    // Only flip the card if it's not in editing mode
    if (!editing) {
      setFlip(!flip);
    }
  };

  return (
    <div className={`card ${flip && !editing ? 'flip' : ''}`} onClick={handleClick}>
      <div className="front">
        {editing ? (
          <div>
            <label>Question:</label>
            <input
              type="text"
              value={editedQuestion}
              onChange={(e) => setEditedQuestion(e.target.value)}
            />
            <label>Answer:</label>
            <input
              type="text"
              value={editedAnswer}
              onChange={(e) => setEditedAnswer(e.target.value)}
            />
            <label>Options (comma-separated):</label>
            <input
              type="text"
              value={editedOptions}
              onChange={(e) => setEditedOptions(e.target.value)}
            />
            <label>Status:</label>
            <input
              type="text"
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
            />
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <div>
            {flashcard.question}
            <div className="flashcard-options">
              {flashcard.options.map((option, index) => (
                <div key={index} className="flashcard-option">
                  {option}
                </div>
              ))}
            </div>
            <div>Status: {flashcard.status}</div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}
