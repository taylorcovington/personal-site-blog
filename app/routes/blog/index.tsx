import BlogPostFullList from '../../components/blog/BlogPostFullList';
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node"
import * as postOne from './how-i-built-this-blog.mdx'
import * as postTwo from './five-soft-skills.mdx'
import * as postThree from './increase-productivity-in-5-steps.mdx'

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  }
}

export const loader: LoaderFunction = () => {
  return [
    postFromModule(postOne), 
    postFromModule(postTwo),
    postFromModule(postThree)
  ]
}

export default function BlogIndex() {
  const posts = useLoaderData()
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