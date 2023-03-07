const User = require('../../models/User')

module.exports = {
    Query:{
        getUsers: () => {
            return 'Hi'
        }
    },
    Mutation:{
        login: () => {
            console.log("hi");
            const testUser = new User({
                name : "test",
                password : "1",
                email: "e",
                createdAt : new Date().toISOString(),
                friends:[]
            })

            
            return testUser
        }
    }
}