const express = require("express");
const { cartoon_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-cartoon",
    cartoon_Controller.create_Cartoon
);

router.get(
    // call back <= controller
    "/list",
    cartoon_Controller.get_Cartoon
);
router.put(
    "/update-cartoon/:cartoon_id",
    // cb series
    cartoon_Controller.update_Cartoon
);
router.delete(
    "/delete/:id",
    // cb doc
    cartoon_Controller.delete_Cartoon
);
module.exports = router