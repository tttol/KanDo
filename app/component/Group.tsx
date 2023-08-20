import { useDrop } from 'react-dnd';
import Draggable from './Draggable';
import { Item as _Item, ItemWithIndex, GroupType, ItemTypes, MoveHandler } from '../data';
import Task from './Task';
import './Group.css';

const ItemType = 'TASK';

const Group: React.FC<{
  items: _Item[];
  groupType: GroupType;
  firstIndex: number;
  onMove: MoveHandler; 
}> = ({ items, groupType, firstIndex, onMove }) => {
  const [, ref] = useDrop({
    accept: ItemTypes,
    hover(dragItem: ItemWithIndex) {
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
    <div className={['group', groupType].join(' ')}>
      <h2><span className='count'>{items.length }</span>{groupType}</h2>
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