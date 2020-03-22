import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Layout } from "./utility/context/Layout";
import * as serviceWorker from "./serviceWorker";
import { store } from "./redux/storeConfig/store";
import Spinner from "./components/@vuexy/spinner/Fallback-spinner";
import "./index.scss";
import "./@fake-db";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

const LazyApp = lazy(() => import("./App"));

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.covid.santandertech.com/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

// configureDatabase()
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Layout>
          <LazyApp />
        </Layout>
      </Suspense>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
