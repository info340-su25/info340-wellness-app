import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { initializeApp } from "firebase/app";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyDfTRMll7IlVrvyfphqoQlWeXnPTjeeFno",
  authDomain: "huskyhealth-tracker.firebaseapp.com",
  databaseURL: "https://huskyhealth-tracker-default-rtdb.firebaseio.com",
  projectId: "huskyhealth-tracker",
  storageBucket: "huskyhealth-tracker.firebasestorage.app",
  messagingSenderId: "777209560380",
  appId: "1:777209560380:web:2286c521cd583975bd7239"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
