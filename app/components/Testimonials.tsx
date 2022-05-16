import symplyLogo from '../../public/images/logo.png'

const testimonials = [
  {
    id: 1,
    company: 'Symply',
    name: 'Sharon Ikechi',
    title: 'Product Manager',
    quote: `I've had the pleasure of working with Taylor at Symply, his constant proactive communication and problem solving skills led him to grow from Software Engineer to Technical Project Lead.
      As a Product Manager, I benefitted greatly from his ability to think critically and get work done quickly and effectively.
      Anyone would be lucky to have Taylor on their team.`,
    img: "https://ca.slack-edge.com/TNTQM46HM-U01JR3KJK9C-4aefb5cf44c9-512",
    logo: symplyLogo

  },
  {
    id: 2,
    company: 'Symply',
    name: 'John Doe',
    title: 'CEO',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probata non erga?',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-800">
      <div className="text-center pt-10">
        <h2 className={`text-3xl tracking-tight font-extrabold text-white sm:text-4xl`}>
          What Others Say About Me
        </h2>
      </div>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        {testimonials.map(t => (
          <div key={t.id} className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10  lg:pr-16">
          <div className="md:flex-shrink-0">
            <img className="h-12" src={t.logo || "https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"} alt="Company Logo" />
          </div>
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-8 -translate-y-2 h-8 w-8 text-[#00AEEF]"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                {t.quote}
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={t.img || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">{t.name}</div>
                  <div className="text-base font-medium text-[#00AEEF]">{t.title}, {t.company}</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        ))}
      </div>
    </section>
  )
}