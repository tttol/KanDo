import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const scan = async () => {
  const command = new ScanCommand({
    TableName: "kando-task",
  });

  const response = await client.send(command);
  return response;
};