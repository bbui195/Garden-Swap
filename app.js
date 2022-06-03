const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

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


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));