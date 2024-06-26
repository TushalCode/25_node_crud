const { computer_Service } = require("../services");

const create_Computer = async (req, res) => {
    try {
        // service => computer create
        const data = req.body;
        const new_computer = await computer_Service.Create_computer(data);
        // console.log(new_computer)

        if (!new_computer) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "computer created successfully",
            data: new_computer,
        });
    } catch (error) {
        // !computer
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Computer = async (req, res) => {
    try {
        // service <= services => DATA
        const computer_list = await computer_Service.Get_computer();

        if (!computer_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: computer_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Computer = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await computer_Service.Delete_computer(id);
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
const update_Computer = async (req, res) => {
    try {
        const id = req.params.computer_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await computer_Service.Update_computer(id, data);
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
    create_Computer,
    get_Computer,
    delete_Computer,
    update_Computer,
};
