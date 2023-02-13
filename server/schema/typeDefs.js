const { gql } = require("apollo-server")

const typeDefs = gql `
    type Test{
        id : ID!
    }

    type Query{
        getTest: Test
    }
`

module.exports={typeDefs}