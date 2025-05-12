
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaChevronDown } from "react-icons/fa";
import SectionTitle from "../components/utils/SectionTitle";
import AnimatedCounter from "../components/utils/AnimatedCounter";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark to-dark-light overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent"></div>
          <div className="grid-bg absolute inset-0"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 text-center md:text-left text-white"
            >
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-primary-400 text-lg md:text-xl mb-2"
              >
                Welcome to my portfolio
              </motion.h4>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                Dr. Sampath V. Patil
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl md:text-3xl font-medium mb-6 text-gradient"
              >
                GenAI Principal Lead & Business Unit Head
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-300 text-lg max-w-lg mb-8"
              >
                AI/ML innovation leader with multiple doctoral qualifications and a record of
                breakthrough technologies. Specializing in AI Meeting Superagent and rapid application development.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap justify-center md:justify-start gap-4"
              >
                <Link
                  to="/contact"
                  className="btn btn-primary"
                >
                  Contact Me
                </Link>
                <Link
                  to="/projects"
                  className="btn btn-outline text-white border-white hover:bg-white hover:text-dark"
                >
                  View Portfolio
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex mt-8 justify-center md:justify-start space-x-4"
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-xl"
                >
                  <FaTwitter />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 blur-xl opacity-20 animate-pulse-slow"></div>
                <img
                  src="https://images.unsplash.com/photo-1610631066894-62452ccb927c"
                  alt="Dr. Sampath V. Patil"
                  className="relative z-10 rounded-full object-cover w-full h-full border-4 border-primary-400"
                />
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white cursor-pointer hover:text-primary-400 transition-colors"
            >
              <FaChevronDown size={24} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={35} prefix="" suffix="+" />
              </h3>
              <p className="text-gray-600">News Channels</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={100} prefix="" suffix="+" />
              </h3>
              <p className="text-gray-600">Applications</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={2500} prefix="" suffix="+" />
              </h3>
              <p className="text-gray-600">Blogs Published</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={3} prefix="" suffix="" />
              </h3>
              <p className="text-gray-600">Months Timeline</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Summary Section */}
      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container">
          <SectionTitle
            subtitle="ACADEMIC EXCELLENCE"
            title="Exceptional Educational Background"
            description="With multiple doctoral qualifications and consistently stellar academic performance, my educational journey reflects a commitment to excellence and innovation."
            light={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl hover-lift"
            >
              <h3 className="text-xl font-bold mb-2">Honorary Doctorate in AI-Driven Engineering Leadership</h3>
              <p className="text-light-dark mb-4">Human Rights Council (Govt. of India Approved), 2024</p>
              <p className="text-sm">Recognized for outstanding innovation leadership in the field of AI.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl hover-lift"
            >
              <h3 className="text-xl font-bold mb-2">Honorary Doctorate in AI & Research</h3>
              <p className="text-light-dark mb-4">Iconic Peace Council, 2023</p>
              <p className="text-sm">Awarded for distinguished research contributions in artificial intelligence.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl hover-lift"
            >
              <h3 className="text-xl font-bold mb-2">Ph.D. in AI and Machine Learning</h3>
              <p className="text-light-dark mb-4">University Name, 2015-2019</p>
              <p className="text-sm">Youngest Ph.D. holder in the field, with groundbreaking research in AI applications.</p>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/education" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-700">
              View Complete Education
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Spotlight */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="RECORD BREAKING"
            title="Outstanding Achievements"
            description="Setting new standards with world records and innovations that transform how we interact with AI technology."
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl overflow-hidden shadow-soft-lg"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2"
                  alt="World Record Achievement"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full">World Record</span>
                  <span className="ml-2 text-gray-400 text-sm">2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Unprecedented AI-Assisted Content Creation</h3>
                <p className="text-gray-600 mb-4">
                  Created 35 AI-assisted news channels, 100+ applications, and 2500+ blogs in just 3 months, 
                  setting a new standard for AI-powered productivity.
                </p>
                <Link to="/achievements" className="text-primary-600 hover:text-primary-800 font-medium flex items-center">
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl overflow-hidden shadow-soft-lg"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557264337-e8a93017fe92"
                  alt="AI Meeting Superagent"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-800 text-xs font-semibold rounded-full">Innovation</span>
                  <span className="ml-2 text-gray-400 text-sm">2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">World's First AI Meeting Superagent</h3>
                <p className="text-gray-600 mb-4">
                  Developed a revolutionary AI system that can participate in meetings autonomously, 
                  taking notes, summarizing key points, and even responding to queries in real-time.
                </p>
                <Link to="/achievements" className="text-primary-600 hover:text-primary-800 font-medium flex items-center">
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/achievements" className="btn btn-primary">
              View All Achievements
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-16 bg-light-dark">
        <div className="container">
          <SectionTitle
            subtitle="PROFESSIONAL JOURNEY"
            title="Leadership Experience"
            description="A track record of driving innovation and leading high-performing teams across multiple organizations."
          />

          <div className="mt-10 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>

            {/* Experience items */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-xl shadow-soft-lg">
                    <h3 className="text-xl font-bold">Business Unit Head & GenAI Principal Lead</h3>
                    <p className="text-primary-600 mb-2">Ciklum</p>
                    <p className="text-gray-500 text-sm mb-3">Feb 2024 - Present</p>
                    <p className="text-gray-600">
                      Leading strategic direction for GenAI solutions and managing business unit operations.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-10 h-10 rounded-full bg-primary-100 border-4 border-white flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-primary-600"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:block w-10 h-10 rounded-full bg-primary-100 border-4 border-white flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-primary-600"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <div className="bg-white p-6 rounded-xl shadow-soft-lg">
                    <h3 className="text-xl font-bold">Business Unit Head & GenAI Principal Lead</h3>
                    <p className="text-primary-600 mb-2">Infogen Labs</p>
                    <p className="text-gray-500 text-sm mb-3">Oct 2021 - Jan 2024</p>
                    <p className="text-gray-600">
                      Led business unit operations & GenAI initiatives, driving innovation and growth.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-10 text-center">
              <Link to="/experience" className="btn btn-primary">
                View Full Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Interested in collaboration or consultation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            Let's discuss how my expertise in AI/ML architecture and rapid application development can benefit your projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-light hover:text-primary-800 focus:ring-white">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
      