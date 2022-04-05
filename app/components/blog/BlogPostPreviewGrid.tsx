import { Key } from "react";
import { IBlogPost } from "~/interfaces/interfaces";
import BlogHeading from "./BlogHeading";
import PostPreview from "./PostPreview";

interface BlogPostPreviewProps {
  heading: string;
  subheading: string;
  posts: any;
}

export default function BlogPostPreviewGrid(props: BlogPostPreviewProps) {
  const { heading, subheading, posts = [] } = props;
  console.log('posts: ', posts)
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <BlogHeading heading={heading} subheading={subheading} />
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post: IBlogPost) => {
            return <PostPreview key={post.slug} postData={post} />;
          })}
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
  )
}