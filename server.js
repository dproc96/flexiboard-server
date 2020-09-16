const express = require("express");
const http = require("http");
const PORT = process.env.PORT || 3001;
const router = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router(app);

const server = http.createServer(app)
const io = require("socket.io")(server)

io.on("connection", socket => {
    console.log(`A user connected`)
    socket.on("new board", board => {
        console.log("New board: " + board)
    })
})

server.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})