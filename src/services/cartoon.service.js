const { cartoon } = require("../model")

const Create_cartoon = (data)=>{
    return cartoon.create(data)
}

const Get_cartoon = ()=>{
    return cartoon.find()
}
const Delete_cartoon = (id) => {
    return cartoon.findByIdAndDelete(id)
    // return cartoon.deleteMany()
}
const Update_cartoon = (id,data) => {
    return cartoon.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_cartoon,
    Get_cartoon,
    Delete_cartoon,
    Update_cartoon

}