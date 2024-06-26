const { hill_Service } = require("../services");

const create_Hill = async (req, res) => {
    try {
        // service => hill create
        const data = req.body;
        const new_hill = await hill_Service.Create_hill(data);
        // console.log(new_hill)

        if (!new_hill) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "hill created successfully",
            data: new_hill,
        });
    } catch (error) {
        // !hill
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Hill = async (req, res) => {
    try {
        // service <= services => DATA
        const hill_list = await hill_Service.Get_hill();

        if (!hill_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: hill_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Hill = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await hill_Service.Delete_hill(id);
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
const update_Hill = async (req, res) => {
    try {
        const id = req.params.hill_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await hill_Service.Update_hill(id, data);
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
    create_Hill,
    get_Hill,
    delete_Hill,
    update_Hill,
};
