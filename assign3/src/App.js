// App.js

import React, { useState, useEffect } from 'react';
import ListOfFlashCards from './ListOfFlashCards';
import './app.css';

function App() {
  const [flashcards, setFlashCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then((response) => response.json())
      .then((data) => {
        const sortedCards = data.sort((a, b) => b.modifiedAt - a.modifiedAt);
        setFlashCards(sortedCards);
      })
      .catch((error) => console.error('Error fetching cards:', error));
  }, []); 

  const handleAddFlashCard = (Question, Answer, Options) => {
    const newFlashcard = {
      id: flashcards.length + 1,
      question: Question,
      answer: Answer,
      options: Options,
      modifiedAt: Date.now(), 
    };
    setFlashCards([...flashcards, newFlashcard]);
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
  };

  return (
    <div>
      <ListOfFlashCards
        flashcards={flashcards}
        onDelete={handleDeleteFlashCard}
        onEdit={handleEditFlashCard}
      />
      <button
        onClick={() =>
          handleAddFlashCard(
            prompt('Enter the question:'),
            prompt('Write Answer of Question'),
            prompt('Enter options, separated by commas').split(',')
          )
        }
      >
        Add Flashcard
      </button>
    </div>
  );
}

export default App;
