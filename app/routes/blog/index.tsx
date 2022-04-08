import BlogPostFullList from '../../components/blog/BlogPostFullList';
import useBlogPosts from '../../hooks/useBlogPosts';

export default function BlogIndex() {
  const posts = useBlogPosts()
  console.log('posts inside blogindex: ', posts)
  return (
    <>
      <BlogPostFullList
        heading="Welcome to my blog"
        subheading="You'll find posts about full-stack development, career tips, and dev resources."
        posts={posts}
        archiveUrl="/archive/"
      />
    </>
  )
}