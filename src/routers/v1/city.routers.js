const express = require("express");
const { city_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-city",
    city_Controller.create_City
);

router.get(
    // call back <= controller
    "/list",
    city_Controller.get_City
);
router.put(
    "/update-city/:city_id",
    // cb series
    city_Controller.update_City
);
router.delete(
    "/delete/:id",
    // cb doc
    city_Controller.delete_City
);
module.exports = router