import { IBlogPost } from "~/interfaces/interfaces";
import BlogHeading from "./BlogHeading";
import PostPreview from "./PostPreview";
import { Link } from "@remix-run/react";

// TODO need to update type for posts
interface BlogPostPreviewProps {
  heading: string;
  subheading: string;
  posts: any;
  archiveUrl?: string;
}

export default function BlogPostPreviewList(props: BlogPostPreviewProps) {
  const { heading, subheading, posts = [] } = props;
  return (
    <>
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <BlogHeading heading={heading} subheading={subheading} />
        {posts.length > 0 ? (
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post: IBlogPost) => {
              return <PostPreview key={post.slug} postData={post} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center"><p>No posts yet</p></div>
        )}
        <div className="flex justify-center mt-12">
          <Link to="/blog" className="text-base font-semibold text-cyan-600 hover:text-cyan-500">
            Check out more posts
          </Link>
        </div>
      </div>
    </div>
      </>
  )
}