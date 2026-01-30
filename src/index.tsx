import ReactDOM from "react-dom/client";
import App from "./sections/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// saque strict mode
root.render(<App />);
