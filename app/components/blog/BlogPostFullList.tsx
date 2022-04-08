import BlogHeading from "./BlogHeading";
import PostPreview from "./PostPreview";

interface BlogPostFullListProps {
  heading: string;
  subheading: string;
  posts: any;
  archiveUrl?: string;
}

function BlogPostFullList({ heading, subheading, posts, archiveUrl }: BlogPostFullListProps) {
  return (
    <div className="relative bg-gray-50 px-4 sm:px-6  lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <BlogHeading heading={heading} subheading={subheading} />
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {posts.map((post: any) => (
          <PostPreview key={post.slug} postData={post} />
        ))}
        </div>
      </div>
      {/* <Link to="/blog" className="pointer">
        Check out more posts
      </Link> */}
      {/* {archiveUrl && (
        <div className={styles.browseMoreNav}>
          <Link to="/blog" className="pointer">
            Check out more posts
          </Link>
        </div>
      )} */}
    </div>
  );
}

export default BlogPostFullList;
