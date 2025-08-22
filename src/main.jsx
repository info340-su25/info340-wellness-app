import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { initializeApp } from "firebase/app";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const firebaseConfig = {
  apiKey: "…",
  authDomain: "…",
  databaseURL: "https://<your-project-id>.firebaseio.com",
  projectId: "…",
  appId: "…",
};

initializeApp(firebaseConfig);
