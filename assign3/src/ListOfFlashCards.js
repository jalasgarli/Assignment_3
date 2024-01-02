import React from 'react';
import FlashCard from './FlashCard';

export default function ListOfFlashCards({ flashcards, onDelete, onEdit }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => (
        <FlashCard
          key={flashcard.id}
          flashcard={flashcard}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}


