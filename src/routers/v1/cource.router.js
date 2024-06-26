const express = require("express");
const { cource_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-cource",
    cource_Controller.create_Cource
);

router.get(
    // call back <= controller
    "/list",
    cource_Controller.get_Cource
);
router.put(
    "/update-cource/:cource_id",
    // cb series
    cource_Controller.update_Cource
);
router.delete(
    "/delete/:id",
    // cb doc
    cource_Controller.delete_Cource
);
module.exports = router