import React, { useState } from 'react'

export default function FlashCard({flashcard, onDelete}) {
  const [flip, setflip] = useState(false);

  const handleDelete = () => {
    onDelete(flashcard.id);
  }

  return (
    <div 
    className={`card ${flip ? 'flip' : ''}`} 
    onClick={() => setflip(!flip)}>

      <div className="front">
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map(option => {
            return <div className="flashcard-option">{option}</div>
          })}
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div className="back">
        {flashcard.answer}
      </div>
    </div>
  )
}
