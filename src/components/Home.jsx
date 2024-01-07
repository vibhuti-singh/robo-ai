import React, { useState } from 'react';
import robo from "../assets/robo.png";

const Home = () => {
  const [position, setPosition] = useState({ x: 250, y: 100 });

  const handleMouseMove = (event) => {
    const maxX = window.innerWidth - 400;
    const maxY = window.innerHeight - 400; 
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setPosition({ x: newX, y: newY });
  };

  return (
    <div
      className='h-full w-full p-5 flex items-center justify-center'
      onMouseMove={handleMouseMove}
      style={{ position: 'relative' }}
    >
       
      <img
        className='hover:cursor-pointer animate-bounce ease-in-out h-48 md:h-96 w-48 md:w-96 '
        src={robo}
        alt=""
        style={{ position: 'absolute', top: position.y, left: position.x }}
      />
    </div>

  );
};

export default Home;
