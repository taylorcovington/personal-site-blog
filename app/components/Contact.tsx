import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

const ContactMe = () => {
  return (
    <div id="contactMe" className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Work with me
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Looking to hire a developer for a project? In need of a mentor?
              I'd be happy to hop on a call to chat more about it.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+1 (801) 792-6827</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">taylor@flexedapps.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              method="post"
              name="contact-form"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="grid grid-cols-1 gap-y-6"
              // @ts-ignore
              netlify="true"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#00AEEF] focus:border-[#00AEEF] border-gray-300 rounded-md"
                placeholder="Full name"
              />
              <input
                type="email"
                name="email"
                autoComplete="name"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#00AEEF] focus:border-[#00AEEF] border-gray-300 rounded-md"
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#00AEEF] focus:border-[#00AEEF] border-gray-300 rounded-md"
                placeholder="Phone"
              />
              <textarea
                name="message"
                rows={4}
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#00AEEF] focus:border-[#00AEEF] border border-gray-300 rounded-md"
                placeholder="Message"
              />
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#00AEEF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00AEEF]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
