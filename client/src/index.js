import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./SocketContext";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
	<ContextProvider>
		<App />
	</ContextProvider>
);
