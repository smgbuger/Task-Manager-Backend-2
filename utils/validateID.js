// utils is the short for utilities which refers to a collection of helper functions or modules designes to perform comon task on multiple funcitons.

///these taks often includes things like data validation, formatiing or other repetitive operations that are used accross difrent path of the applic

const mongoose = require("mongoose"); //importing mongoose

const validateID = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  return isValid;
};

module.exports = validateID;
