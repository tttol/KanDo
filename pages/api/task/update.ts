import type { NextApiRequest, NextApiResponse } from 'next';

// 仮のデータベース（本番ではRDSやDynamoDBを使用）
const tasks = [
  { id: 1, title: 'Task 1', memo: 'Memo 1' },
  // ...
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const task = tasks.find((t) => t.id === Number(id));

  if (req.method === 'PUT') {
    const { title, memo } = req.body;

    if (task) {
      // 本番ではデータベースを更新する
      task.title = title;
      task.memo = memo;
      res.status(200).json({ message: 'Updated successfully' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
