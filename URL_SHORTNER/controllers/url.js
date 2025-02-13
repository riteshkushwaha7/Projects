const shortid = require("shortid");
const URL = require("../models/url");

async function generateNewURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });
    
    const shortID = shortid.generate(); 
    try {
        await URL.create({
            shortId: shortID,  
            redirectURL: body.url,
            visitHistory: [],
        });
        return res.json({ id: shortID });
    } catch (error) {
        return res.status(500).json({ error: "Failed to create URL", details: error.message });
    }
}

module.exports = {
    generateNewURL,
};
