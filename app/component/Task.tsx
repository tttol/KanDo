import React, { useState } from 'react';
import type { Contents } from '../data';

const Task: React.FC<{
  id: number;
  contents: Contents
}> = ({id, contents }) => {
  const [isEditable, setIsEditable] = useState(false); // 1. 編集モードのState

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const [editedTitle, setEditedTitle] = useState(contents.title);
  const [editedMemo, setEditedMemo] = useState(contents.memo);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };
  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedMemo(e.target.value);
  };

  const saveChanges = async () => {
    setIsEditable(false);
    try {
      const response = await fetch(`/api/task/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: editedTitle,
          memo: editedMemo,
        }),
      });

      if (response.ok) {
        console.log('Saved successfully.');
      } else {
        console.log('Failed to save.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const deleteTask = async () => {
      if (window.confirm("タスクを削除します。よろしいですか？")) {
        // delete 
      }
  }

  return (
    <div className='task p-3 bg-lime-400 text-black w-full'>
        {isEditable ? (
          <>
          <div>
            <input type="text" defaultValue={contents.title} className='mb-3 w-full' onChange={handleTitleChange} />
            <textarea defaultValue={contents.memo} className='w-full' onChange={handleMemoChange}></textarea>
          </div>
        <div className='flex justify-end'>
          <svg onClick={saveChanges} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500 cursor-pointer hover:opacity-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
          </>
        ) : (
          <>
          <div className='contents'>
            <p className='font-bold'>{contents.title}</p>
            <p className='font-light'>{contents.memo}</p>
          </div>
        <div className='flex justify-end'>
          <svg onClick={toggleEdit} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 cursor-pointer hover:opacity-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
          <svg onClick={deleteTask} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 cursor-pointer hover:opacity-50 ml-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </div>
          </>
        )}
      
    </div>
  );
};


export default Task;