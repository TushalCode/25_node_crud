const { electronic_Service } = require("../services");

const create_Electronic = async (req, res) => {
    try {
        // service => electronic create
        const data = req.body;
        const new_electronic = await electronic_Service.Create_electronic(data);
        // console.log(new_electronic)

        if (!new_electronic) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "electronic created successfully",
            data: new_electronic,
        });
    } catch (error) {
        // !electronic
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Electronic = async (req, res) => {
    try {
        // service <= services => DATA
        const electronic_list = await electronic_Service.Get_electronic();

        if (!electronic_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: electronic_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Electronic = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await electronic_Service.Delete_electronic(id);
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
const update_Electronic = async (req, res) => {
    try {
        const id = req.params.electronic_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await electronic_Service.Update_electronic(id, data);
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
    create_Electronic,
    get_Electronic,
    delete_Electronic,
    update_Electronic,
};
