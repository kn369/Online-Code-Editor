import mongoose from 'mongoose';

const connectionString = "mongodb+srv://Cluster71787:XUFHc1tmTUhq@cluster71787.kdifudi.mongodb.net/";

mongoose.connect(connectionString)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error(err));

export default mongoose;