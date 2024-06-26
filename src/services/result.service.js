const { result } = require("../model")

const Create_result = (data)=>{
    return result.create(data)
}

const Get_result = ()=>{
    return result.find()
}
const Delete_result = (id) => {
    return result.findByIdAndDelete(id)
    // return result.deleteMany()
}
const Update_result = (id,data) => {
    return result.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_result,
    Get_result,
    Delete_result,
    Update_result

}