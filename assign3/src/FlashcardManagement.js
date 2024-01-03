// FlashcardManagement.js

import React, { useState } from 'react';

export default function FlashcardManagement({ onAddFlashCard }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [options, setOptions] = useState('');

  const handleAddFlashCard = () => {
    const newOptionsArray = options.split(',');
    onAddFlashCard(question, answer, newOptionsArray);
    setQuestion('');
    setAnswer('');
    setOptions('');
  };

  return (
    <div>
      <h2>Manage Flashcards</h2>
      <label>Question:</label>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      <label>Answer:</label>
      <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <label>Options (comma-separated):</label>
      <input type="text" value={options} onChange={(e) => setOptions(e.target.value)} />
      <button onClick={handleAddFlashCard}>Add Flashcard</button>
    </div>
  );
}
