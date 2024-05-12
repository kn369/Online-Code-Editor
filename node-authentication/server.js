import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './user.routes.js';


const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Cluster71787:XUFHc1tmTUhq@cluster71787.kdifudi.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error(err));

app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
