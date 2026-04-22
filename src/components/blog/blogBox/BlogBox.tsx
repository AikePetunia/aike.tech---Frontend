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
                <div className='blgb-tags'>
                    {post.tags.map((tag) => (
                    <span key={tag}>{tag} </span>
                    ))} {/* */}
                </div>
                
                <div className="blgb-header">
                    <img src={post.cover} alt={post.title} loading="lazy"></img>
                </div>

                    <div className=".blgb-texts">
                    <h3>{post.title} {/*<p>{post.category}</p>*/}</h3>
                    <p>{post.excerpt}</p> 
                    <p>{post.excerpt}</p> 
                    <small>date: {post.publishedAt} slug {post.slug}</small> 
                    </div>
                    
                </Link>
        </>
    )
}

export default BlogBox;