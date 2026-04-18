import "./App.css";
import RightColumn from "./rightColumn/RightColumn";
import LeftColumn from "./leftColumn/LeftColumn";
import { Routes, Route } from "react-router-dom"
import Blog from "../pages/Blog"

export function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={
              <div className="parent-grid">
        <section className="left">
          <LeftColumn />
        </section>
        <section className="right">
          <RightColumn />
        </section>
      </div>
      }
/>

      
              <Route
        path="/blog"
        element={
        <Blog/>
        }
      />
    </Routes>
  );
}

export default App;

