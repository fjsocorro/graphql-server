const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
    info: String!
}
`
const resolvers = {
    Query: {
        info: () => `This is an API`
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000 and this is the API life`))