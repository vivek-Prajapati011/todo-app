import { ObjectId } from "mongodb";
export const addTodo = async (req, res) => {
  const todo = req.body;
  try {
    const result = await req.db.collection("todos").insertOne(todo);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create todo" });
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const todos = await req.db.collection("todos").find().toArray();
    res.sender("Index");
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const todo = await req.db
      .collection("todos")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch todo" });
  }
};

export const updateTodo =  async (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  try {
    const result = await req.db
      .collection("todos")
      .updateOne({ _id: new ObjectId(id) }, { $set: updatedTodo });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "Todo not updated" });
    }
    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

export const dltTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await req.db
      .collection("todos")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};