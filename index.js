import express from "express"
import cors from "cors"
import { addClothing, getClothing, deleteClothing, updateClothing } from "./src/clothing.js";

//

const PORT = 3000;
const app = express ()
app.use(cors());
app.use(express.json());

//

app.post("/clothes", addClothing);
app.get("/clothes", getClothing);
app.delete("/clothes/:docId", deleteClothing)
app.patch("/clothes/:docId", updateClothing)

app.listen(PORT, ()=> {
    console.log(`Listening to http://localhost:${PORT}..`)
})