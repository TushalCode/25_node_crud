const { mall } = require("../model")

const Create_mall = (data)=>{
    return mall.create(data)
}

const Get_mall = ()=>{
    return mall.find()
}
const Delete_mall = (id) => {
    return mall.findByIdAndDelete(id)
    // return mall.deleteMany()
}
const Update_mall = (id,data) => {
    return mall.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_mall,
    Get_mall,
    Delete_mall,
    Update_mall

}