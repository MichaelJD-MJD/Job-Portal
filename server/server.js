import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';


// Initialize Express
const app = express();

// Connect to Database
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json()); // ini supaya respons yg diberikan dalam bentuk json

// Routes
app.get('/', (req, res)=> res.send("Api working"))

// Port 
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})