import React, {useState} from "react"
import ListOfFlashCards from './ListOfFlashCards'
import './app.css'

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);
  return (
    <ListOfFlashCards flashcards={flashcards}/>
  );
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
