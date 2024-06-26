const express = require("express")
const { movie_Controller } = require("../../controller")

const router = express.Router()


router.post(
    "/create-movie",
    // callaback || controller
    movie_Controller.create_Movie
)
router.get(
    // call back <= controller
    "/list",
    movie_Controller.get_Movie
);
router.put(
    "/update-movie/:movie_id",
    // cb series
    movie_Controller.update_Movie
);
router.delete(
    "/delete/:id",
    // cb doc
    movie_Controller.delete_Movie
);

module.exports= router