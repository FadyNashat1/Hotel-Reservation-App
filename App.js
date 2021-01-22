import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Routes from './navigation/';
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./store/store";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persist_reducer = persistReducer(persistConfig, rootReducer);
export default function App() {
  const store = createStore(persist_reducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        {/* <Text>Open up App.js to start working on your app sajd!</Text> */}
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
