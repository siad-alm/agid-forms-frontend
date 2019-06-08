import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { RestLink } from "apollo-link-rest";
import GraphQLJSON, { GraphQLJSONObject } from "graphql-type-json";

import * as fetch from "isomorphic-fetch";

import {
  GATSBY_BACKEND_ENDPOINT,
  GATSBY_HASURA_GRAPHQL_ENDPOINT,
  GATSBY_HASURA_TEST_TOKEN
} from "../config";

// setup your `RestLink` with your endpoint
const restLink = new RestLink({
  uri: GATSBY_BACKEND_ENDPOINT,
  bodySerializers: {
    Json: (data: any, headers: Headers) => {
      return {
        body: data,
        headers: { ...headers, "Content-Type": "application/json" }
      };
    }
  }
});

const httpLink = new HttpLink({
  uri: GATSBY_HASURA_GRAPHQL_ENDPOINT,
  fetch
});

// see https://www.apollographql.com/docs/react/recipes/authentication/#Header

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      Authorization: GATSBY_HASURA_TEST_TOKEN
        ? `Bearer ${GATSBY_HASURA_TEST_TOKEN}`
        : ""
    }
  };
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // tslint:disable-next-line: no-console
    console.error(graphQLErrors);
  }
  if (networkError) {
    // tslint:disable-next-line: no-console
    console.error(networkError);
  }
});

export const GraphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([onErrorLink, restLink, authLink, httpLink]),
  resolvers: { JSON: GraphQLJSON, JSONObject: GraphQLJSONObject }
});