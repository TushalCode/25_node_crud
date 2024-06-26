const { subject_Service } = require("../services");

const create_Subject = async (req, res) => {
    try {
        // service => subject create
        const data = req.body;
        const new_subject = await subject_Service.Create_subject(data);
        // console.log(new_subject)

        if (!new_subject) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "subject created successfully",
            data: new_subject,
        });
    } catch (error) {
        // !subject
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Subject = async (req, res) => {
    try {
        // service <= services => DATA
        const subject_list = await subject_Service.Get_subject();

        if (!subject_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: subject_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Subject = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await subject_Service.Delete_subject(id);
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
const update_Subject = async (req, res) => {
    try {
        const id = req.params.subject_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await subject_Service.Update_subject(id, data);
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
    create_Subject,
    get_Subject,
    delete_Subject,
    update_Subject,
};
