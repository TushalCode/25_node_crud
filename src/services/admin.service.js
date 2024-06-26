const { admin } = require("../model")

const Create_admin = (data)=>{
    return admin.create(data)
}

const Get_admin = ()=>{
    return admin.find()
}
const Delete_admin = (id) => {
    return admin.findByIdAndDelete(id)
    // return admin.deleteMany()
}
const Update_admin = (id,data) => {
    return admin.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_admin,
    Get_admin,
    Delete_admin,
    Update_admin

}