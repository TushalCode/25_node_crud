const express = require("express");
const { subject_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-subject",
    subject_Controller.create_Subject
);

router.get(
    // call back <= controller
    "/list",
    subject_Controller.get_Subject
);
router.put(
    "/update-subject/:subject_id",
    // cb series
    subject_Controller.update_Subject
);
router.delete(
    "/delete/:id",
    // cb doc
    subject_Controller.delete_Subject
);
module.exports = router