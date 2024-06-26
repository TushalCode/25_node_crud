const { result_Service } = require("../services");

const create_Result = async (req, res) => {
    try {
        // service => result create
        const data = req.body;
        const new_result = await result_Service.Create_result(data);
        // console.log(new_result)

        if (!new_result) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "result created successfully",
            data: new_result,
        });
    } catch (error) {
        // !result
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Result = async (req, res) => {
    try {
        // service <= services => DATA
        const result_list = await result_Service.Get_result();

        if (!result_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: result_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Result = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await result_Service.Delete_result(id);
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
const update_Result = async (req, res) => {
    try {
        const id = req.params.result_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await result_Service.Update_result(id, data);
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
    create_Result,
    get_Result,
    delete_Result,
    update_Result,
};
