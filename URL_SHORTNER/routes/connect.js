const mongoose = require('mongoose');

async function connectDB(url) {
    try {
        // Establish a connection to the MongoDB database
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}

module.exports = { connectDB };
