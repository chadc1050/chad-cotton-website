import {GraphQLClient} from "graphql-request";

export const graphqlClient = new GraphQLClient(
    process.env.CMS_HOST as string,
    {
        headers: {"Authorization": "Bearer " + process.env.CMS_TOKEN}
    }
)