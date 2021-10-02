const mongoose = require('mongoose');
const dbString = 'mongodb://localhost:27017/catShelterDB';

async function connectToDB(){
    try {
        await mongoose.connect(dbString);
        console.log(`Connected to DB at`, dbString);
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectToDB;
