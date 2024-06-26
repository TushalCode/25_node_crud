const { city_Service } = require("../services");

const create_City = async (req, res) => {
    try {
        // service => city create
        const data = req.body;
        const new_city = await city_Service.Create_city(data);
        // console.log(new_city)

        if (!new_city) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "city created successfully",
            data: new_city,
        });
    } catch (error) {
        // !city
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_City = async (req, res) => {
    try {
        // service <= services => DATA
        const city_list = await city_Service.Get_city();

        if (!city_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: city_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_City = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await city_Service.Delete_city(id);
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
const update_City = async (req, res) => {
    try {
        const id = req.params.city_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await city_Service.Update_city(id, data);
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
    create_City,
    get_City,
    delete_City,
    update_City,
};
