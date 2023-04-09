import { db } from './dbConnect.js'
import { ObjectId } from 'mongodb'
const coll = db.collection('clothing')

//Create

export async function addClothing(req, res) {
    const newClothes = req.body
    await coll.insertOne(newClothes)
    res.status(201).send({message: "new cloth added"})
}

//Read 
export async function getClothing(req, res) {
    const allClothes = await coll.find({}).toArray()
    res.status(200).send(allClothes)
}

//Delete
export async function deleteClothing(req, res){
    const docId = { "_id": new ObjectId(req.params.docId)
    }
    await coll.deleteOne(docId);
    res.status(202).send({ message: " deleted "}) 
}

//Update 
export async function updateClothing(req, res) {
    const docId = { "_id": new ObjectId(req.params.docId)
    }
    const updateCloth = {$set: req.body};
    const returnOption = { returnNewDocument: true};
    const query = await coll.findOneAndUpdate( docId, updateCloth, returnOption)
    res.status(202).send( {message: "updated"})
    console.table(query.value)
    
}