import "../styles/globals.css";
import Head from "../node_modules/next/head";
import React from "react";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import users from "../reducers/users";

import { Provider } from "react-redux";

const reducers = combineReducers({ users });

const persistConfig = { key: "quest", storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <Head>
            <title>QUEST</title>
          </Head>
          <Component {...pageProps} />
        </>
      </PersistGate>
    </Provider>
  );
}

export default App;
