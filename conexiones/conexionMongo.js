const { MongoClient } = require('mongodb');

async function run() {
    const client = new MongoClient("mongodb://localhost:27017/");
    try {
        console.log("Conexión exitosa");
        await client.connect();
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

run();
