
import { format } from "date-fns";
import { Link } from "@remix-run/react";
import { IBlogPost } from '../../interfaces/interfaces';

interface PostPreviewProps {
  postData: IBlogPost;
}

export default function PostPreview({ postData }: PostPreviewProps) {
  const { image, title, description, author, uploadDate, readTime, slug, tags } = postData;
  console.log("tags; ", tags)
  return (
    <Link to={`/blog/${slug}`}>
      <div
        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex-shrink-0">
        <img
              src={image}
              className="h-48 w-full object-cover"
              alt={'trees'}
            />
          {/* {mainImage && mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto("format")
                .url()}
              className="h-48 w-full object-cover"
              alt={mainImage.alt}
            />
          )} */}
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="flex flex-row ">
              {/* {categories.map((category) => (
                <p
                  key={category.title}
                  className="text-sm font-medium text-indigo-600 mr-2"
                >
                  <a
                    // href={post.category.href}
                    className="hover:underline"
                  >
                    {category.title}
                  </a>
                </p>
              ))} */}
            </div>
            <div className="flex mb-3 gap-2">
             {/* @ts-ignore */}
           {tags.map(tag => (
                   <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    {tag}
                 </span>
                ))}
          </div>
            <a
              // href={post.href}
              className="block mt-2"
            >
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="mt-3 text-base text-gray-500">{description}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a
              // href={post.author.href}
              >
                <span className="sr-only">{author}</span>

                {/* <img
                  className="h-10 w-10 rounded-full"
                  src={imageUrlFor(buildImageObj(authorImage))
                    .width(600)
                    .height(Math.floor((9 / 16) * 600))
                    .auto("format")
                    .url()}
                  alt=""
                /> */}
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a
                  // href={post.author.href}
                  className="hover:underline"
                >
                  {author}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                {/* <time dateTime={post.datetime}>{post.date}</time> */}
                <time dateTime={uploadDate}>
                  {format(new Date(uploadDate), "MMMM Mo, yyyy")}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{readTime} min read</span>
              
              </div>
            </div>
             
          </div>
        </div>
      </div>
    </Link>
  );
};