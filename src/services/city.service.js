const { city } = require("../model")

const Create_city = (data)=>{
    return city.create(data)
}

const Get_city = ()=>{
    return city.find()
}
const Delete_city = (id) => {
    return city.findByIdAndDelete(id)
    // return city.deleteMany()
}
const Update_city = (id,data) => {
    return city.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_city,
    Get_city,
    Delete_city,
    Update_city

}