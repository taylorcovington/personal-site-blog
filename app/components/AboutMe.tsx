import photo from '../../public/images/tc_mob_sm.jpg'

const aboutMe = [
  "Hi there! I'm Taylor Covington, a full-time Software Engineer and Indie Maker.",
  "I currently work as a Software Engineer for an enterprise application with a large team. On a daily basis I work with React, Apollo/GraphQL, and MUI to build software people love.",
  "My passion lies in building startups. From production ideation, validation, then to development and marketing. I love the end to end process and building things that impact peoples lives.",
  "I also enjoy fitness and learning how I can increase productivity.",
]

const AboutMe = () => {
  return (
    <div id="about" className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-1">
            <div className="text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none flex justify-center">
                  <img
                    className="rounded-full shadow-lg object-cover object-center"
                    src={photo}
                    alt="profile"
                    width={400}
                    height={400}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base max-w-prose lg:grid lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base text-[#00AEEF] font-semibold tracking-wide uppercase">
                  About
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Who am I?
                </h3>
              </div>
            </div>
            <div
              className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-2"
            >
              {aboutMe.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
