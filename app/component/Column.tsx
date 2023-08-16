import { useDrop } from 'react-dnd';
import { Task } from './Task';

const ItemType = 'TASK';

export const Column = ({ title, tasks, onDropTask }: any) => {
  const [, ref] = useDrop({
    accept: ItemType,
    drop: (item: any) => onDropTask(item.task, title),
  });

  return (
    <div ref={ref} className="border p-4 w-1/4">
    <h3 className="text-lg font-bold">{title}</h3>
    <div>{tasks.map((task: any) => <Task key={task.id} task={task} />)}</div>
    </div>
  );
};
