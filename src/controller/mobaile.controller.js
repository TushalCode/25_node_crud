const { mobaile_Service } = require("../services");

const create_Mobaile = async (req, res) => {
    try {
        // service => mobaile create
        const data = req.body;
        const new_mobaile = await mobaile_Service.Create_mobaile(data);
        // console.log(new_mobaile)

        if (!new_mobaile) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "mobaile created successfully",
            data: new_mobaile,
        });
    } catch (error) {
        // !mobaile
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Mobaile = async (req, res) => {
    try {
        // service <= services => DATA
        const mobaile_list = await mobaile_Service.Get_mobaile();

        if (!mobaile_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: mobaile_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Mobaile = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await mobaile_Service.Delete_mobaile(id);
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
const update_Mobaile = async (req, res) => {
    try {
        const id = req.params.mobaile_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await mobaile_Service.Update_mobaile(id, data);
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
    create_Mobaile,
    get_Mobaile,
    delete_Mobaile,
    update_Mobaile,
};
