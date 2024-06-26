const { computer } = require("../model")

const Create_computer = (data)=>{
    return computer.create(data)
}

const Get_computer = ()=>{
    return computer.find()
}
const Delete_computer = (id) => {
    return computer.findByIdAndDelete(id)
    // return computer.deleteMany()
}
const Update_computer = (id,data) => {
    return computer.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_computer,
    Get_computer,
    Delete_computer,
    Update_computer

}