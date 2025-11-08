import mongoose from "mongoose"



export async function connectDB() {
  try{
    await mongoose.connect("mongodb://admin:admin@127.0.0.1:27017/todoApp?authSource=admin");
  console.log("✅ Authenticated & connected to todoApp DB");
  } catch(err) {
    console.log(err.message)
    process.exit(1)

  }
}

process.on("SIGINT", async () => {
  await client.close();
  console.log("Client disconnected!");
  process.exit(0);
});
