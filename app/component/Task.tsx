import React from 'react';
import type { Contents } from '../data';
// import './Item.css';

const Task: React.FC<{
  id: number;
  contents: Contents
}> = ({ contents }) => (
  <div  className='text-black'>
    <div className='contents'>
      <p className='font-bold'>{contents.title}</p>
      <p className='font-light'>{contents.memo}</p>
    </div>
  </div>
);

export default Task;