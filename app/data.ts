export const TaskTypes = ['item' as const];
export type ItemType = (typeof TaskTypes)[number];
export const GroupTypes = ['PARKING', 'TODO', 'DOING', 'DONE'] as const;
// export type GroupType = (typeof GroupTypes)[number];
export type Contents = {
  title: string;
  memo?: string;
};
export type Task = {
  id: number;
  type: ItemType;
  group: string;
  contents: Contents;
};
export type TaskWithIndex = Task & {
  index: number;
};
export type MoveHandler = (dragIndex: number, targetIndex: number, groupType: string) => void;
export const TitleMap = {
  parking: 'PARKING LOT',
  todo: 'TODO',
  doing: 'DOING',
  done: 'DONE',
} as const;

export const items: Task[] = [
  {
    id: 1,
    type: 'item',
    group: 'PARKING',
    contents: {
      title: '〇〇さんに打ち合わせ依頼する',
      memo: 'あとでもいい',
    },
  },
 {
    id: 2,
    type: 'item',
    group: 'TODO',
    contents: {
      title: '機能Aリファクタリング',
      memo: '',
    },
  },
 {
    id: 3,
    type: 'item',
    group: 'DOING',
    contents: {
      title: 'チケットXX着手',
      memo: '・実装 ・テスト',
    },
  },
 {
    id: 4,
    type: 'item',
    group: 'DOING',
    contents: {
      title: 'コードレビュー',
      memo: '',
    },
  },
];