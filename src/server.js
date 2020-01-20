const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

const server = require("http").Server(app);

const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.on("connectRoom", box => {
    socket.join(box);
  });
});

const connectUrl = process.env.DB_URL || "mongodb://localhost:27017/dropbox";

mongoose.connect(connectUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use("/api/", require("./routes"));

app.use(async (err, req, res, next) =>
  res.status(err.status || 500).json({ error: "Internal Server Error" })
);

const port = process.env.PORT || 3333;

server.listen(port, () => console.log(`Listening at http://[::]:${port}`));
