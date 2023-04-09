import fastify from "fastify";
import mercurius from "mercurius";
import db from './config/index';
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';
import mongoose from "mongoose";


const PORT = 3000;

const uri =  "mongodb+srv://avijit1:pYyu4ahD4VRofa5m@cluster0.seesin9.mongodb.net/?retryWrites=true&w=majority";

const app = fastify({ logger: false });


app.register(db, { uri: uri });

// REGISTER MERCURIUS plaground in /playground
app.register(mercurius, {
    schema,
    resolvers,
    graphiql: 'graphiql',

});
app.listen(PORT, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});