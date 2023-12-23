import React, {useState} from "react"
import ListOfFlashCards from './ListOfFlashCards'
import './app.css'

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);
  const handleAddFlashCard = () => {
    const newFlashcard = {
      id: flashcards.length + 1,
      question: 'New Question',
      answer: 'answer',
      options: [
        'answer 1',
        'answer 2',
        'answer 3'
      ]
    };
    setFlashCards([...flashcards, newFlashcard]);
  }


    return (
      <div>
        <ListOfFlashCards flashcards={flashcards} />
        <button onClick={handleAddFlashCard}>Add Flashcard</button>
      </div>);
}


// function App() {
//   const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

//   const handleAddFlashCard = () => {
//     const newFlashcard = {
//       id: flashcards.length + 1,
//       question: 'New Question',
//       answer: 'New Answer',
//       options: ['Option 1', 'Option 2', 'Option 3'],
//     };

//     setFlashCards([...flashcards, newFlashcard]);
//   };

//   return (
//     <div>
//       <ListOfFlashCards flashcards={flashcards} />
//       <button onClick={handleAddFlashCard}>Add Flashcard</button>
//     </div>
//   );
// }

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2+2?',
    answer: '4',
    options: [
      '1',
      '5',
      '4'
    ]
  },
  {
    id: 2,
    question: 'What is a capital of Turkey?',
    answer: 'Ankara',
    options: [
      'Ankara',
      'Baku',
      'Istanbul'
    ]
  }

]

export default App;
