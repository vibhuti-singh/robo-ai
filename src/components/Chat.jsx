import React, { useState, useEffect } from 'react';
import robo from '../assets/robo.png';
import avtar from "../assets/avtar.png";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const API_URL = import.meta.env.VITE_OPENAI_API_URL;
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const fetchOpenAIResponse = async (inputMessage) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: inputMessage,
        temperature: 0.5,
        max_tokens: 500,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      const response = await fetch(API_URL, options);
      const data = await response.json();
      return data.choices[0].text;
    } catch (error) {
      console.log(error);
      return 'Sorry, something went wrong!';
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      const userMessage = { text: newMessage, sender: 'user' };

      const updatedMessages = [...messages, userMessage];

      
      setMessages(updatedMessages);

      const responseText = await fetchOpenAIResponse(newMessage);
      const responseMessage = { text: responseText, sender: 'response' };

    
      const finalMessages = [...updatedMessages, responseMessage];

     
      setMessages(finalMessages);

      setNewMessage('');
    }
  };

  useEffect(() => {
    const initialResponse = { text: 'Hello! How can I help you?', sender: 'response' };
    setMessages([initialResponse]);
  }, []);

  return (
    <div className='chat fixed top-0 w-full h-full p-2 md:w-1/2 flex items-end'>
      <div className='w-full p-4 rounded-lg shadow-lg'>
        <div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-center message-container m-2  rounded-lg p-1 bg-white  ${
                message.sender === 'user' ? 'user-message justify-end right-0  bg-black text-white' : 'response-message'
              }`}
            >
              {message.sender === 'response' && (
                <img src={robo} alt='Robot' className='h-10 w-10 border-2 bg-black rounded-full' />
              )}
              <div className={`mx-2 flex items-center message ${message.sender === 'user' ? 'user' : 'response'}`}>
                {message.text}
                {message.sender === 'user' && (
                  <img src={avtar} alt='Robot' className='h-10 w-10 border-2 mx-2 bg-black rounded-full' />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className='input-container mt-4 flex items-center justify-end'>
          <input
            type='text'
            placeholder='Type a message...'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className='flex-grow px-4 py-2 border rounded-r-md focus:outline-none text-black'
          />
          <button
            onClick={handleSendMessage}
            className='send-btn ml-2 px-6 py-2 text-white border-2 rounded-lg hover:rounded-full'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
