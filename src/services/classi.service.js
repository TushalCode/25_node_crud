const { classi } = require("../model")

const Create_classi = (data)=>{
    return classi.create(data)
}

const Get_classi = ()=>{
    return classi.find()
}
const Delete_classi = (id) => {
    return classi.findByIdAndDelete(id)
    // return classi.deleteMany()
}
const Update_classi = (id,data) => {
    return classi.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_classi,
    Get_classi,
    Delete_classi,
    Update_classi

}