import { Link } from "react-router-dom"
import type { BlogPostJson } from "../../../hooks/loadBlogPost"
import "./BlogBox.css"
type Props = {
    post: BlogPostJson
}

export function BlogBox({ post }: Props) {
    return (
        <>
                <Link to={`/blog/${post.section}/${post.slug}`} className="blgb-container">
                <div className="blgb-header">
                    <div className='blgb-tags'>
                        {post.tags.map((tag) => (
                        <span key={tag} className="blgb-tag">{tag} </span>
                        ))} {/* */}
                    </div>
                    <img src={post.cover} alt={post.title} loading="lazy"></img>
                </div>

                    <div className="blgb-texts">
                        <h3>{post.title} {/*<p>{post.category}</p>*/}</h3>
                        <p>{post.excerpt}</p> 
                        <small className="blgb-data">date: {post.publishedAt} - slug {post.slug}</small> 
                    </div>
                    
                </Link>
        </>
    )
}

export default BlogBox;