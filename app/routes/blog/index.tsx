import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node"

import * as firstPost from './first-post.mdx'
import BlogPostFullList from '../../components/blog/BlogPostFullList';

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  }
}

export const loader: LoaderFunction = () => {
  return [postFromModule(firstPost)]
}

export default function BlogIndex() {
  const posts = useLoaderData()
  return (
    <>
    {posts && (
      <BlogPostFullList
      heading="Welcome to my blog"
      subheading="You'll find posts about full-stack development, career tips, and dev resources."
      posts={posts}
      archiveUrl="/archive/"
    />
    )}
    </>
  )
}