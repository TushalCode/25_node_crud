const express = require("express");
const { funicher_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-funicher",
    funicher_Controller.create_Funicher
);

router.get(
    // call back <= controller
    "/list",
    funicher_Controller.get_Funicher
);
router.put(
    "/update-funicher/:funicher_id",
    // cb series
    funicher_Controller.update_Funicher
);
router.delete(
    "/delete/:id",
    // cb doc
    funicher_Controller.delete_Funicher
);
module.exports = router