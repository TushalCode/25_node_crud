const express = require("express");
const { student_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-student",
    student_Controller.create_Student
);

router.get(
    // call back <= controller
    "/list",
    student_Controller.get_Student
);
router.put(
    "/update-student/:student_id",
    // cb series
    student_Controller.update_Student
);
router.delete(
    "/delete/:id",
    // cb doc
    student_Controller.delete_Student
);
module.exports = router