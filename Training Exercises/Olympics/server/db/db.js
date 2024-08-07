import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
    
    console.log(`process.env.MONGODB_URI :
    ${process.env.MONGODB_URI}`);
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log('Connected to MongoDB, Mazal Tov!');
        
    } catch (err) {
        
    console.log('Error connecting to MongoDB:');
    throw err;
        
    }
    };
