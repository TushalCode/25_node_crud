const express = require("express");
const { field_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-field",
    field_Controller.create_Field
);

router.get(
    // call back <= controller
    "/list",
    field_Controller.get_Field
);
router.put(
    "/update-field/:field_id",
    // cb series
    field_Controller.update_Field
);
router.delete(
    "/delete/:id",
    // cb doc
    field_Controller.delete_Field
);
module.exports = router