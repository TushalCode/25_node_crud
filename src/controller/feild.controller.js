const { field_Service } = require("../services");

const create_Field = async (req, res) => {
    try {
        // service => field create
        const data = req.body;
        const new_field = await field_Service.Create_field(data);
        // console.log(new_field)

        if (!new_field) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "field created successfully",
            data: new_field,
        });
    } catch (error) {
        // !field
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Field = async (req, res) => {
    try {
        // service <= services => DATA
        const field_list = await field_Service.Get_field();

        if (!field_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: field_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Field = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await field_Service.Delete_field(id);
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
const update_Field = async (req, res) => {
    try {
        const id = req.params.field_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await field_Service.Update_field(id, data);
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
    create_Field,
    get_Field,
    delete_Field,
    update_Field,
};
