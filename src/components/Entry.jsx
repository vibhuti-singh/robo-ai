import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Entry = () => {
  const [text, setText] = useState('');
  const message = "I am your friend Robo";

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    let isMounted = true;

    const typeMessage = async () => {
      for (let i = 0; i < message.length && isMounted; i++) {
        setText((prevText) => prevText + message[i]);
        await delay(100); // Adjust the typing speed (milliseconds per character)
      }
    };

    typeMessage();

    return () => {
      isMounted = false; // Set the flag to false on unmount
      setText(''); // Reset the text on component unmount
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className='fixed top-0 w-full md:w-2/3 h-full flex flex-col justify-center items-center entry '>
      <h1 className='glowing-text font-extrabold text-3xl md:text-7xl'>Hello,</h1>
      <h1 className='glowing-text font-extrabold text-3xl md:text-7xl mt-5'>{text}</h1>
      <Link to={"/chat"} className='border-2 w-1/3 p-2 mt-5 rounded-lg md:text-2xl text-white glowing text-center'> <button >
       
        Lets talk
       
      </button> </Link>
    </div>
  );
};

export default Entry;
