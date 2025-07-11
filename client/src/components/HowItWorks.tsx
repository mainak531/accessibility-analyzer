const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 px-6 bg-gray-50 dark:bg-neutral-950 text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        How It Works
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Get started in seconds. Our tool is designed to make accessibility checks simple and effective.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Step 1 */}
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition">
          <div className="text-3xl font-bold text-blue-600 mb-4">1</div>
          <h3 className="text-xl font-semibold mb-2">Enter Your URL</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Provide your website link or upload your HTML file to start the analysis.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition">
          <div className="text-3xl font-bold text-blue-600 mb-4">2</div>
          <h3 className="text-xl font-semibold mb-2">Run Analysis</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our tool scans your webpage for accessibility issues like contrast errors, missing alt text, and ARIA violations.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition">
          <div className="text-3xl font-bold text-blue-600 mb-4">3</div>
          <h3 className="text-xl font-semibold mb-2">View Report</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Instantly receive a detailed report with issue highlights and actionable suggestions to improve your site's accessibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
