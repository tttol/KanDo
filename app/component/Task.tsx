import { useDrag } from 'react-dnd';

const ItemType = 'TASK';

export const Task = ({ task }: TaskDetail) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { task },
  });

  return (
    <div ref={ref} className="p-2 border shadow rounded-md">
        {task.detail}
    </div>
  );
};
