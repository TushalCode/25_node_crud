const { student_Service } = require("../services");

const create_Student = async (req, res) => {
    try {
        // service => student create
        const data = req.body;
        const new_student = await student_Service.Create_student(data);
        // console.log(new_student)

        if (!new_student) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "student created successfully",
            data: new_student,
        });
    } catch (error) {
        // !student
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Student = async (req, res) => {
    try {
        // service <= services => DATA
        const student_list = await student_Service.Get_student();

        if (!student_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: student_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Student = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await student_Service.Delete_student(id);
        if (!result) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            message: "Deeeleted",
        });
    } catch (error) {
        // res
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const update_Student = async (req, res) => {
    try {
        const id = req.params.student_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await student_Service.Update_student(id, data);
        if (!result) {
            throw new Error("Not updated");
        }
        res.status(200).json({
            success: true,
            message: "Updated",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    create_Student,
    get_Student,
    delete_Student,
    update_Student,
};
