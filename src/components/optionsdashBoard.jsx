import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const OptionsdashBoard = ({ arrayItems, selectOption }) => {
  return (
    <>
      <Navbar />
      <div className='grid-main'>
        {arrayItems.map((item) => (
          <div key={item.id} className='wrap'>
            <div className='grid-child' onClick={() => selectOption(item.option)}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OptionsdashBoard;
