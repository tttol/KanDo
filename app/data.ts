export const ItemTypes = ['item' as const];
export type ItemType = (typeof ItemTypes)[number];
export const GroupTypes = ['parking', 'todo', 'doing', 'done'] as const;
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
  parking: 'PARKING LOT',
  todo: 'TODO',
  doing: 'DOING',
  done: 'DONE',
} as const;

export const items: Item[] = [
  {
    id: 1,
    type: 'item',
    group: 'parking',
    contents: {
      title: '〇〇さんに打ち合わせ依頼する',
      memo: 'あとでもいい',
    },
  },
 {
    id: 2,
    type: 'item',
    group: 'todo',
    contents: {
      title: '機能Aリファクタリング',
      memo: '',
    },
  },
 {
    id: 3,
    type: 'item',
    group: 'doing',
    contents: {
      title: 'チケットXX着手',
      memo: '・実装 ・テスト',
    },
  },
 {
    id: 4,
    type: 'item',
    group: 'doing',
    contents: {
      title: 'コードレビュー',
      memo: '',
    },
  },
];