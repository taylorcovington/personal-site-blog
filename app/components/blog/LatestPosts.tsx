import BlogPostPreviewGrid from "./BlogPostPreviewList";
import { IBlogPost } from '../../interfaces/interfaces';
import { Link } from "@remix-run/react";

interface LatestPostProps {
  posts: IBlogPost[];
}

export default function LatestPosts({ posts }: LatestPostProps) {
  console.log(posts)
  return (
    <BlogPostPreviewGrid
      heading="From the blog"
      subheading="You'll find posts about frontend development, career tips, and dev resources."
      posts={posts}
      archiveUrl="/blog"
    />
  )
}