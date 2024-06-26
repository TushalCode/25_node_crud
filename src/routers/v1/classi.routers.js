const express = require("express");
const { classi_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-classi",
    classi_Controller.create_Classi
);

router.get(
    // call back <= controller
    "/list",
    classi_Controller.get_Classi
);
router.put(
    "/update-classi/:classi_id",
    // cb series
    classi_Controller.update_Classi
);
router.delete(
    "/delete/:id",
    // cb doc
    classi_Controller.delete_Classi
);
module.exports = router