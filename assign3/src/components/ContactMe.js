// ContactMe.js

import React, { useState } from 'react';

const ContactMe = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageData = {
      subject,
      email,
      content,
    };

    try {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      if (response.ok) {
        console.log('Message submitted successfully!');
        setSubject('');
        setEmail('');
        setContent('');
      } else {
        console.error('Failed to submit message');
      }
    } catch (error) {
      console.error('Error submitting message', error);
    }
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Subject:</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
