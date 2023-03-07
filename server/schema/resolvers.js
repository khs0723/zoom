const User = require("../models/User")

const resolvers = {
    Query :{
        getTest(){
            return "hi"
        }
    },
    
    Mutation:{
        login(parent,{name, password}){
            console.log(name)
            const u = new User({
                name: name,
                password: password
            })
            return u
        }
    }
}

module.exports = resolvers