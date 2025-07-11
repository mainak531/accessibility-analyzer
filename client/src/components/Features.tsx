const Features = () => {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-white dark:bg-black text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        Key Features
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Instantly analyze your website for accessibility issues. Improve user
        experience and comply with accessibility standards.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Feature 1 */}
        <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-800 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Contrast Checker
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Detect low contrast text, backgrounds, and elements to ensure
            readability for everyone.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-800 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Alt Text Detection
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Verify that all images have descriptive alternative text for screen
            readers.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-800 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Heading Structure
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Check for proper heading order (H1 → H2 → H3) to improve document
            navigation and SEO.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-800 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Keyboard Navigation
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Ensure users can navigate your website entirely using the keyboard
            without issues.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-800 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            ARIA Roles Validation
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Check the presence and correctness of ARIA labels and roles for
            assistive technologies.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-800 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Live Accessibility Report
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Get an instant report highlighting detected issues with suggestions
            to fix them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
