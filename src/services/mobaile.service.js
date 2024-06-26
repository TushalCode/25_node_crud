const { mobaile } = require("../model")

const Create_mobaile = (data)=>{
    return mobaile.create(data)
}

const Get_mobaile = ()=>{
    return mobaile.find()
}
const Delete_mobaile = (id) => {
    return mobaile.findByIdAndDelete(id)
    // return mobaile.deleteMany()
}
const Update_mobaile = (id,data) => {
    return mobaile.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_mobaile,
    Get_mobaile,
    Delete_mobaile,
    Update_mobaile

}