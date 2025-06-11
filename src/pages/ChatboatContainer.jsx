import React, { useState } from 'react';
import './ChatbotContainer.css'; // Optional: if you have custom styles

const ChatbotContainer = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessage = {
      text: input,
      type: 'user' // or 'bot' if it's a response later
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };
}