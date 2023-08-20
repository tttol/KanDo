import React, { useReducer } from 'react';
import Group from './Group';

const initialState = {
    PARKING_LOT: [{ id: '1', title: 'Task 1' }],
    TODO: [{ id: '2', title: 'Task 2' }],
    DOING: [],
    DONE: [],
  };  

const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'MOVE_TASK':
        const { task, targetColumn } = action;
        const sourceColumn = Object.keys(state).find(key => state[key].includes(task));
        
        if (sourceColumn) {
          // Remove task from source column
          state[sourceColumn] = state[sourceColumn].filter((t: any) => t !== task);
  
          // Add task to target column
          state[targetColumn].push(task);
        }
        break;
      // Other actions if needed
    }
    return { ...state };
  };
  
export const KanbanBoard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onDropTask = (task: any, targetColumn: any) => {
    dispatch({ type: 'MOVE_TASK', task, targetColumn });
  };

  return (
    <main className="flex flex-row justify-between">
        {/* <Group title="PARKING LOT" tasks={[{id: 1, detail: "task1 detail"}, {id: 2, detail: "task2 detail"}]} onDropTask={onDropTask} />
        <Group title="TODO" tasks={[{id: 1, detail: "task1 detail"}]} onDropTask={onDropTask} />
        <Group title="DOING" tasks={[{id: 1, detail: "task1 detail"}]} onDropTask={onDropTask} />
        <Group title="DONE" tasks={[{id: 1, detail: "task1 detail"}]} onDropTask={onDropTask} /> */}
    </main>
  );
};
