const { field } = require("../model")

const Create_field = (data)=>{
    return field.create(data)
}

const Get_field = ()=>{
    return field.find()
}
const Delete_field = (id) => {
    return field.findByIdAndDelete(id)
    // return field.deleteMany()
}
const Update_field = (id,data) => {
    return field.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_field,
    Get_field,
    Delete_field,
    Update_field

}