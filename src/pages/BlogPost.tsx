import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { loadPostBySlug, type BlogPost as BlogPostType } from "../hooks/loadBlogPost"

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

  return (
    <main>
      <Link to="/blog">blog home</Link>
      <h1>{post.title}</h1>
          <p>{post.category}</p>
          <p>cuak</p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
    </main>
  )
}

export default BlogPost