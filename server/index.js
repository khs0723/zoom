const { ApolloServer } = require("apollo-server-express");
const typeDefs  = require("./schema/typeDefs");
const resolvers  = require("./schema/resolvers");

const mongoose = require("mongoose");
const { MONGODB } = require("./config");

const express = require("express");
const app = express()

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

mongoose.connect(MONGODB).then(() => {
    console.log("MongoDB Connected");
    return app.listen({port : 3001}, () => {
        console.log("server start")
    })
})