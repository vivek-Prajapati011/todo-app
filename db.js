import { MongoClient } from "mongodb";

export const client = new MongoClient(
  "mongodb://admin:admin@127.0.0.1:27017/todoApp?authSource=admin"
);

export async function connectDB() {
  await client.connect();
  const db = client.db("todoApp");
  console.log("✅ Authenticated & connected to todoApp DB");
  return db;
}

process.on("SIGINT", async () => {
  await client.close();
  console.log("Client disconnected!");
  process.exit(0);
});
