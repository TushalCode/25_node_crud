const { cource } = require("../model")

const Create_cource = (data)=>{
    return cource.create(data)
}

const Get_cource = ()=>{
    return cource.find()
}
const Delete_cource = (id) => {
    return cource.findByIdAndDelete(id)
    // return cource.deleteMany()
}
const Update_cource = (id,data) => {
    return cource.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_cource,
    Get_cource,
    Delete_cource,
    Update_cource

}