require("dotenv").config(); // load environment variables from a .env file into process.env

const express = require("express"); // import the installed express framework

const mongoose = require("mongoose"); // import the installed moongles library

const cors = require("cors");

const app = express(); //spin or start the express framework server

const port = 3000; // define the port number for the server

//CORS (cross origin resource sharing) it is used when the frontend and backend are from diffrent origins(domains, ports or prtocols) and the backend hasnt been configured to accept request from the frontend origin
app.use(cors());

const taskRouter = require("./routes/taskRouter"); // import the taskRouter for task-related routes
const notFound = require("./middlewares/notFound"); // import the midlleware 404 not found
// ======================================================================================

app.use(express.json()); //midlleware to parse incoming JSON request from postman allowing access to the request.body

app.use("/api/task", taskRouter); // mount the taskRouter at /api/task, all task-related routes start with /api/task

app.use(notFound); // use the custome 404 middleware for handling

const start = async () => {
  try {
    //attempt to connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");

    // start the server and listening on the specified port
    app.listen(port, () => {
      console.log(`server is runing on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

//mongoose is an ODM (object data modelling): it is a library  for MongoDB and Node.js

// MongoDB is a NoSQL database that stores data in a flexible, JSON like format

//francisokagbue3
//CZr1EPby2XVTm8fE
//mongodb+srv://francisokagbue3:CZr1EPby2XVTm8fE@cluster0.slhbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//Netlify, Vercel, Render etc are popular free clod platfor mfor hosting web applications.

//netlify is best for static sites and applications with a focus on simplicity and serverless functions.

//vercel is optimised for frint end develoment, especially for thouse using react and next.js with stronger serverless and edge capabilities.

//rednder is versatile platform suitable for full-stack applications, offering more felxible in terms of supported frameworks, databases and backend services
