const { state } = require("../model")

const Create_state = (data)=>{
    return state.create(data)
}

const Get_state = ()=>{
    return state.find()
}
const Delete_state = (id) => {
    return state.findByIdAndDelete(id)
    // return state.deleteMany()
}
const Update_state = (id,data) => {
    return state.findByIdAndUpdate(id,data)
}
module.exports ={
    Create_state,
    Get_state,
    Delete_state,
    Update_state

}