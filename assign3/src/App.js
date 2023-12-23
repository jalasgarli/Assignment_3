import React, {useState} from "react"
import ListOfFlashCards from './ListOfFlashCards'
import './app.css'

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);
  const handleAddFlashCard = (Question, Answer, Options) => {
    const newFlashcard = {
      id: flashcards.length + 1,
      question: Question,
      answer: Answer,
      options: Options,
    };
    setFlashCards([...flashcards, newFlashcard]);
  }
    return (
      <div>
        <ListOfFlashCards flashcards={flashcards} />
        <button onClick={() => handleAddFlashCard(
          prompt('Enter the question:'),
          prompt('Write Answer of Question'),
          prompt('Enter options, separated by commas').split(',')
        )}>Add Flashcard</button>
      </div>);
}

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
