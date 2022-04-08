import LatestPosts from "~/components/blog/LatestPosts";
import Hero from "~/components/Hero";
import FeatureList from '../components/FeatureList';
import TrustedBy from '../components/TrustedBy';
import ContactMe from '../components/Contact';
import AboutMe from "~/components/AboutMe";
import useBlogPosts from '../hooks/useBlogPosts';

export default function Index() {
  const posts = useBlogPosts()

  return (
    <>
      <Hero />
      <LatestPosts posts={posts?.slice(0, 3)}/>
      <FeatureList />
      {/* <AboutMe /> */}
      <TrustedBy />
      <ContactMe />
    </>
  );
}
