// ListOfFlashCards.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FlashCard from './FlashCard';

export default function ListOfFlashCards({ flashcards, onDelete, onEdit }) {
  const [searchText, setSearchText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedSort, setSelectedSort] = useState('None');
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

  const handleSort = () => {
    let sortedFlashcards = [...filteredFlashcards];

    switch (selectedSort) {
      case 'None':
        // Do nothing, already in original order
        break;
      case 'QuestionAsc':
        sortedFlashcards.sort((a, b) => a.question.localeCompare(b.question));
        break;
      case 'QuestionDesc':
        sortedFlashcards.sort((a, b) => b.question.localeCompare(a.question));
        break;
      case 'AnswerAsc':
        sortedFlashcards.sort((a, b) => a.answer.localeCompare(b.answer));
        break;
      case 'AnswerDesc':
        sortedFlashcards.sort((a, b) => b.answer.localeCompare(a.answer));
        break;
      // Add more cases for additional sorting criteria as needed
      default:
        break;
    }

    setFilteredFlashcards(sortedFlashcards);
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
      <div>
        <label>Sort by:</label>
        <select
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="None">None</option>
          <option value="QuestionAsc">Question (Ascending)</option>
          <option value="QuestionDesc">Question (Descending)</option>
          <option value="AnswerAsc">Answer (Ascending)</option>
          <option value="AnswerDesc">Answer (Descending)</option>
          {/* Add more options for additional sorting criteria as needed */}
        </select>
        <button onClick={handleSort}>Sort</button>
      </div>
      <div className="card-grid">
        {filteredFlashcards.map((flashcard) => (
          <FlashCard key={flashcard.id} flashcard={flashcard} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
}
