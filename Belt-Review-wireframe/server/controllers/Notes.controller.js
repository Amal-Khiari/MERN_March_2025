import Notes from "../models/Notes.model.js";

//! CRUD Feature

// 1. Create a Notes Feature

async function createNotes(req, res) {
    try {
        const newNotes = await Notes.create(req.body);
        res.json(newNotes);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// 2. Read All Notes Feature
async function getAllNotes(req, res) {
    try {
        const allNotes = await Notes.find(); 
        res.json(allNotes);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); 
    }
}

// 3. Read One Note By it's ID Feature
async function getOneNotes(req, res) {
    try {
        const foundNotes = await Notes.findById(req.params.id);
        res.json(foundNotes);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
 // 4. Update One Note By it's ID Feature 
 async function updateOneNotes(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedNotes = await Notes.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedNotes);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
// 4. Delete One Note By it's ID Feature 
async function deleteOneNotes(req, res) {
    try {
        const deletedNotes = await Notes.findByIdAndDelete(req.params.id);
        res.json(deletedNotes);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {createNotes,getAllNotes,getOneNotes,updateOneNotes,deleteOneNotes}