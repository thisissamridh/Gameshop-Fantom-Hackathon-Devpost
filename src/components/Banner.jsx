import { useState, useEffect } from 'react';

import bannerImg from '../assets/banner.png'

const hero = 'https://www.minecraft.net/content/dam/games/minecraft/marketplace/homepage-1.jpg'
const Banner = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['from-green-400 to-blue-500', 'from-yellow-400 to-red-500', 'from-pink-400 to-purple-500'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [colorIndex]);
  return (
    <div
      className="flex flex-col lg:flex-row justify-center lg:justify-between 
      items-center lg:space-x-10 md:w-2/3 w-full p-5 mx-auto"
    >
      <img className="mb-5 lg:mb-0" src={bannerImg} alt="banner"  />
      <div className="flex flex-col justify-between  items-start lg:items-center text-center lg:text-left">
        <div className="flex flex-col space-y-4 mb-5">
        <h4 className={`font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r ${colors[colorIndex]}`}>
      Win a Game
    </h4>
          
          <p className="font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Win some money worth upto a game console while surfing our game
            collection, click on the spin button.
          </p>
        </div>
        <div className="flex justify-start text-center items-center space-x-2 mx-auto lg:ml-0">
          <button
            className="px-6 py-2.5 bg-blue-800 text-white font-medium text-xs 
                leading-tight uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg
                focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 
                active:shadow-lg transition duration-150 ease-in-out"
          >
            Dive In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
