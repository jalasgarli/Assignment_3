// ListOfFlashCards.js

import React from 'react';
import FlashCard from './FlashCard';

export default function ListOfFlashCards({ flashcards, onDelete }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => (
        <FlashCard flashcard={flashcard} key={flashcard.id} onDelete={onDelete} />
      ))}
    </div>
  );
}
