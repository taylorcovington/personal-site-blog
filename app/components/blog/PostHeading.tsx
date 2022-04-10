
interface PostHeadingProps {
  title: string;
  tag?: string;
}

export default function PostHeading({ tag, title = "" }: PostHeadingProps) {
 return (
  <h1>
  <span className="block text-base text-center text-[#00AEEF] font-semibold tracking-wide uppercase">
    {tag}
  </span>
  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    {title}
  </span>
</h1>
 )
}