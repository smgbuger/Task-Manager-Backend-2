// in back end development, a model is like a blueprint for the data in your application. it defines the structure of your data and how it interacts with the database

const mongoose = require("mongoose"); //import mongoose

const schema = mongoose.Schema; // shortcut to access mongoose Schema class

//defining the Scheman for task based on UI
const taskSchema = new schema({
  title: String, //title of the task
  description: String, //description of the task
  tag: String, //tag associated with the task "Urgent" or "Important"
});

module.exports = mongoose.model("task", taskSchema);
//exporitng the model to be used for request operation in the controller
