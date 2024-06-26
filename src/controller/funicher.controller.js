const { funicher_Service } = require("../services");

const create_Funicher = async (req, res) => {
    try {
        // service => funicher create
        const data = req.body;
        const new_funicher = await funicher_Service.Create_funicher(data);
        // console.log(new_funicher)

        if (!new_funicher) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "funicher created successfully",
            data: new_funicher,
        });
    } catch (error) {
        // !funicher
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Funicher = async (req, res) => {
    try {
        // service <= services => DATA
        const funicher_list = await funicher_Service.Get_funicher();

        if (!funicher_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: funicher_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Funicher = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await funicher_Service.Delete_funicher(id);
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
const update_Funicher = async (req, res) => {
    try {
        const id = req.params.funicher_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await funicher_Service.Update_funicher(id, data);
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
    create_Funicher,
    get_Funicher,
    delete_Funicher,
    update_Funicher,
};
