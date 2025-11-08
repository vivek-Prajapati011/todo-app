import { model, Schema } from "mongoose";

const todoSchema  = new Schema({
    completed : {
        type : Boolean,
        default : false
    },
    title : {
        type : String,
        required : true
    }
})
const Todo = model("Todo" , todoSchema)
export default Todo