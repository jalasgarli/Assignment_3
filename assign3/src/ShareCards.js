// ShareCards.js

import React, { useState } from 'react';

const ShareCards = ({ selectedCards }) => {
  const [email, setEmail] = useState('');

  const handleShare = async () => {
    const sharedData = {
      email,
      selectedCards,
    };

    try {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sharedData),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
      } else {
        console.error('Failed to send message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
    setEmail('');
  };

  return (
    <div>
      <h2>Share Cards</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <button onClick={handleShare}>Share</button>
      </div>
    </div>
  );
};

export default ShareCards;
