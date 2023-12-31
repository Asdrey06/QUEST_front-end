import "../styles/globals.css";
import Head from "../node_modules/next/head";
import React from "react";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import users from "../reducers/users";
import concierges from "../reducers/concierges";
import offers from "../reducers/offers";
import createoffers from "../reducers/createoffers";
import conciergeProfile from "../reducers/conciergeProfile";
import openrequest from "../reducers/openrequest";
import rootReducer from "../reducers/rootReducer";

import { Provider } from "react-redux";

const reducers = combineReducers({
  users,
  concierges,
  offers,
  createoffers,
  conciergeProfile,
  openrequest,
});

const persistConfig = { key: "quest", storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof reducers>;

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <Head>
            <title>QUEST</title>
            <meta
              name="description"
              content="Votre concierge personnel pour des services sur mesure, une expérience exceptionnelle."
            ></meta>
          </Head>
          <Component {...pageProps} />
        </>
      </PersistGate>
    </Provider>
  );
}

export default App;
