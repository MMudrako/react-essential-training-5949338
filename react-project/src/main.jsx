import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const [, , third] = ["giraffe", "zeebra", "bear"];
console.log(third);

createRoot(document.getElementById("root")).render(<App />);
