const Cat = require("../models/Cat.js");

const create = async (req, file) => {
    let { name, description, breed } = req;
    let image = `/images/${file.filename}`;
    await Cat.create({
        name,
        description,
        breed,
        image
    });
}
const all = async () => {
    return await Cat.find({}).populate('breed').lean();
}
const catSevice = {
    create,
    all
}

module.exports = catSevice;