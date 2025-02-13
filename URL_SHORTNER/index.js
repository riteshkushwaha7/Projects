const express = require('express');
const cors = require('cors');
const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;
const { connectDB } = require("./routes/connect");
const URL = require("./models/url");

connectDB('mongodb://localhost:27017/short-url')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection failed:", err));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: { visitHistory: new Date() },
            },
            { new: true }
        );

        if (entry) {
            res.redirect(entry.redirectURL);
        } else {
            res.status(404).send("URL not found");
        }
    } catch (err) {
        console.error("Error updating visit history:", err);
        res.status(500).send("Server error");
    }
});

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
