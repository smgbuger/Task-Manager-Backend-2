//A middleware in backend delevopment is a middle man that sits between the incoming request from the client and the final response from the server it is a function that can modify the request, process it, handle certain tasks before passing it on unto the next part of the code or sending back a response

const notFound = (req, res) => {
  res.json({ message: "Route not found" });
};

module.exports = notFound;
