const express = require("express");
const { data_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-data",
    data_Controller.create_Data
);

router.get(
    // call back <= controller
    "/list",
    data_Controller.get_Data
);
router.put(
    "/update-data/:data_id",
    // cb series
    data_Controller.update_Data
);
router.delete(
    "/delete/:id",
    // cb doc
    data_Controller.delete_Data
);
module.exports = router