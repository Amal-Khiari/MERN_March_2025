import book from "../models/book.model.js";

const bookcontroller = {
    // CRUD
    //1. Create a book  feature
    createbook: async (req, res)=> {
        try {
            const newbook = await Task.create(req.body);
            res.json(newbook);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }, 

    //! 2. Read all book feature 

    getAllbook: async  (req, res)=> {
        try {
            const allbook = await Task.find(); // here is our query to find Tasks
            res.json(allbook);
        } catch (error) {
            console.log(error);
            res.status(400).json(error); // here is our error response
        }
    },
    //* 3. Read one book by ID 

    getOnebook: async (req, res) => {
        try {
            const foundbook = await Person.findById(req.params.id);
            res.json(foundbook);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    //* 4. Update one book 

    updateOnebook : async (req, res) => {
        const options = {
            new: true,
            runValidators: true,
        };
        try {
            const updatedbook = await Task.findByIdAndUpdate(req.params.id, req.body, options);
            res.json(updatedbook);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    //* 5.  delete one book 

    deleteOnebook : async (req, res) => {
        try {
            const deletedbook = await Task.findByIdAndDelete(req.params.id);
            res.json(deletedbook);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

}
export default bookcontroller