import { db } from './dbConnect.js'
import { ObjectId } from 'mongodb'
const coll = db.collection('clothing')

//Create

export async function addClothing(req, res) {
    const newClothes = req.body
    await coll.insertOne(newClothes)
    res.status(201).send({message: "new cloth added"})
}
