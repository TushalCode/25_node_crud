const { plenet } = require("../model")

const Create_plenet = (data)=>{
    return plenet.create(data)
}

const Get_plenet = ()=>{
    return plenet.find()
}
const Delete_plenet = (id) => {
    return plenet.findByIdAndDelete(id)
    // return plenet.deleteMany()
}
const Update_plenet = (id,data) => {
    return plenet.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_plenet,
    Get_plenet,
    Delete_plenet,
    Update_plenet

}