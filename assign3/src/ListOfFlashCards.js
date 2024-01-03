// ListOfFlashCards.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FlashCard from './FlashCard';

export default function ListOfFlashCards({ flashcards, onDelete, onEdit }) {
  const [searchText, setSearchText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [filteredFlashcards, setFilteredFlashcards] = useState(flashcards);

  const handleSearch = () => {
    const lowercaseSearchText = searchText.toLowerCase();
    const filteredCards = flashcards.filter(
      (card) =>
        card.question.toLowerCase().includes(lowercaseSearchText) ||
        card.answer.toLowerCase().includes(lowercaseSearchText)
    );
    setFilteredFlashcards(filteredCards);
  };

  const handleFilterByStatus = () => {
    const filteredByStatus =
      selectedStatus === 'All'
        ? flashcards
        : flashcards.filter((card) => card.status === selectedStatus);
    setFilteredFlashcards(filteredByStatus);
  };

  return (
    <div>
      <Link to="/flashcards/manage">Manage Flashcards</Link>
      <div>
        <label>Search:</label>
        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <label>Filter by Status:</label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Learned">Learned</option>
          <option value="Want to Learn">Want to Learn</option>
          <option value="Noted">Noted</option>
        </select>
        <button onClick={handleFilterByStatus}>Filter</button>
      </div>
      <div className="card-grid">
        {filteredFlashcards.map((flashcard) => (
          <FlashCard key={flashcard.id} flashcard={flashcard} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
}
