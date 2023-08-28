'use client'

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React, { useState, useCallback } from 'react';
import useGroupedItems from './hooks/useGroupedItems';
import Group from './component/Group';
import { items as initial, GroupTypes, MoveHandler } from './data';

export default function Page() {
  const [groupedItems, items, setItems] = useGroupedItems(initial);
  const moveItem: MoveHandler = useCallback((dragIndex, targetIndex, group) => {
    const item = items[dragIndex];
    if (!item) return;
    setItems(prevState => {
      const newItems = prevState.filter((_, idx) => idx !== dragIndex);
      newItems.splice(targetIndex, 0, { ...item, group });
      return newItems;
    })
  }, [items, setItems]);
  let index = 0;

  return (
    <div className='app'>
      <div className='flex space-x-4'>
        <DndProvider backend={HTML5Backend}>
          {GroupTypes.map(group => {
            const items = groupedItems[group];
            const firstIndex = index;
            if (items === undefined) return null;
            index = index + items.length;

            return (
              <section key={group} className='w-full'>
                <Group
                  items={items}
                  groupType={group}
                  firstIndex={firstIndex}
                  onMove={moveItem}
                />
              </section>
            )
          })}
        </DndProvider>
      </div>
    </div>
  );
}
