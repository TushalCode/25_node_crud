const { cource_Service } = require("../services");

const create_Cource = async (req, res) => {
    try {
        // service => cource create
        const data = req.body;
        const new_cource = await cource_Service.Create_cource(data);
        // console.log(new_cource)

        if (!new_cource) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "cource created successfully",
            data: new_cource,
        });
    } catch (error) {
        // !cource
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Cource = async (req, res) => {
    try {
        // service <= services => DATA
        const cource_list = await cource_Service.Get_cource();

        if (!cource_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: cource_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Cource = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await cource_Service.Delete_cource(id);
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
const update_Cource = async (req, res) => {
    try {
        const id = req.params.cource_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await cource_Service.Update_cource(id, data);
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
    create_Cource,
    get_Cource,
    delete_Cource,
    update_Cource,
};
