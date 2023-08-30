import { NextApiRequest, NextApiResponse } from 'next';
import { scan } from '../../../libs/dynamodb/scan';

const executeScan = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const tasks = await scan();
    return res.status(200).json(tasks);
  }

  return res.status(405).end();
};

export default executeScan;