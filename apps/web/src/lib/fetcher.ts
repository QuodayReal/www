import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient("http://localhost:8000/graphql");

export const fetcher = (query, variables) => client.request(query, variables);
