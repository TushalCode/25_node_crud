const { electric_Service } = require("../services");

const create_Electric = async (req, res) => {
    try {
        // service => electric create
        const data = req.body;
        const new_electric = await electric_Service.Create_electric(data);
        // console.log(new_electric)

        if (!new_electric) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "electric created successfully",
            data: new_electric,
        });
    } catch (error) {
        // !electric
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Electric = async (req, res) => {
    try {
        // service <= services => DATA
        const electric_list = await electric_Service.Get_electric();

        if (!electric_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: electric_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Electric = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await electric_Service.Delete_electric(id);
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
const update_Electric = async (req, res) => {
    try {
        const id = req.params.electric_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await electric_Service.Update_electric(id, data);
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
    create_Electric,
    get_Electric,
    delete_Electric,
    update_Electric,
};
