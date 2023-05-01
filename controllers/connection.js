//from mongodb video with Atlas
// Project Id 644d64cb4b6f5f78dbd41cf4

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://Cherelle:rockyranger@cluster0.3ikqihk.mongodb.net/?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}node

main().catch(console.error);


// const { MongoClient } = require('mongodb');

// async function main() {

//     const uri = "mongodb+srv://Cherelle:rockyranger@cluster0.3ikqihk.mongodb.net/?retryWrites=true&w=majority";

//     const client = new MongoClient(uri);

// try{
//     await client.connect();  
    
//     await listDatabases(client);

// } catch (e) {
//     console.error(e);   
// }finally{ 
//     await client.close();
// }
// }

// main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
// async function listDatabases(client){
//     const databasesList = await client.db().admin.listDatabases();

//     console.log("Databases:");
//     databaseesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     })
// }