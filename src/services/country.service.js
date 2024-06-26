const { country } = require("../model")

const Create_country = (data)=>{
    return country.create(data)
}

const Get_country = ()=>{
    return country.find()
}
const Delete_country = (id) => {
    return country.findByIdAndDelete(id)
    // return country.deleteMany()
}
const Update_country = (id,data) => {
    return country.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_country,
    Get_country,
    Delete_country,
    Update_country

}