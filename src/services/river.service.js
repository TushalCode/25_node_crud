const { river } = require("../model")

const Create_river = (data)=>{
    return river.create(data)
}

const Get_river = ()=>{
    return river.find()
}
const Delete_river = (id) => {
    return river.findByIdAndDelete(id)
    // return river.deleteMany()
}
const Update_river = (id,data) => {
    return river.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_river,
    Get_river,
    Delete_river,
    Update_river

}