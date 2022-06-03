const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const ExtractJwt = require("passport-jwt").ExtractJwt;

const { uploadFile } = require('./s3')

// const passport = require("passport");
const passport = require("passport");

const app = express();
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const users = require("./routes/api/users");
const listings = require("./routes/api/listings");
const reviews = require("./routes/api/reviews");
const messages = require("./routes/api/messages");

//sockets
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
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
// messages.io = io;
io.on('connection', (socket) => {
    // console.log(socket);
    // console.log(socket.handshake.headers.token.split(" ")[1]);
    console.log(ExtractJwt.fromAuthHeaderAsBearerToken()(socket.handshake.headers.token));
})

server.listen(5001, () => {
    console.log("Server is listening");
    // console.log(io);
})
//

// app.get("/", (req, res) => res.send("Hello World!"));
app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/listings", listings);
app.use("/api/reviews", reviews);
app.use("/api/messages", messages);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));