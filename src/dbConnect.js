import { MONGOURI } from "../credentials.js";
import { MongoClient } from "mongodb";

const client = new MongoClient(MONGOURI)

export const db = client.db("major-express-mongo")

