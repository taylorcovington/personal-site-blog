import LatestPosts from "~/components/blog/LatestPosts";
import Hero from "~/components/Hero";
import FeatureList from '../components/FeatureList';
import TrustedBy from '../components/TrustedBy';
import ContactMe from '../components/Contact';
import AboutMe from "~/components/AboutMe";
import useBlogPosts from '../hooks/useBlogPosts';
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node"
import * as postOne from './blog/how-i-built-this-blog.mdx'
import * as postTwo from './blog/five-soft-skills.mdx'
import * as postThree from './blog/increase-productivity-in-5-steps.mdx'
import Testimonials from "~/components/Testimonials";
import Testimonial from "~/components/Testimonial";


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

export default function Index() {
  const posts = useLoaderData()

  return (
    <>
      <Hero />
      <LatestPosts posts={posts?.slice(0, 3)}/>
      <FeatureList />
      <AboutMe />
      <Testimonial />
      {/* <Testimonials /> */}
      {/* <TrustedBy /> */}
      <ContactMe />
    </>
  );
}
