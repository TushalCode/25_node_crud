const express = require("express");
const { plenet_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-plenet",
    plenet_Controller.create_Plenet
);

router.get(
    // call back <= controller
    "/list",
    plenet_Controller.get_Plenet
);
router.put(
    "/update-plenet/:plenet_id",
    // cb series
    plenet_Controller.update_Plenet
);
router.delete(
    "/delete/:id",
    // cb doc
    plenet_Controller.delete_Plenet
);
module.exports = router