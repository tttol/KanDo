  import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

  const client = new DynamoDBClient({});

  const scanDdb = async () => {
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
      return response;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  export default scanDdb;