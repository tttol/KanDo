import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Task, GroupType, GroupTypes } from '../data';

type GroupedItems = {
  [k in GroupType]?: Task[]
};
type UseGroupedItems = (items: Task[]) => [GroupedItems, Task[], Dispatch<SetStateAction<Task[]>>];

const useGroupedItems: UseGroupedItems = (items) => {
  const [list, setList] = useState<Task[]>(items);
  const [groupedItems, setGroupedItems] = useState<GroupedItems>({});
  useEffect(() => {
    setGroupedItems(
      GroupTypes.reduce<GroupedItems>((acc, group) => {
        acc[group] = list.filter(v => v.group === group);
        return acc;
      }, {})
    );
  }, [list])
  return [groupedItems, list, setList];
};

export default useGroupedItems;