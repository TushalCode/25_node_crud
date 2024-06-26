const { electric } = require("../model")

const Create_electric = (data)=>{
    return electric.create(data)
}

const Get_electric = ()=>{
    return electric.find()
}
const Delete_electric = (id) => {
    return electric.findByIdAndDelete(id)
    // return electric.deleteMany()
}
const Update_electric = (id,data) => {
    return electric.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_electric,
    Get_electric,
    Delete_electric,
    Update_electric

}