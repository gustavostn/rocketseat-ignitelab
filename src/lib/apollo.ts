import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ouo4hp1cm701w7aoi3ckzz/master",
    cache: new InMemoryCache()
})