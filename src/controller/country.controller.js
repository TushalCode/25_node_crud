const { country_Service } = require("../services");

const create_Country = async (req, res) => {
    try {
        // service => country create
        const data = req.body;
        const new_country = await country_Service.Create_country(data);
        // console.log(new_country)

        if (!new_country) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "country created successfully",
            data: new_country,
        });
    } catch (error) {
        // !country
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Country = async (req, res) => {
    try {
        // service <= services => DATA
        const country_list = await country_Service.Get_country();

        if (!country_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: country_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Country = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await country_Service.Delete_country(id);
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
const update_Country = async (req, res) => {
    try {
        const id = req.params.country_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await country_Service.Update_country(id, data);
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
    create_Country,
    get_Country,
    delete_Country,
    update_Country,
};
