
const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt_decode = require("jwt-decode");

const { uploadFile } = require('./s3')

// const passport = require("passport");
const passport = require("passport");

const app = express();

const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

// const db = require('./config/keys').mongoURI;
const db = process.env.MONGO_URI
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const users = require("./routes/api/users");
const listings = require("./routes/api/listings");
const reviews = require("./routes/api/reviews");
const messages = require("./routes/api/messages");

//sockets
const https = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        // origin: "ws://garden-swapp.herokuapp.com/socket.io/?EIO=4&transport=websocket",
        origin: "http://garden-swapp.herokuapp.com/",
        credentials: true
    }
})
// const io = require("socket.io")(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         // origin: "*",
//         // methods: ["GET", "POST"]
//     }
// });

// console.log(io);
// io = new io.Server(server);
messages.io = io;
io.connectedUsers = {};
io.on('connection', (socket) => {
    // console.log(socket);
    // console.log(socket.handshake.headers.token.split(" ")[1]);
    console.log(jwt_decode(socket.handshake.headers.token)); // user that just connected
    let user = jwt_decode(socket.handshake.headers.token);
    io.connectedUsers[user.id] = socket.id;
    console.log(io.connectedUsers);
    io.to(socket.id).emit("testing 123");
})
const port = process.env.PORT || 5000;

//

// app.get("/", (req, res) => res.send("Hello World!"));
app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// app.use(upload.array());
// app.use(express.static('public'));
app.use("/api/users", users);
app.use("/api/listings", listings);
app.use("/api/reviews", reviews);
app.use("/api/messages", messages);


// app.listen(port, () => console.log(`Server is running on port ${port}`));

server.listen(port, () => {
    console.log("Server is listening");
    // console.log(io);
})