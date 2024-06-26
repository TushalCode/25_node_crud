const { tree } = require("../model")

const Create_tree = (data)=>{
    return tree.create(data)
}

const Get_tree = ()=>{
    return tree.find()
}
const Delete_tree = (id) => {
    return tree.findByIdAndDelete(id)
    // return tree.deleteMany()
}
const Update_tree = (id,data) => {
    return tree.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_tree,
    Get_tree,
    Delete_tree,
    Update_tree

}