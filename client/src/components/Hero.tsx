const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 dark:text-white">
        Accessibility Analyzer
      </h1>
      <p className="mt-4 text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl">
        Instantly check and improve your website’s accessibility. Find issues like contrast, font sizes, alt text, and more with one click.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#get-started"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          aria-label="Get started with Accessibility Analyzer"
        >
          Get Started
        </a>
        <a
          href="#learn-more"
          className="px-6 py-3 border border-gray-500 dark:border-gray-400 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Learn more about Accessibility Analyzer"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
