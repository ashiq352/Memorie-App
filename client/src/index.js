import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const store = createStore(reducers, compose(applyMiddleware(thunk)));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  );
// Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// // After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);