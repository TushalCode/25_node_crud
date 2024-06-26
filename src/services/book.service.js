const { book } = require("../model")

const Create_book = (data)=>{
    return book.create(data)
}

const Get_book = ()=>{
    return book.find()
}


module.exports ={
    Create_book,
    Get_book

}