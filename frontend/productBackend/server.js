const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const routesUrls = require("./routes/routes");
//const port = 4000 // port 4000 used between the agent or distribution server and the Desktop Central server. Type: HTTPS

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(4000, () => console.log("server is up and running"));

// var databaseConnection = mongodb.MongoClient.connect('mongodb://localhost:4000');

// app.get( '/' , (req, res) => {
//     res.status(200).send('<h1>Hello World</h1>')
// })

// app.listen(port, () => console.log(`Server has started on port: ${port}`))
