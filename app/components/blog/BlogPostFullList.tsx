import BlogHeading from "./BlogHeading";
import PostPreview from "./PostPreview";

// TODO this is duplicated with the preview list grid component
interface BlogPostFullListProps {
  heading: string;
  subheading: string;
  posts: any;
  archiveUrl?: string;
}

function BlogPostFullList({ heading, subheading, posts = [] }: BlogPostFullListProps) {
  console.log('posts blog full', posts)
  return (
    <div className="relative bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <BlogHeading heading={heading} subheading={subheading} />
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.length > 0 ? posts.map((post: any) => (
            <PostPreview  key={post.slug} postData={post} />
            )): <div className="flex justify-center"><p>No posts yet</p></div>}
        </div>
      </div>
    </div>
  );
}

export default BlogPostFullList;
