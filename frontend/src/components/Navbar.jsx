import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Product from './Product';


export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [language, setLanguage] = useState('English');
  
  const handleLanguage = (lan) => {
    setLanguage(lan);
  };

  const handleClick = async () => {
    setIsClicked(!isClicked);

  };

  return (
    <div className='flex p-3 bg-blue-950 text-white justify-between px-12'>
      <h1>Indic Language</h1>
      <form action="">
        <input type='text' placeholder='search' className='w-[500px] p-1 rounded-sm' />
      </form>
      <div>
        <button className='flex items-center gap-1' onClick={handleClick}>
          {language} <FaChevronDown />
        </button>
        {isClicked && (
          <div className='absolute bg-gray-200 text-black p-4 px-8 right-6 top-14 flex flex-col gap-2'>
            <li
              className='cursor-pointer hover:text-yellow-600'
              onClick={() => handleLanguage('English')}
            >
              English
            </li>
            <li className='cursor-pointer hover:text-yellow-600' onClick={() => handleLanguage('Telugu')}>
              తెలుగు - Telugu
            </li>
            <li className='cursor-pointer hover:text-yellow-600' onClick={() => handleLanguage('Marathi')}>
              मराठी - Marathi
            </li>
            <li className='cursor-pointer hover:text-yellow-600' onClick={() => handleLanguage('Kannada')}>
              ಕನ್ನಡ - Kannada
            </li>
            <li className='cursor-pointer hover:text-yellow-600' onClick={() => handleLanguage('Tamil')}>
              தமிழ் - Tamil
            </li>
            <li className='cursor-pointer hover:text-yellow-600' onClick={() => handleLanguage('Malayalam')}>
              മലയാളം - Malayalam
            </li>
          </div>
        )}
      </div>

      {/* {products.map((product) => (
        <Product key={product.heading} product={product} />
      ))} */}

    <Product language ={language}/>
    </div>
  );
}
