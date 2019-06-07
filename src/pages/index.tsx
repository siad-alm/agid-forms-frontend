import { graphql } from "gatsby";
import * as React from "react";
import Image from "../components/Image";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import { gql } from "apollo-boost";
import { Mutation, Query } from "react-apollo";

const GET_SECRET = gql`
  mutation PostAuthEmailIpaCode($ipa_code: String!, $body: String!) {
    post_auth_email_ipa_code(ipa_code: $ipa_code, body: $body)
      @rest(
        path: "/auth/email/{args.ipa_code}"
        type: "GetPaFromIpa"
        method: "POST"
        bodyKey: "body"
      ) {
      ipa_pa @type(name: "ipa_pa") {
        cod_amm
      }
    }
  }
`;

const GET_TOKENS = gql`
  mutation PostAuthLoginIpaCode(
    $ipa_code: String!
    $body: LoginCredentialsInput!
  ) {
    post_auth_login_ipa_code(ipa_code: $ipa_code, body: $body)
      @rest(
        path: "/auth/login/{args.ipa_code}"
        type: "LoginTokens"
        method: "POST"
        bodyKey: "body"
      ) {
      graphql_token
      backend_token
    }
  }
`;

const GET_IPA = gql`
  query GetIpa {
    ipa_pa(where: { cod_amm: { _eq: "agid" } }) {
      cod_amm
      des_amm
    }
    ipa_ou(
      where: {
        _and: {
          cod_amm: { _eq: "agid" }
          cod_ou: { _eq: "Ufficio_Transizione_Digitale" }
        }
      }
    ) {
      cod_ou
      nome_resp
      cogn_resp
      mail_resp
    }
  }
`;

type MenuConfigQueryT = {
  data: any;
};

import { GetIpa } from "../generated/graphql/GetIpa";

const IndexPage = ({ data }: MenuConfigQueryT) => {
  return (
    <Layout menu={data.allConfigYaml.edges[0].node.menu}>
      <SEO title="Home" meta={[]} keywords={[]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Query<GetIpa> query={GET_IPA}>
        {({ loading, error, data: pdata }) => {
          if (loading) {
            return <div>Loading...</div>;
          }
          if (error) {
            return <div>Error</div>;
          }
          if (pdata) {
            return JSON.stringify(pdata.ipa_pa[0]);
          }
          return "";
        }}
      </Query>{" "}
      <Mutation mutation={GET_SECRET}>
        {(getSecret: any) => (
          <button
            onClick={() =>
              getSecret({ variables: { ipa_code: "agid", body: {} } })
            }
          >
            getSecret
          </button>
        )}
      </Mutation>{" "}
      <Mutation mutation={GET_TOKENS}>
        {(getTokens: any) => (
          <button
            onClick={() =>
              getTokens({
                variables: {
                  body: {
                    secret: "x"
                  }
                }
              })
            }
          >
            getTokens
          </button>
        )}
      </Mutation>{" "}
    </Layout>
  );
};

export const query = graphql`
  query IndexConfigQuery {
    allConfigYaml(filter: { menu: { elemMatch: { name: { ne: null } } } }) {
      edges {
        node {
          menu {
            name
            slug
            subtree {
              name
              slug
              subtitle
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
