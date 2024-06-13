import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js'
import delleRoutes from './routes/delleRoutes.js'
dotenv.config();

const app = express();
app.use(cors())

app.use(express.json({limit: '50mb'}));


app.use('/api/v1/post',postRoutes);
app.use('/api/v1/delle',delleRoutes);

app.get('/',async (req,res) => {
    res.send("Hello From JELL-E!");
})

const startServer =  async () =>{

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8000, () => console.log("Server has started on port http://localhost:8000"))
    } catch (error) {
        console.log(error);
    }
}
startServer()