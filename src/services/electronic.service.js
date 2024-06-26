const { electronic } = require("../model")

const Create_electronic = (data)=>{
    return electronic.create(data)
}

const Get_electronic = ()=>{
    return electronic.find()
}
const Delete_electronic = (id) => {
    return electronic.findByIdAndDelete(id)
    // return electronic.deleteMany()
}
const Update_electronic = (id,data) => {
    return electronic.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_electronic,
    Get_electronic,
    Delete_electronic,
    Update_electronic

}