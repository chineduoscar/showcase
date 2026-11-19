import { Link } from "react-router-dom";
import {
  FaUserPlus,
  FaLock,
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

const Home = () => {
  const features = [
    {
      icon: <FaUserPlus />,
      title: "Create an Account",
      description:
        "Register with your full name, email address and password. Experience a simple registration process.",
      link: "/register",
      action: "Create account",
    },
    {
      icon: <FaLock />,
      title: "Secure Login",
      description:
        "Test the login process using your registered email and password.",
      link: "/login",
      action: "Login to account",
    },
    {
      icon: <FaEnvelope />,
      title: "Contact Us",
      description:
        "Send us a message using our contact form and test how submissions work.",
      link: "/contact",
      action: "Send a message",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <FaBolt />
              Simple. Fast. Reliable.
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-8">
              Everything you need to be connected to
              <span className="text-blue-600"> Us</span>
            </h1>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
              Welcome to showcase, a simple platform designed to learn user
              registration, authentication and contact form submissions. Explore
              the features and see how everything works.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link
                to="/register"
                className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-3"
              >
                Get Started
                <FaArrowRight />
              </Link>

              <Link
                to="/login"
                className="bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Login to Account
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Easy Registration
              </span>

              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Simple Authentication
              </span>

              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Contact Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Our Features
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Explore what you can do
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Three simple features designed to give you a complete website
            testing experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-7">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mt-3 min-h-20">
                {feature.description}
              </p>

              <Link
                to={feature.link}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-7 hover:gap-3 transition-all"
              >
                {feature.action}
                <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-3xl px-8 py-16 md:py-20 text-center">
          <div className="w-14 h-14 bg-white/15 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl">
            <FaShieldAlt />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6">
            Ready to get started?
          </h2>

          <p className="text-blue-100 max-w-xl mx-auto mt-4 leading-relaxed">
            Create an account today and explore the features available on
            TestPortal.
          </p>

          <Link
            to="/register"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-3.5 rounded-xl font-semibold mt-8 hover:bg-gray-100 transition"
          >
            Create Your Account
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
