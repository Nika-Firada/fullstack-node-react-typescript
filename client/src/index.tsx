import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import Auth from "./redux-slices/auth/auth";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
    <BrowserRouter>
      <Provider store={store}>
        <Auth>
          <App />
        </Auth>
      </Provider>
    </BrowserRouter>
  </ConfigProvider>
);
