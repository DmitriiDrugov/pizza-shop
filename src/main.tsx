import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("No root element found");
}
ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
