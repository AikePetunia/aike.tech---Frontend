import { Link } from "react-router-dom"
import { BlogBox } from "../components/blog/blogBox/BlogBox"
import { useEffect, useState } from "react"
import { loadPosts, type BlogPostJson } from "../hooks/loadBlogPost"
import "./Blog.css"

export function Blog() {
    const [posts, setPosts] = useState<BlogPostJson[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)

    useEffect(() => {
        loadPosts()
            .then(setPosts)
            .catch((e) => setError(e.message))
        .finally(() => setLoading(false))
    })

    return (  
        <>
            <div className="blg-bg">
 
            </div>      

            <Link to="/" style={{ color: "red" }}>
                <button className="blg-go-back-btn">
                    <span className="blg-go-back-text">
                        go home :3
                   </span>
                </button>
            </Link>
            <div className='blg-container'>

          
            {loading && <p>Loading !</p>}
                {error && <p>{error}</p>}
                

                <div className="blg-intro">
                    <div className='blg-intro-header'>
                        <h2>My <i>online</i> world</h2>
                        <h5>Blog</h5>
                    </div>
                    <p>
                        Here, you will find projects, implementations, discoverys, readings, and some random thoughts. All made by myself and I'm proud of.
                        <br />
                        Open to talk about it and get better along the time by expressing myself. 
                        <br />
                        <small>for me its a big step, since i'm very afraid of mistakes.</small>
                    </p>
                </div>
                
                <div className="blg-intro-separator"></div>

                {/* Json */}
                <div className='blg-posts-container'>
                {posts.map((post) => (
                    <BlogBox key={post.slug} post={post} />
                ))}
                </div>
                </div>
                
        </>
    )
}


export default Blog;

