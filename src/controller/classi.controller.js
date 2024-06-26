const { classi_Service } = require("../services");

const create_Classi = async (req, res) => {
    try {
        // service => classi create
        const data = req.body;
        const new_classi = await classi_Service.Create_classi(data);
        // console.log(new_classi)

        if (!new_classi) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "classi created successfully",
            data: new_classi,
        });
    } catch (error) {
        // !classi
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Classi = async (req, res) => {
    try {
        // service <= services => DATA
        const classi_list = await classi_Service.Get_classi();

        if (!classi_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: classi_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Classi = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await classi_Service.Delete_classi(id);
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
const update_Classi = async (req, res) => {
    try {
        const id = req.params.classi_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await classi_Service.Update_classi(id, data);
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
    create_Classi,
    get_Classi,
    delete_Classi,
    update_Classi,
};
