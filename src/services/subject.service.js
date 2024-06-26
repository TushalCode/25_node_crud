const { subject } = require("../model")

const Create_subject = (data)=>{
    return subject.create(data)
}

const Get_subject = ()=>{
    return subject.find()
}
const Delete_subject = (id) => {
    return subject.findByIdAndDelete(id)
    // return subject.deleteMany()
}
const Update_subject = (id,data) => {
    return subject.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_subject,
    Get_subject,
    Delete_subject,
    Update_subject

}