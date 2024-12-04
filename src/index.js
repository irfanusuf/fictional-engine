import reactDOM from "react-dom/client";
import "./global.css";
import "react-toastify/dist/ReactToastify.css";
import Store from "./context/Store";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <ToastContainer position="top-center" />
    <Store />
  </BrowserRouter>
);
