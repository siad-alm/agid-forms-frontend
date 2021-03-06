/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { GraphqlClient } from "./src/graphql/client";

import MDXLayout from "./src/components/MDXLayout";

// import { ThemeProvider } from "styled-components";
// import theme from "./theme";

import { setupI18Next } from "./src/utils/i18n";
const i18n = setupI18Next();

import { I18nextProvider } from "react-i18next";

export const wrapRootElement = ({ element }) => (
  // <ThemeProvider theme={theme}>
  <MDXLayout>
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={GraphqlClient}>
        <ApolloHooksProvider client={GraphqlClient}>
          {element}
        </ApolloHooksProvider>
      </ApolloProvider>
    </I18nextProvider>
  </MDXLayout>
  // </ThemeProvider>
);
