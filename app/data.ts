export const ItemTypes = ['item' as const];
export type ItemType = (typeof ItemTypes)[number];
export const GroupTypes = ['mission', 'values', 'premise'] as const;
export type GroupType = (typeof GroupTypes)[number];
export type Contents = {
  title: string;
  memo?: string;
};
export type Item = {
  id: number;
  type: ItemType;
  group: GroupType;
  contents: Contents;
};
export type ItemWithIndex = Item & {
  index: number;
};
export type MoveHandler = (dragIndex: number, targetIndex: number, groupType: GroupType) => void;
export const TitleMap = {
  mission: 'Mission',
  values: 'Values',
  premise: 'Premise',
} as const;

export const items: Item[] = [
  {
    id: 1,
    type: 'item',
    group: 'mission',
    contents: {
      title: '出会いからイノベーションを生み出す',
      memo: 'mission',
    },
  },
 {
    id: 2,
    type: 'item',
    group: 'values',
    contents: {
      title: '仕事に向き合い、仕事を楽しむ',
      memo: 'values',
    },
  },
 {
    id: 3,
    type: 'item',
    group: 'premise',
    contents: {
      title: '強みを活かし、成果を出す',
      memo: 'premise',
    },
  },
 {
    id: 4,
    type: 'item',
    group: 'premise',
    contents: {
      title: 'リモート歓迎',
      memo: 'premise',
    },
  },
];