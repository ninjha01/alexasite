import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Alexa Reilly</title>
        <meta
          name="description"
          content="Medical Student at Kaiser Permanente"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col bg-white">
        <Hero />
        <ContentSection />
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex"></div>
              <h1 className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                Alexa Reilly
              </h1>
              <p className="mt-6 text-2xl leading-8 text-zinc-600">
                Medical Student at Kaiser Permanente
              </p>{" "}
              <p className="mt-4 text-lg leading-8 text-zinc-400">
                Interested in Neo-natology, OB/GYN, and Family Medicine
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/logo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const Divider = ({ text }: { text: string }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-lg font-medium text-gray-900">
          {text}
        </span>
      </div>
    </div>
  );
};

const ContentSection = () => {
  return (
    <div className="overflow-hidden bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <h2 className="text-lg font-semibold text-teal-600">Transactions</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            What makes us different
          </p>
        </div>
        <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
          <p className="text-lg text-gray-500">
            {`I received my B.A. from Tufts University in 2019, with a double major in biology and international relations. After graduating, I became interested in pursuing a career in healthcare and have since been working in public health research at Massachusetts General Hospital. This job allowed me to conduct one-on-one interviews in both English and Spanish with a huge range of amazing people who were receiving care at Mass General Brigham. The experience fortified my interest in learning about the unique story of each person with whom I spoke. Though I was working on great research that will help patients at Mass General Brigham in the future, I found myself wanting to connect with the people with whom I was working more deeply and to directly serve them through the difficult health situations that they described, rather than just collecting data for research.`}
            <p></p>
            {`As a medical student, I am passionate about providing comprehensive
          care to women and families throughout their lives. I am particularly
          interested in the fields of obstetrics and gynecology, neonatology,
          and family medicine. I believe that these specialties are key to
          providing holistic and compassionate care for patients. I am excited
          to explore and gain expertise in these areas, both in the classroom
          and in the clinical setting.`}
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-teal mx-auto text-gray-500 lg:max-w-none">
              <p>
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
              <ul role="list">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis
                tincidunt vel ultricies. Vulputate aliquet velit faucibus
                semper. Pellentesque in venenatis vestibulum consectetur nibh
                id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
                fermentum lacus in. Viverra.
              </p>
              <h3>We’re here to help</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et.
                Consectetur pretium in volutpat, diam. Montes, magna cursus
                nulla feugiat dignissim id lobortis amet. Laoreet sem est
                phasellus eu proin massa, lectus. Diam rutrum posuere donec
                ultricies non morbi. Mi a platea auctor mi.
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-5 py-3 text-base font-medium text-white hover:bg-teal-700"
                >
                  Contact sales
                </a>
              </div>
              <div className="ml-4 rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-teal-600 hover:bg-gray-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <blockquote className="relative rounded-lg bg-white shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img
                  src="https://tailwindui.com/img/logos/workcation-logo-teal-600-mark-gray-800-and-teal-600-text.svg"
                  alt="Workcation"
                  className="h-8"
                />
                <div className="relative mt-8 text-lg font-medium text-gray-700">
                  <svg
                    className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Tincidunt integer commodo, cursus etiam aliquam neque, et.
                    Consectetur pretium in volutpat, diam. Montes, magna cursus
                    nulla feugiat dignissim id lobortis amet. Laoreet sem est
                    phasellus eu proin massa, lectus.
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center rounded-b-lg bg-teal-600 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
                <span className="relative flex-none rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                  <img
                    className="h-12 w-12 rounded-full bg-teal-300 sm:h-20 sm:w-20"
                    src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                    alt=""
                  />
                </span>
                <span className="relative ml-4 font-semibold leading-6 text-teal-300 sm:ml-24 sm:pl-1">
                  <span className="font-semibold text-white sm:inline">
                    Judith Black
                  </span>{" "}
                  <span className="sm:inline">CEO at Workcation</span>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
