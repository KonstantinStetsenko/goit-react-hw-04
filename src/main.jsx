import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
  toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      paddingLeft: '50px',
      paddingRight: '50px',
      color: '#713200',
    },
  }}
/>
    <App />
  </StrictMode>
);
