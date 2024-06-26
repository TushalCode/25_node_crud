const { data } = require("../model")

const Create_data = (val)=>{
    return data.create(val)
}

const Get_data = ()=>{
    return data.find()
}
const Delete_data = (id) => {
    return data.findByIdAndDelete(id)
    // return data.deleteMany()
}
const Update_data = (id,val) => {
    return data.findByIdAndUpdate(id,val)
}
module.exports ={
    Create_data,
    Get_data,
    Delete_data,
    Update_data

}