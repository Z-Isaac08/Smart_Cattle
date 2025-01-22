const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

app.get('/api/data', async (req, res) => {
    try {
        await client.connect();
        const database = client.db("donnees_sante");
        const collection = database.collection("lectures_capteurs");
        
        const data = await collection
            .find()
            .sort({ timestamp: -1 })
            .limit(1)
            .toArray();
            
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3004;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});