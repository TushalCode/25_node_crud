const { cartoon_Service } = require("../services");

const create_Cartoon = async (req, res) => {
    try {
        // service => cartoon create
        const data = req.body;
        const new_cartoon = await cartoon_Service.Create_cartoon(data);
        // console.log(new_cartoon)

        if (!new_cartoon) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "cartoon created successfully",
            data: new_cartoon,
        });
    } catch (error) {
        // !cartoon
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Cartoon = async (req, res) => {
    try {
        // service <= services => DATA
        const cartoon_list = await cartoon_Service.Get_cartoon();

        if (!cartoon_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: cartoon_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Cartoon = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await cartoon_Service.Delete_cartoon(id);
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
const update_Cartoon = async (req, res) => {
    try {
        const id = req.params.cartoon_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await cartoon_Service.Update_cartoon(id, data);
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
    create_Cartoon,
    get_Cartoon,
    delete_Cartoon,
    update_Cartoon,
};
