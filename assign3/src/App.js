// App.js

// App.js

import React, { useState, useEffect } from 'react';
import ListOfFlashCards from './ListOfFlashCards';
import './app.css';

function App() {
  const [flashcards, setFlashCards] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then((response) => response.json())
      .then((data) => {
        const sortedCards = data.sort((a, b) => b.modifiedAt - a.modifiedAt);
        setFlashCards(sortedCards);
      })
      .catch((error) => console.error('Error fetching cards:', error));
  }, []);

  const handleAddFlashCard = (Question, Answer, Options, status) => {
    const newFlashcard = {
      id: flashcards.length + 1,
      question: Question,
      answer: Answer,
      options: Options,
      modifiedAt: Date.now(),
      status: status,
    };
    setFlashCards([...flashcards, newFlashcard]);
    setSearchText('');
  };

  const handleDeleteFlashCard = (id) => {
    const updatedFlashcards = flashcards.filter((flashcard) => flashcard.id !== id);
    setFlashCards(updatedFlashcards);
  };

  const handleEditFlashCard = (editedFlashcard) => {
    const updatedFlashcards = flashcards.map((flashcard) =>
      flashcard.id === editedFlashcard.id
        ? { ...editedFlashcard, modifiedAt: Date.now() }
        : flashcard
    );
    setFlashCards(updatedFlashcards);
    setSearchText('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ListOfFlashCards
        flashcards={flashcards.filter(
          (card) =>
            card.question.toLowerCase().includes(searchText.toLowerCase()) ||
            card.answer.toLowerCase().includes(searchText.toLowerCase())
        )}
        onDelete={handleDeleteFlashCard}
        onEdit={handleEditFlashCard}
      />
      <button
        onClick={() =>
          handleAddFlashCard(
            prompt('Enter the question:'),
            prompt('Write Answer of Question'),
            prompt('Enter options, separated by commas').split(','),
            prompt('Enter status (Learned, Want to Learn, Noted):')
          )
        }
      >
        Add Flashcard
      </button>
    </div>
  );
}

export default App;
