'use client'

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { KanbanBoard } from './component/KanbanBoard';

export default function Home() {
  // TODO: Add state management for tasks

  return (
    <DndProvider backend={HTML5Backend}>
      <KanbanBoard />
    </DndProvider>
  );
}
