import { Link } from "react-router-dom"
import type { BlogPostJson } from "../../../hooks/loadBlogPost"

type Props = {
    post: BlogPostJson
}

export function BlogBox({ post }: Props) {
    return (
        <>
            <article style={{color:  "white"}}>
                <Link to={`/blog/${post.section}/${post.slug}`}>
                <img src={post.cover} alt={post.title} loading="lazy"></img>
                <h3>{post.title}</h3>
                    <p>{post.category}</p>
                    <p>slug {post.slug}</p>

            <div>
                {post.tags.map((tag) => (
                <span key={tag}>{tag} </span>
                ))}
            </div>
                </Link>
            </article>
        </>
    )
}

export default BlogBox;