const { student } = require("../model")

const Create_student = (data)=>{
    return student.create(data)
}

const Get_student = ()=>{
    return student.find()
}
const Delete_student = (id) => {
    return student.findByIdAndDelete(id)
    // return student.deleteMany()
}
const Update_student = (id,data) => {
    return student.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_student,
    Get_student,
    Delete_student,
    Update_student

}