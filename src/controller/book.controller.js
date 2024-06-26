const { book_Service } = require("../services")

const create_Book = async (req,res)=>{
    try {
        // service => book create
        const data = req.body
        const new_book = await book_Service.Create_book(data)
        // console.log(new_book)

        if(!new_book){
            throw new Error("somyhing went wrong")
        }
        res.status(200).json({
            success: true,
            message:"Book created successfully",
            data: new_book
        })

    } catch (error) {
        // !book
        res.status(401).json({
            success: false,
            message: error.message
        })
    }

}
const get_Book = async (req,res)=>{
    try {
        // service <= services => DATA
        const book_list = await book_Service.Get_book()

        if(!book_list){
            throw new Error("Data not found")
        }

        res.status(200).json({
            success: true,
            data: book_list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

module.exports = {
    create_Book,
    get_Book
}