const { state_Service } = require("../services");

const create_State = async (req, res) => {
    try {
        // service => state create
        const data = req.body;
        const new_state = await state_Service.Create_state(data);
        // console.log(new_state)

        if (!new_state) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "state created successfully",
            data: new_state,
        });
    } catch (error) {
        // !state
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_State = async (req, res) => {
    try {
        // service <= services => DATA
        const state_list = await state_Service.Get_state();

        if (!state_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: state_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_State = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await state_Service.Delete_state(id);
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
const update_State = async (req, res) => {
    try {
        const id = req.params.state_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await state_Service.Update_state(id, data);
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
    create_State,
    get_State,
    delete_State,
    update_State,
};
