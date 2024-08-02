import Note from "../models/note-model.js";
const notesCtrl = {}

//list all notes of the user
notesCtrl.list = async (req,res) => {
    try{
        const notes = await Note.find({user:req.userId})
        res.json(notes)
    }catch(err) {
        res.json(err)

    }
}


// create a note

notesCtrl.create = async (req,res) => {
    const body = req.body
    try{
        const note = new Note(body)
        note.user = req.userId
        await note.save()
        res.status(201).json(note)
    }catch(err) {
        res.json(err)
    }
}


// show a note of a user

notesCtrl.show = async(req,res) => {
    const id = req.params.id
    try{
        const note = await Note.findOne({_id:id,user:req.userId})
        res.json(note)

    }catch(err){
        res.json(err)

    }
}



// update a note of the user

notesCtrl.update = async(req,res) => {
    const id = req.params.id
    const body = req.body
    try{
        const note = await Note.findOneAndUpdate({_id:id,user:req.userId},body,{new:true})
        if(!note){
            return res.status(404).json({errors: "record not found"})
        }
        res.json(note)

    }catch(err){

    }
}



// delete a note of the user

notesCtrl.delete = async (req,res) => {
    try{
        const id = res.params.id
        const note = await Notes.findOneAndDelete({_id:id,user:req.userId})
        if(!note){
            return res.status(404).json({})
        }
        res.json(note)

    }catch(err){
        res.json(err)

    }
}




export default notesCtrl