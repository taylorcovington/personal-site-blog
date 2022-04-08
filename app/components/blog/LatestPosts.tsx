import BlogPostPreviewGrid from "./BlogPostPreviewList";
import { IBlogPost } from '../../interfaces/interfaces';

interface LatestPostProps {
  posts: IBlogPost[];
}

export default function LatestPosts({ posts }: LatestPostProps) {
  return (
    <BlogPostPreviewGrid
      heading="From the blog"
      subheading="You'll find posts about frontend development, career tips, and dev resources."
      posts={posts}
      archiveUrl="/blog"
    />
  )
}