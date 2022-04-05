import BlogPostPreviewGrid from "./BlogPostPreviewGrid";
import { IBlogPost } from '../../interfaces/interfaces';

interface LatestPostProps {
  posts: IBlogPost[];
}

export default function LatestPosts({ posts }: LatestPostProps) {
  console.log(posts)
  return (
    <BlogPostPreviewGrid
      heading="From the blog"
      subheading="You'll find posts about full-stack development, career tips, and dev resources."
      posts={posts}
      // archiveUrl="/archive/"
    />
  )
}