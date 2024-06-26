const { mall_Service } = require("../services");

const create_Mall = async (req, res) => {
    try {
        // service => mall create
        const data = req.body;
        const new_mall = await mall_Service.Create_mall(data);
        // console.log(new_mall)

        if (!new_mall) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "mall created successfully",
            data: new_mall,
        });
    } catch (error) {
        // !mall
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Mall = async (req, res) => {
    try {
        // service <= services => DATA
        const mall_list = await mall_Service.Get_mall();

        if (!mall_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: mall_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Mall = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await mall_Service.Delete_mall(id);
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
const update_Mall = async (req, res) => {
    try {
        const id = req.params.mall_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await mall_Service.Update_mall(id, data);
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
    create_Mall,
    get_Mall,
    delete_Mall,
    update_Mall,
};
