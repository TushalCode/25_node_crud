const { data_Service } = require("../services");

const create_Data = async (req, res) => {
    try {
        // service => data create
        const data = req.body;
        const new_data = await data_Service.Create_data(data);
        // console.log(new_data)

        if (!new_data) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "data created successfully",
            data: new_data,
        });
    } catch (error) {
        // !data
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Data = async (req, res) => {
    try {
        // service <= services => DATA
        const data_list = await data_Service.Get_data();

        if (!data_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: data_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Data = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await data_Service.Delete_data(id);
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
const update_Data = async (req, res) => {
    try {
        const id = req.params.data_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await data_Service.Update_data(id, data);
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
    create_Data,
    get_Data,
    delete_Data,
    update_Data,
};
