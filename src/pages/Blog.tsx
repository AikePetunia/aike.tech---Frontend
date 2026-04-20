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
            <div>
            <Link to="/">
                HOME
            </Link>
            {loading && <p>Loading !</p>}
            {error && <p>{error}</p>}
                
            <div>
                {posts.map((post) => (
                    <BlogBox key={post.slug} post={post} />
                ))}
                </div>
            </div>
        </>
    )
}


export default Blog;

