const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const { uploadFile } = require('./s3')

// const passport = require("passport");

const app = express();
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


app.get("/", (req, res) => res.send("Hello World!"));

app.post("/images"), upload.single('image'), async (req,res)=>{
    const file = req.file
    const result = await uploadFile(file)
    console.log(result)
    const description = req.body.description
    res.send("upload picture")
}
// not sure about this part, figure it out after I'm done with S3



// app.use(passport.initialize());
// require('./config/passport')(passport);

// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));