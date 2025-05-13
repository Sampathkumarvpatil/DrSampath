
import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const navigation = {
    main: [
      { name: "Home", to: "/" },
      { name: "Education", to: "/education" },
      { name: "Achievements", to: "/achievements" },
      { name: "Experience", to: "/experience" },
      { name: "Projects", to: "/projects" },
      { name: "Blog", to: "/blog" },
      { name: "Contact", to: "/contact" },
    ],
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/dr-sampathkumar-v-patil-80a6941b2", icon: <FaLinkedin /> },
      { name: "Facebook", href: "https://www.facebook.com/share/16bX5FpvGL/?mibextid=wwXIfr", icon: <FaTwitter /> },
      { name: "GitHub", href: "#", icon: <FaGithub /> },
      { name: "Email", href: "mailto:drsampathkumarpatil@gmail.com", icon: <FaEnvelope /> },
      { name: "Phone", href: "tel:+919353391603", icon: <FaPhone /> },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-xl font-serif font-bold text-white">
              Dr. Sampath V. Patil
            </Link>
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              GenAI Principal Lead & Business Unit Head with expertise in AI/ML architecture,
              rapid application development, and innovative solutions.
            </p>
            <div className="mt-8 flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-base font-medium text-white mb-4">More</h3>
            <ul className="space-y-3">
              {navigation.main.slice(4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-medium text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 flex-shrink-0 text-primary-400" />
                <span>drsampathkumarpatil@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 flex-shrink-0 text-primary-400" />
                <span>+919353391603</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 text-center">
            &copy; {currentYear} Dr. Sampath V. Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
      