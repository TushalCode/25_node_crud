const { hill } = require("../model")

const Create_hill = (data)=>{
    return hill.create(data)
}

const Get_hill = ()=>{
    return hill.find()
}
const Delete_hill = (id) => {
    return hill.findByIdAndDelete(id)
    // return hill.deleteMany()
}
const Update_hill = (id,data) => {
    return hill.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_hill,
    Get_hill,
    Delete_hill,
    Update_hill

}