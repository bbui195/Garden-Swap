const User = require('../models/User');
const mongoose = require("mongoose");
//password for all these seeds is 'garden123
//password in the database is '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'

const users = [

    new User({
        username: 'ChristineBurt',
        password: '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'
    }),

    new User({
        username: 'PortiaDuran',
        password: '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'
    }),

    new User({
        username: 'KylaDominguez',
        password: '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'
    }),

    new User({
        username: 'RaeJones',
        password: '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'
    }),

    new User({
        username: 'StaceyDixon',
        password: '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'
    }),

    new User({
        username: 'IvorLevine',
        password: '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'
    }),

    new User({
        username: 'BenjaminMullen',
        password: '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'
    }),

    new User({
        username: 'FarrahWallace',
        password: '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'
    }),

    new User({
        username: 'HermanChang',
        password: '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'
    }),

    new User({
        username: 'RayBates',
        password: '$2a$10$EbVxHRtwenSuv18s0wrdi.Xe5J4Eqe.BCO5rjOCUd59lFwRDycFv.'
    })
]

// const db = require('../config/keys').mongoURI;
const db = process.env.MONGO_URI

mongoose
  .connect(db, { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
    users.map(async (p, index) => {
        await p.save((err, result) => {
        if (index === users.length - 1) {
            console.log("DONE!");
            mongoose.disconnect();
        }
        });
    });
  });