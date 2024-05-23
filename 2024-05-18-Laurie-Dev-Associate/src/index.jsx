import React from "react";
import ReactDOMClient from "react-dom/client";
import { OlioblogvFrame } from "./screens/OlioblogvFrame";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<OlioblogvFrame />);
