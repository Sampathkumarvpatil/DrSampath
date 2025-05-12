
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/utils/SectionTitle";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const About = () => {
  // Personal details
  const personalInfo = {
    name: "Dr. Sampath V. Patil",
    title: "GenAI Principal Lead & Business Unit Head",
    bio: "I am a visionary AI/ML leader with multiple doctoral qualifications and a record of groundbreaking achievements in artificial intelligence. My expertise spans AI architecture, rapid application development, and business unit leadership. I specialize in creating innovative solutions that leverage the power of generative AI to transform businesses and industries.",
    vision: "My vision is to democratize AI technology by making sophisticated artificial intelligence accessible and impactful for organizations of all sizes. I believe in using AI as a force multiplier for human creativity and problem-solving capabilities.",
    philosophy: "I approach technology leadership with a philosophy that balances innovation with practical implementation. My work is guided by a commitment to ethical AI development and a focus on creating solutions that deliver measurable business value while pushing the boundaries of what's possible.",
    expertise: [
      "GenAI Implementation",
      "AI/ML Architecture", 
      "Rapid Application Development", 
      "Business Unit Management", 
      "Innovation Leadership",
      "AI Meeting Superagent Development"
    ],
    interests: [
      "Emerging AI Technologies",
      "Neural Network Architectures",
      "Ethical AI Development",
      "Productivity Enhancement Systems",
      "AI in Business Transformation"
    ]
  };

  // Education summary
  const educationSummary = [
    "Honorary Doctorate in AI-Driven Engineering Leadership (2024)",
    "Honorary Doctorate in AI & Research (2023)",
    "Ph.D. in AI and Machine Learning (2019)",
    "M.Tech (2014)",
    "B.E. in Electrical and Electronics Engineering (2012)"
  ];

  // Career highlights
  const careerHighlights = [
    "Achieved world record for creating 35 AI-assisted news channels, 100+ apps, and 2500+ blogs in 3 months",
    "Developed the world's first AI Meeting Superagent",
    "Led multiple business units focused on AI innovation",
    "Pioneered rapid application development methodologies",
    "Received Indian Achievers Award for AI/ML solutions"
  ];

  // Contact information
  const contactInfo = {
    email: "contact@example.com",
    phone: "+1 (234) 567-890",
    social: [
      { name: "LinkedIn", icon: <FaLinkedin className="w-5 h-5" />, href: "#" },
      { name: "Twitter", icon: <FaTwitter className="w-5 h-5" />, href: "#" },
      { name: "GitHub", icon: <FaGithub className="w-5 h-5" />, href: "#" },
    ]
  };

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
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Vision, philosophy, and expertise
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 blur-xl opacity-20 animate-pulse-slow"></div>
                <img
                  src="https://images.unsplash.com/photo-1610631066894-62452ccb927c"
                  alt="Dr. Sampath V. Patil"
                  className="relative z-10 rounded-full object-cover w-full h-full border-4 border-primary-400"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{personalInfo.name}</h2>
              <h3 className="text-xl md:text-2xl text-primary-600 font-medium mb-6">{personalInfo.title}</h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {personalInfo.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                {contactInfo.social.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.href}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform.icon}
                  </a>
                ))}
                <Link
                  to="/contact"
                  className="px-6 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="MY APPROACH"
            title="Vision & Philosophy"
            description="The core principles and vision that guide my professional journey."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-8 shadow-soft-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {personalInfo.vision}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-3">Strategic Goals:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Democratize access to advanced AI technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Bridge the gap between research and practical implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Accelerate digital transformation through AI innovation</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-8 shadow-soft-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Philosophy</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {personalInfo.philosophy}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-3">Core Principles:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Ethical AI development with human-centered design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Balance innovation with practical business application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-gray-700">Continuous learning and knowledge sharing</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career & Education Overview */}
      <section className="py-16 bg-light-dark">
        <div className="container">
          <SectionTitle
            subtitle="BACKGROUND"
            title="Career & Education"
            description="A summary of my professional journey and academic background."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-soft-lg hover-lift"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Career Highlights</h3>
              <ul className="space-y-4">
                {careerHighlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start bg-light p-4 rounded-lg"
                  >
                    <span className="text-primary-500 font-bold mr-2">{index + 1}.</span>
                    <span className="text-gray-700">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Link to="/experience" className="btn btn-primary">
                  View Full Experience
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-soft-lg hover-lift"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Education Summary</h3>
              <ul className="space-y-4">
                {educationSummary.map((edu, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start bg-light p-4 rounded-lg"
                  >
                    <span className="text-primary-500 font-bold mr-2">•</span>
                    <span className="text-gray-700">{edu}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Link to="/education" className="btn btn-primary">
                  View Full Education
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="BEYOND WORK"
            title="Research Interests"
            description="Areas of technology and innovation that I'm particularly passionate about."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {personalInfo.interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light rounded-xl p-6 text-center shadow-soft-lg hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary-500 rounded-lg transform rotate-45"></div>
                </div>
                <h3 className="font-bold mb-2">{interest}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Collaborate?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            I'm always open to discussing innovative projects, consulting opportunities, or speaking engagements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-light hover:text-primary-800">
              Get in Touch
            </Link>
            <Link to="/projects" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700">
              View My Work
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
      