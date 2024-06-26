const { plenet_Service } = require("../services");

const create_Plenet = async (req, res) => {
    try {
        // service => plenet create
        const data = req.body;
        const new_plenet = await plenet_Service.Create_plenet(data);
        // console.log(new_plenet)

        if (!new_plenet) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "plenet created successfully",
            data: new_plenet,
        });
    } catch (error) {
        // !plenet
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Plenet = async (req, res) => {
    try {
        // service <= services => DATA
        const plenet_list = await plenet_Service.Get_plenet();

        if (!plenet_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: plenet_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Plenet = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await plenet_Service.Delete_plenet(id);
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
const update_Plenet = async (req, res) => {
    try {
        const id = req.params.plenet_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await plenet_Service.Update_plenet(id, data);
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
    create_Plenet,
    get_Plenet,
    delete_Plenet,
    update_Plenet,
};
