
import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/utils/SectionTitle";
import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook, FaGithub, FaMapMarkerAlt, FaCalendarAlt, FaPaperPlane, FaCheck, FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    purpose: "collaboration"
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    // For this demo, we'll simulate a successful submission
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you! Your message has been sent successfully. I'll be in touch soon."
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        purpose: "collaboration"
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary-600 text-xl" />,
      title: "Email",
      value: "drsampathkumarpatil@gmail.com",
      link: "mailto:drsampathkumarpatil@gmail.com"
    },
    {
      icon: <FaPhone className="text-primary-600 text-xl" />,
      title: "Phone",
      value: "+919353391603",
      link: "tel:+919353391603"
    },
    {
      icon: <FaMapMarkerAlt className="text-primary-600 text-xl" />,
      title: "Location",
      value: "Karnataka, India",
      link: null
    },
    {
      icon: <FaCalendarAlt className="text-primary-600 text-xl" />,
      title: "Availability",
      value: "Open for consulting and speaking engagements",
      link: null
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin className="text-2xl" />, href: "https://www.linkedin.com/in/dr-sampathkumar-v-patil-80a6941b2", color: "bg-[#0077B5]" },
    { name: "Facebook", icon: <FaFacebook className="text-2xl" />, href: "https://www.facebook.com/share/16bX5FpvGL/?mibextid=wwXIfr", color: "bg-[#1877F2]" },
    { name: "GitHub", icon: <FaGithub className="text-2xl" />, href: "#", color: "bg-[#333333]" },
  ];

  const purposeOptions = [
    { value: "collaboration", label: "Project Collaboration" },
    { value: "consulting", label: "Consulting Services" },
    { value: "speaking", label: "Speaking Engagement" },
    { value: "question", label: "General Question" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark to-dark-light overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="grid-bg absolute inset-0"></div>
        </div>

        <div className="container relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Let's discuss how we can collaborate on your next AI project
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-xl shadow-soft-lg">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                {formStatus.submitted && (
                  <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    <div className="flex items-center">
                      {formStatus.success ? (
                        <FaCheck className="mr-2 text-green-500" />
                      ) : (
                        <FaExclamationCircle className="mr-2 text-red-500" />
                      )}
                      <p>{formStatus.message}</p>
                    </div>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                      Purpose of Contact
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    >
                      {purposeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" /> Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white p-8 rounded-xl shadow-soft-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start mb-5">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-primary-600 hover:text-primary-800 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-soft-lg">
                <h2 className="text-2xl font-bold mb-6">Connect Online</h2>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-4 rounded-full hover:opacity-90 transition-opacity`}
                      aria-label={`Connect on ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consulting & Speaking Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="SERVICES"
            title="Consulting & Speaking"
            description="Available for specialized consulting services and speaking engagements worldwide."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl overflow-hidden shadow-soft-lg"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Consulting Services</h3>
                <p className="text-gray-600 mb-6">
                  Specialized consulting in AI/ML architecture, rapid application development, and 
                  AI-driven business transformation. Tailored solutions to meet your specific needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">AI Strategy Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Technology Architecture Review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Implementation Oversight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Team Training & Development</span>
                  </li>
                </ul>
                <button className="btn btn-primary">
                  Inquire About Consulting
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl overflow-hidden shadow-soft-lg"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Speaking Engagements</h3>
                <p className="text-gray-600 mb-6">
                  Available for keynotes, panel discussions, and workshops on AI innovation, rapid 
                  development methodologies, and the future of technology.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Industry Conferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Corporate Events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Educational Institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Technical Workshops</span>
                  </li>
                </ul>
                <button className="btn btn-primary">
                  Book a Speaking Engagement
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light-dark">
        <div className="container">
          <SectionTitle
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions about collaboration and services."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg"
            >
              <h3 className="text-xl font-bold mb-3">What types of projects do you work on?</h3>
              <p className="text-gray-600">
                I specialize in AI/ML architecture, rapid application development, and innovative 
                solutions across multiple industries. My expertise is particularly valuable for 
                organizations looking to implement cutting-edge AI technologies or accelerate 
                their development processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg"
            >
              <h3 className="text-xl font-bold mb-3">How do your consulting services work?</h3>
              <p className="text-gray-600">
                My consulting services begin with an initial assessment to understand your specific 
                needs and challenges. From there, I develop a tailored approach that may include 
                strategy development, architecture design, implementation guidance, and team training.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg"
            >
              <h3 className="text-xl font-bold mb-3">Are you available for remote work?</h3>
              <p className="text-gray-600">
                Yes, I work with clients globally through remote collaboration. Using modern communication 
                and project management tools, I can provide the same level of expertise and service 
                regardless of location.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg"
            >
              <h3 className="text-xl font-bold mb-3">What is your typical response time?</h3>
              <p className="text-gray-600">
                I typically respond to inquiries within 24-48 hours. For ongoing projects, I maintain 
                regular communication schedules based on project needs and client preferences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your AI Strategy?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto text-light-dark"
          >
            Let's collaborate to bring innovative AI solutions to your organization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="#" className="btn bg-white text-primary-700 hover:bg-light-dark hover:text-primary-800">
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
      