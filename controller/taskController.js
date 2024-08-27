//A controller in backend is like a manager that handles the logic for specifific part of your application. it decides what should happen when a request comes in and coordinate between the request, your data and response

const Task = require("../models/task");
const validateID = require("../utils/validateID");

// ===========function to get all the tasks==================
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); // retrieve all tasks from the database
  res.status(200).json({ tasks });
};
// ============funtion for===creating a  task==================
const createTask = async (req, res) => {
  const { title, description, tag } = req.body; // destrcuture the required fields from the request body

  //eror handling
  if (!title) {
    return res.status(400).json({ message: "please provide a title" });
  }

  if (!description) {
    return res.status(400).json({ message: "please provide a description" });
  }

  if (!tag) {
    return res.status(400).json({ message: "Choose a tag" });
  }

  const task = await Task.create(req.body); // creating a new task with the requested data
  res.status(201).json({ message: "Task Created Succesfully", task }); // send a status code with a message of success
};

// =================function for editing an existing task======================================

const editTask = async (req, res) => {
  const { id } = req.params; // get the task ID from the request parameters

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} not  valid` });
  }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); // updates the task with the provided data
  res.status(200).json({ message: "Task Updated Succesfully" }); //sends the success message if updated succesfully
};

//============function to delte task===
const deleteTask = async (req, res) => {
  const { id } = req.params; // get the task ID from the request params

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} not  valid` });
  }
  const task = await Task.findOneAndDelete({ _id: id }); // deleted the task with provided data
  res.status(200).json({ message: "Task Succesfully deleted" }); // sends the deleted message if deletion is succesfull
};

// ============funtion to get each task=====================

const findEachTask = async (req, res) => {
  const { id } = req.params; //get the task ID from the request params

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} not  valid` });
  }

  const task = await Task.findOne({ _id: id }); //find the task with the specified id
  res.status(200).json({ task }); // display task
};

module.exports = { getAllTask, createTask, editTask, deleteTask, findEachTask }; //exporting the controller functions to be used in the router
