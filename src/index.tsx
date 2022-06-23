import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import ThreeRouter from "./components/models/ThreeRouter";
import { history } from "./components/models/History";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <ThreeRouter history={history}>
        <App />
    </ThreeRouter>
);
reportWebVitals();
