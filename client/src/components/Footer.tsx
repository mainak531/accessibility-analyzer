const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side - Branding */}
        <div className="text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Accessibility Analyzer. All rights reserved.
          </p>
        </div>

        {/* Right Side - Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-600 dark:text-gray-400 text-sm"
          >
            GitHub
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-600 dark:text-gray-400 text-sm"
          >
            Next.js
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-600 dark:text-gray-400 text-sm"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
