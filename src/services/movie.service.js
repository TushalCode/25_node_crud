const { movie } = require("../model")



const Create_movie = (data) => {
    // console.log("Servicewssssss");
    return movie.create(data)
}
const Get_movie = () => {
    // console.log("Servicewssssss");
    return movie.find()
}
const Delete_movie = (id) => {
    // console.log("Servicewssssss");
    return movie.findByIdAndDelete(id)
}
const Update_movie = (id,data) => {
    // console.log("Servicewssssss");
    return movie.findByIdAndUpdate(id,data)
}

module.exports = {
    Create_movie,Get_movie,Delete_movie,Update_movie
}