
interface BlogHeadingProps {
  heading: string;
  subheading: string;
}

export default function BlogHeading(props: BlogHeadingProps) {
  const { heading, subheading } = props;  
  return (
    <div className="text-center">
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        {heading}
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        {subheading}
      </p>
    </div>
  );
};
