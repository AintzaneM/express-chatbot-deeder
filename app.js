const express = require('express');
 
// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
// require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js

const allRoutes = require("./routes");
app.use("/api", allRoutes);

const index = require("./routes/index");
app.use("/", index);




const chatbotRouter = require("./routes/chatbot.routes")
app.use("/api/", chatbotRouter)

const messageRouter = require("./routes/message.routes")
app.use("/api/", messageRouter)



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);



module.exports = app;


