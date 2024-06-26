const { river_Service } = require("../services");

const create_River = async (req, res) => {
    try {
        // service => river create
        const data = req.body;
        const new_river = await river_Service.Create_river(data);
        // console.log(new_river)

        if (!new_river) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "river created successfully",
            data: new_river,
        });
    } catch (error) {
        // !river
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_River = async (req, res) => {
    try {
        // service <= services => DATA
        const river_list = await river_Service.Get_river();

        if (!river_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: river_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_River = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await river_Service.Delete_river(id);
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
const update_River = async (req, res) => {
    try {
        const id = req.params.river_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await river_Service.Update_river(id, data);
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
    create_River,
    get_River,
    delete_River,
    update_River,
};
