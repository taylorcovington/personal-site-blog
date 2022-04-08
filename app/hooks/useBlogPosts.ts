import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node"
import * as firstPost from './blog/first-post.mdx'
import * as secondPost from './blog/second-post.mdx'
import * as thirdPost from './blog/third-post.mdx'

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  }
}

export const loader: LoaderFunction = () => {
  return [postFromModule(firstPost), postFromModule(secondPost),postFromModule(thirdPost)]
}

export default function useBlogPosts() {
  const posts = useLoaderData()

  return posts
}