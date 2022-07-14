const express = require("express");
const app = express();
const mongoose = require("mongoose");
const apiRouter = require("./routes/auth.js");
const User_Router = require("./routes/user.js");
const post_Router = require("./routes/post.js");
const category_Router = require("./routes/category.js");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("fill has been uploaded");
});

app.use("/api/auth", apiRouter);
app.use("/api/user", User_Router);
app.use("/api/post", post_Router);
app.use("/api/category", category_Router);

// database
mongoose
  .connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.log(err));

app.listen("5000", () => {
  console.log("Backend is running at port 5000");
});
