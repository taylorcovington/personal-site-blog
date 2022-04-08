import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node"
import LatestPosts from "~/components/blog/LatestPosts";
import Hero from "~/components/Hero";
import * as firstPost from './blog/first-post.mdx'
import * as secondPost from './blog/second-post.mdx'
import * as thirdPost from './blog/third-post.mdx'
import FeatureList from '../components/FeatureList';
import TrustedBy from '../components/TrustedBy';
import ContactMe from '../components/Contact';
import AboutMe from "~/components/AboutMe";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  }
}

export const loader: LoaderFunction = () => {
  return [postFromModule(firstPost), postFromModule(secondPost),postFromModule(thirdPost)]
}

export default function Index() {
  const posts = useLoaderData()
  return (
    <>
      <Hero />
      <LatestPosts posts={posts}/>
      <FeatureList />
      {/* <AboutMe /> */}
      <TrustedBy />
      <ContactMe />
    </>
  );
}
