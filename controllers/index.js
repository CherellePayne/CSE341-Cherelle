// const awesomeFunction = (reg, res, next) =>{
// reg.json('Awesome person');
// };

// const returnAnotherPerson = (reg, res, next) =>{
//     reg.json('Super Awesome person');
// };

// module.exports = {awesomeFunction, returnAnotherPerson };

// module.exports = {awesomeFunction};mongo --version

//Not sure where to put this
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Cherelle:rockyranger@cluster0.3ikqihk.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

//copied from .env
// const uri = "mongodb+srv://Cherelle:rockyranger@cluster0.3ikqihk.mongodb.net/?retryWrites=true&w=majority";
