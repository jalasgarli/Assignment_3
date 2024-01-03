// ListOfFlashCards.js

import React from 'react';
import { Link } from 'react-router-dom';
import FlashCard from './FlashCard';

export default function ListOfFlashCards({ flashcards, onDelete, onEdit }) {
  return (
    <div>
      <Link to="/flashcards/manage">Manage Flashcards</Link>
      <div className="card-grid">
        {flashcards.map((flashcard) => (
          <FlashCard key={flashcard.id} flashcard={flashcard} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
}
