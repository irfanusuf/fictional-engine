import reactDOM from "react-dom/client";
import "./global.css";
import 'react-toastify/dist/ReactToastify.css';
import Store from "./context/Store";

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(

<Store/>

);

