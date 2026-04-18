import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./sections/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// saque strict mode
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );
