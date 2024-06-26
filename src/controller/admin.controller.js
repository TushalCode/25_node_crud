const { admin_Service } = require("../services");

const create_Admin = async (req, res) => {
    try {
        // service => admin create
        const data = req.body;
        const new_admin = await admin_Service.Create_admin(data);
        // console.log(new_admin)

        if (!new_admin) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "Admin created successfully",
            data: new_admin,
        });
    } catch (error) {
        // !admin
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Admin = async (req, res) => {
    try {
        // service <= services => DATA
        const admin_list = await admin_Service.Get_admin();

        if (!admin_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: admin_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Admin = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await admin_Service.Delete_admin(id);
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
const update_Admin = async (req, res) => {
    try {
        const id = req.params.admin_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await admin_Service.Update_admin(id, data);
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
    create_Admin,
    get_Admin,
    delete_Admin,
    update_Admin,
};
