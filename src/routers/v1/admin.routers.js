const express = require("express");
const { admin_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-admin",
    admin_Controller.create_Admin
);

router.get(
    // call back <= controller
    "/list",
    admin_Controller.get_Admin
);
router.put(
    "/update-admin/:admin_id",
    // cb series
    admin_Controller.update_Admin
);
router.delete(
    "/delete/:id",
    // cb doc
    admin_Controller.delete_Admin
);
module.exports = router