import fm from "front-matter"

export type BlogPostJson = {
  title: string
  slug: string
  section: "project" | "random"
  category: "DEVOPS" | "FRONTEND" | "BACKEND"
  tags: string[]
  cover: string
  excerpt: string
  language: "en" | "es"
  publishedAt: string
  draft: boolean
}

export type BlogPost = BlogPostJson & {
    content: string
}

// json for not loading a dump of .md in the future
export async function loadPosts(): Promise<BlogPostJson[]> {
    const res = await fetch("./posts/posts-index.json")
    if (!res.ok) throw new Error("posts index not found");
    const posts = (await res.json()) as BlogPostJson[]

    return posts 
        .filter((p) => !p.draft)
        .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
}

export async function loadPostBySlug(
  section: "project" | "random",
  slug: string
): Promise<BlogPost> {
  const res = await fetch(`/posts/${section}/${slug}.md`)
  if (!res.ok) throw new Error("post not found")

  const raw = await res.text()
  const parsed = fm<Partial<BlogPostJson>>(raw)
  const data = parsed.attributes
  const content = parsed.body

  return {
    title: String(data.title ?? ""),
    slug: String(data.slug ?? slug),
    section: (data.section ?? section) as "project" | "random",
    category: (data.category ?? "BACKEND") as "DEVOPS" | "FRONTEND" | "BACKEND",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    cover: String(data.cover ?? ""),
    excerpt: String(data.excerpt ?? ""),
    language: (data.language ?? "en") as "en" | "es",
    publishedAt: String(data.publishedAt ?? ""),
    draft: Boolean(data.draft ?? false),
    content,
  }
}