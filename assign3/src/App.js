import React, {useState} from "react"
import ListOfFlashCards from './ListOfFlashCards'

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);
  return (
    <ListOfFlashCards flashcards={flashcards}/>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is a capital of Azerbaijan?',
    answer: 'Baku',
    options: [
      'Rome',
      'Baku',
      'Istanbul'
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
