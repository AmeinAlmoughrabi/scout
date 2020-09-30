var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const dotenv = require("dotenv").config();

const connectDB = require("./config/db");
const RoomManagement = require("./src/RoomManagement");
const config = require("./config.json");

run();

async function run() {
  await connectDB();
}

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("join_room", (payload) => {
    socket.join(payload.roomName);
    RoomManagement.createOrJoinRoom(payload.roomName, socket.id);
  });

  socket.on("update_player_location", (payload) => {
    RoomManagement.updatePlayerLocation(socket.id, payload);
    socket.emit("");
  });

  socket.on("disconnect", () => {
    RoomManagement.leaveRoom(socket.id);
    console.log("user disconnected");
  });
});

//======================================================================================================
//										Configure Express server										   |
//======================================================================================================

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

http.createServer(app).listen(PORT, function () {
  console.log(`HTTPS Server running on port ${PORT}`.yellow.bold);
});

//======================================================================================================
//											Api Endpoints											   |
//======================================================================================================

app.get("/", function (req, res) {
  res.send("Successfully hit the room managegment api!");
  console.log("yeah");
});

const userRouter = require("./routes/user");
expressApp.use("/user", userRouter);
