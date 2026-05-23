import express from 'express';
import router from './routes/notes.route.js';
import connectDB from './database.js';

const app = express();

app.use(express.json());

app.use('/api',router);

connectDB();
const port = 3000;
app.listen(port,()=>{
    console.log("Server is running on port 3000");
});