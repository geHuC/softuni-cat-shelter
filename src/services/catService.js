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
const getById = async (id) => {
    return await Cat.findById(id).populate('breed').lean();
}
const deleteById = async (id) => {
    return await Cat.findByIdAndDelete(id);
    //should delete picture here
}
const catSevice = {
    create,
    all,
    getById,
    deleteById
}

module.exports = catSevice;