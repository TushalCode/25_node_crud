const { funicher } = require("../model")

const Create_funicher = (data)=>{
    return funicher.create(data)
}

const Get_funicher = ()=>{
    return funicher.find()
}
const Delete_funicher = (id) => {
    return funicher.findByIdAndDelete(id)
    // return funicher.deleteMany()
}
const Update_funicher = (id,data) => {
    return funicher.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_funicher,
    Get_funicher,
    Delete_funicher,
    Update_funicher

}