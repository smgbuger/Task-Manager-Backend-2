const express = require("express"); // import express framework
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  findEachTask,
} = require("../controller/taskController");

const router = express.Router(); // create a new router instance

router.get("/", getAllTask); //route to get all tasks, handled by getAllTask function

router.post("/create", createTask); // route to create a new task, handled by createTask function

router.patch("/:id", editTask); // route to edit to an existing task, handled by edit function

router.delete("/:id", deleteTask); // route to delete an existing specific task by its ID handled by the delete task function frm controller

router.get("/:id", findEachTask); // rout to find each task from an existing task by its ID handles by the findeachtask function from controller

// =======================================================================================================
module.exports = router; // export router to be used in the main server file app.js
