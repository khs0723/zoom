const { gql } = require("apollo-server-express")

const typeDefs = gql `
    type User{
        name : String!
        password: String!

    }

    

    type Query{
        getTest: String
    }

    type Mutation{
        login(name: String!, password: String!): User!
    }
`

module.exports = typeDefs