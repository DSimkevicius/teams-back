const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/auth.js");
const contentRoutes = require("./routes/content.js");

app.get("/", (req, res) => {
  res.send("Server is running succesfully");
});

app.use("/auth", authRoutes);
app.use("/content", contentRoutes);

app.all("*", (req, res) => {
  res.status(404).send("404 Page Not Found");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on ${port} port`));
