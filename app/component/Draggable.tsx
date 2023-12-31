import { useDrag, useDrop } from 'react-dnd';
import { Task, TaskWithIndex, TaskTypes, MoveHandler } from '../data';
import { useRef } from 'react';

const Draggable: React.FC<{
  item: Task, index: number, onMove: MoveHandler, children: any
}> = ({
  item, index, onMove, children
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: TaskTypes,
    hover(dragItem: TaskWithIndex, monitor) {
      if (!ref.current) return;
      const dragIndex = dragItem.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      if (item.group === dragItem.group) {
        const hoverRect = ref.current.getBoundingClientRect();
        const hoverMiddleY = (hoverRect.bottom - hoverRect.top) / 2;
        const mousePosition = monitor.getClientOffset();
        if (!mousePosition) return;
        const hoverClientY = mousePosition.y - hoverRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY * 0.5) return;
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY * 1.5) return;
      }

      onMove(dragIndex, hoverIndex, item.group);
      dragItem.index = hoverIndex;
      dragItem.group = item.group;
    }
  });

  const [{ isDragging, canDrag }, drag] = useDrag({
    type: 'item',
    item: { ...item, index },
    isDragging: monitor => monitor.getItem().id === item.id,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      canDrag: monitor.canDrag(),
    })
  })

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.4 : 1,
        cursor: canDrag ? 'move' : 'default',
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;