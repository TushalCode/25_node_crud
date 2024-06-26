const { tree_Service } = require("../services");

const create_Tree = async (req, res) => {
    try {
        // service => tree create
        const data = req.body;
        const new_tree = await tree_Service.Create_tree(data);
        // console.log(new_tree)

        if (!new_tree) {
            throw new Error("somyhing went wrong");
        }
        res.status(200).json({
            success: true,
            message: "tree created successfully",
            data: new_tree,
        });
    } catch (error) {
        // !tree
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
const get_Tree = async (req, res) => {
    try {
        // service <= services => DATA
        const tree_list = await tree_Service.Get_tree();

        if (!tree_list) {
            throw new Error("Data not found");
        }
        res.status(200).json({
            success: true,
            data: tree_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Tree = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const result = await tree_Service.Delete_tree(id);
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
const update_Tree = async (req, res) => {
    try {
        const id = req.params.tree_id;
        const data = req.body;
        // id=> service
        // data=> service
        const result = await tree_Service.Update_tree(id, data);
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
    create_Tree,
    get_Tree,
    delete_Tree,
    update_Tree,
};
