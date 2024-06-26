const { movie_Service } = require("../services")

const create_Movie = async(req,res)=>{
    try {
        // Movie create in back-end
        // service

        // console.log(req.body)

        const new_movie = await movie_Service.Create_movie(req.body)

        res.status(200).json({
            success: true,
            data: new_movie
        })
    } catch (error) {
        // try block error response
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_Movie = async (req, res) => {
    try {
        // service <= services => DATA
        const movie_list = await movie_Service.Get_movie();

        if (!movie_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: movie_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Movie = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await movie_Service.Delete_movie(id);
        if (!result) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            message: "Deeeleted",
        });
    } catch (error) {
        // res
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const update_Movie = async (req, res) => {
    try {
        const id = req.params.movie_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await movie_Service.Update_movie(id, data);
        if (!result) {
            throw new Error("Not updated");
        }
        res.status(200).json({
            success: true,
            message: "Updated",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_Movie,
    get_Movie,
    delete_Movie,
    update_Movie,
}