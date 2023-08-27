import { useDrop } from 'react-dnd';
import Draggable from './Draggable';
import { Task as _Task, TaskWithIndex, TaskTypes, MoveHandler } from '../data';
import Task from './Task';
import './Group.css';

const ItemType = 'TASK';

const Group: React.FC<{
  items: _Task[];
  groupType: string;
  firstIndex: number;
  onMove: MoveHandler; 
}> = ({ items, groupType, firstIndex, onMove }) => {
  const [, ref] = useDrop({
    accept: TaskTypes,
    hover(dragItem: TaskWithIndex) {
      const dragIndex = dragItem.index;
      if (dragItem.group === groupType) return;
      const targetIndex = dragIndex < firstIndex ?
        // forward
        firstIndex + items.length - 1 :
        // backward
        firstIndex + items.length;
      
      onMove(dragIndex, targetIndex, groupType);
      
      dragItem.index = targetIndex;
      dragItem.group = groupType;
    }
  });

  return (
    <div className='bg-lime-100 p-3 text-black my-2 rounded'>
      <h2 className='font-black text-xl'><span className='count'>{items.length }</span>{groupType}</h2>
      <ul className='list' ref={ref}>
        {items.map((item, i) => {
          return (
            <li key={item.id} className='item-wrapper'>
              <Draggable item={item} index={firstIndex + i} onMove={onMove}>
                <Task id={item.id} contents={item.contents} />
              </Draggable>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Group;