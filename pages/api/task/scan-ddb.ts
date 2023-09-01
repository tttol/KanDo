  import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { NextApiRequest, NextApiResponse } from "next";

  const client = new DynamoDBClient({});

  const scanDdb = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("scna-ddb called!");
    try {
      const command = new ScanCommand({
        TableName: "kando-task",
      });
      console.log(`command=${command}`);
    
      const response = await client.send(command);
      response.Items.forEach(function (data) {
        console.log(JSON.stringify(data));  // データ形式に注意
      });
      // return response;
      res.end();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  export default scanDdb;