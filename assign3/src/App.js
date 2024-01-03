// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/MainPage';
import ListOfFlashCards from './ListOfFlashCards';
import FlashcardManagement from './FlashcardManagement';
import './app.css';

function App() {
  const [flashcards, setFlashCards] = useState([]);

  const handleAddFlashCard = (question, answer, options) => {
    const newFlashcard = {
      id: flashcards.length + 1,
      question,
      answer,
      options,
      modifiedAt: Date.now(),
      status: null,
    };
    setFlashCards([...flashcards, newFlashcard]);
  };

  const handleDeleteFlashCard = (id) => {
    const updatedFlashcards = flashcards.filter((flashcard) => flashcard.id !== id);
    setFlashCards(updatedFlashcards);
  };

  const handleEditFlashCard = (editedFlashcard) => {
    const updatedFlashcards = flashcards.map((flashcard) =>
      flashcard.id === editedFlashcard.id ? { ...editedFlashcard, modifiedAt: Date.now() } : flashcard
    );
    setFlashCards(updatedFlashcards);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/flashcards">Flashcards</Link>
        <Link to="/flashcards/manage">Manage Flashcards</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<HomePage flashcards={flashcards} onDelete={handleDeleteFlashCard} onEdit={handleEditFlashCard} />}
        />
        <Route
          path="/flashcards"
          element={<ListOfFlashCards flashcards={flashcards} onDelete={handleDeleteFlashCard} onEdit={handleEditFlashCard} />}
        />
        <Route path="/flashcards/manage" element={<FlashcardManagement onAddFlashCard={handleAddFlashCard} />} />
      </Routes>
    </Router>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/MainPage'
// import ListOfFlashCards from './ListOfFlashCards';
// import './app.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/flashcards" element={<ListOfFlashCards/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';
// import ListOfFlashCards from './ListOfFlashCards';
// import './app.css';


// function App() {
//   const [flashcards, setFlashCards] = useState([]);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:3000/cards')
//       .then((response) => response.json())
//       .then((data) => {
//         const sortedCards = data.sort((a, b) => b.modifiedAt - a.modifiedAt);
//         setFlashCards(sortedCards);
//       })
//       .catch((error) => console.error('Error fetching cards:', error));
//   }, []);

//   const handleAddFlashCard = (Question, Answer, Options) => {
//     const newFlashcard = {
//       id: flashcards.length + 1,
//       question: Question,
//       answer: Answer,
//       options: Options,
//       modifiedAt: Date.now(),
//       status: null, // Initialize status as null
//     };
//     setFlashCards([...flashcards, newFlashcard]);
//     setSearchText('');
//   };

//   const handleDeleteFlashCard = (id) => {
//     const updatedFlashcards = flashcards.filter((flashcard) => flashcard.id !== id);
//     setFlashCards(updatedFlashcards);
//   };

//   const handleEditFlashCard = (editedFlashcard) => {
//     const updatedFlashcards = flashcards.map((flashcard) =>
//       flashcard.id === editedFlashcard.id
//         ? { ...editedFlashcard, modifiedAt: Date.now() }
//         : flashcard
//     );
//     setFlashCards(updatedFlashcards);
//     setSearchText('');
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//       />
//       <ListOfFlashCards
//         flashcards={flashcards.filter(
//           (card) =>
//             card.question.toLowerCase().includes(searchText.toLowerCase()) ||
//             card.answer.toLowerCase().includes(searchText.toLowerCase())
//         )}
//         onDelete={handleDeleteFlashCard}
//         onEdit={handleEditFlashCard}
//       />
//       <button
//         onClick={() =>
//           handleAddFlashCard(
//             prompt('Enter the question:'),
//             prompt('Write Answer of Question'),
//             prompt('Enter options, separated by commas').split(',')
//           )
//         }
//       >
//         Add Flashcard
//       </button>
//     </div>
//   );
// }

// export default App;
