import "./BlogRedirect.css";
import { Link } from "react-router-dom"
export function BlogRedirect() {
  return (
    <>
      <div className="blog-container">
        <Link to="/blog">
          <button className="blog-button">Cooming soon</button>
        </Link>
      </div>
    </>
  );
}

export default BlogRedirect;
