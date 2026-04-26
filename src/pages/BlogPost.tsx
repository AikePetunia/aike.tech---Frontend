import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { loadPostBySlug, type BlogPost as BlogPostType } from "../hooks/loadBlogPost"
import "./BlogPost.css"
import { BlogFooter } from "./BlogFooter"

export function BlogPost() {
  const { section, slug } = useParams()
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!section || !slug) return

loadPostBySlug(section as "project" | "random", slug)
  .then(setPost)
  .catch((e: unknown) => setError(e instanceof Error ? e.message : String(e)))
    .finally(() => setLoading(false))
      
  }, [section, slug])

  if (loading) return <p>loading !</p>
  if (error) return <p>{error}</p>
  if (!post) return <p>post not found</p>

  // cambiar titulo segun titulo de post
  
  return (
    <>
          <div className="blg-bg-onpost">          </div>      
      <Link to="/" style={{ color: "red" }}>
          <button className="blg-go-back-btn">
              <span className="blg-go-back-text">
                  go home :3
             </span>
          </button>
      </Link>
      <div className="blg-post-container">
          <div className="blg-post-header">
            <h1>{post.title}</h1>
            <p>{post.category}</p>
          </div>
            <div className="blg-intro-separator"></div>
          <div className='blg-post-content'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
      </div>
      <BlogFooter />
    </>
  )
}

export default BlogPost