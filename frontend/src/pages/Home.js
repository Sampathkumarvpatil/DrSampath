import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaChevronDown,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import SectionTitle from "../components/utils/SectionTitle";
import AnimatedCounter from "../components/utils/AnimatedCounter";

const Home = () => {
  // Personal details
  const personalInfo = {
    name: "Dr.Sampath.V.Patil",
    title: "Sr.Product Manager| GenAI Principal Lead | R&D Business Unit Head",
    bio:
      "Senior Product Manager with unique expertise in AI/ML and doctoral credentials, specializing in building data-driven product strategies and leading cross-functional teams. Proven track record in product roadmap development, user-centric design, and leveraging AI technologies to create innovative products that deliver exceptional user experiences. Expert in transforming complex AI capabilities into market-ready products with measurable business impact.",
    vision:
      "My vision is to bridge the gap between cutting-edge AI technology and user needs by creating products that seamlessly integrate sophisticated AI capabilities into intuitive, user-friendly experiences. I believe in democratizing AI through thoughtful product design that makes advanced technology accessible to everyone.",
    philosophy:
      "I approach product management with a data-driven philosophy that prioritizes user needs while leveraging my deep technical AI background to identify unique product opportunities. My work focuses on creating products that not only solve real problems but also push the boundaries of what's possible through intelligent automation and AI-powered features.",
    expertise: [
      "Product Strategy & Roadmapping",
      "Cross-Functional Team Leadership",
      "Data-Driven Product Decisions",
      "AI-Powered Product Development",
      "User Experience & Design Thinking",
      "Stakeholder Management",
      "Market Research & Competitive Analysis",
      "Product Lifecycle Management",
      "GenAI Product Integration",
      "Agile Product Development",
    ],
  };

  // Contact information
  const contactInfo = {
    email: "drsampathkumarpatil@gmail.com",
    phone: "+919353391603",
    social: [
      {
        name: "LinkedIn",
        icon: <FaLinkedin className="text-xl" />,
        href: "https://www.linkedin.com/in/dr-sampathkumar-v-patil-80a6941b2",
      },
      {
        name: "Facebook",
        icon: <FaFacebook className="text-xl" />,
        href: "https://www.facebook.com/share/16bX5FpvGL/?mibextid=wwXIfr",
      },
    ],
  };

  // Video player functionality
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const containerElement = videoContainerRef.current;

    const handlePlay = () => {
      if (containerElement) {
        containerElement.classList.add('playing');
      }
    };

    const handlePause = () => {
      if (containerElement) {
        containerElement.classList.remove('playing');
      }
    };

    const handleEnded = () => {
      if (containerElement) {
        containerElement.classList.remove('playing');
      }
    };

    if (videoElement) {
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);
      videoElement.addEventListener('ended', handleEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
        videoElement.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark to-dark-light overflow-hidden">
        {/* Background overlays */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent" />
          <div className="grid-bg absolute inset-0" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
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
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 whitespace-nowrap"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl font-medium mb-6 text-gradient"
              >
                Sr.Product Manager| GenAI Principal Lead | <span className="whitespace-nowrap">R&D Business Unit Head</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-300 text-lg max-w-lg mb-8"
              >
                {personalInfo.bio}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap justify-center md:justify-start gap-4"
              >
                <Link to="/contact" className="btn btn-primary">
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
                {contactInfo.social.map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {platform.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Video Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
            >
              <div className="relative w-full max-w-xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 blur-xl opacity-20 animate-pulse-slow rounded-xl" />
                <div className="relative video-container rounded-xl overflow-hidden shadow-2xl" style={{ maxWidth: '550px', maxHeight: '310px' }} ref={videoContainerRef}>
                  <div className="aspect-w-16">
                    <video
                      ref={videoRef}
                      src="https://aimeetingsuperagent.s3.eu-north-1.amazonaws.com/drsam.mp4"
                      alt="Dr. Sampath V. Patil - AI Technology"
                      className="relative z-10 w-full h-full object-cover border-2 border-primary-400"
                      playsInline
                      onClick={(e) => {
                        if (videoRef.current.paused) {
                          videoRef.current.play();
                        } else {
                          videoRef.current.pause();
                        }
                      }}
                    />
                  </div>
                  <div className="play-button-overlay" onClick={() => videoRef.current.play()}>
                    <div className="play-button">
                      <div className="play-icon"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
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
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <SectionTitle
            subtitle="ABOUT ME"
            title="Vision & Philosophy"
            description="The core principles and vision that guide my professional journey."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-soft-lg hover-lift"
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
              className="bg-white rounded-xl p-8 shadow-soft-lg hover-lift"
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
          
          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-soft-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Areas of Expertise</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {personalInfo.expertise.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-6 py-3 bg-primary-100 text-primary-800 rounded-full text-base font-medium hover-lift"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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
              <p className="text-gray-600">AI News Broadcasts</p>
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
              <p className="text-gray-600">AI Product Features</p>
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
              <p className="text-gray-600">Product Content Pieces</p>
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
              <p className="text-gray-600">Months Product Cycle</p>
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
              <h3 className="text-xl font-bold mb-2">Ph.D. in AI and Machine Learning</h3>
              <p className="text-light-dark mb-4">VTU University, Belgaum, Karnataka, 2015-2019</p>
              <p className="text-sm">Youngest Ph.D. holder in the field, with groundbreaking research in AI applications.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl hover-lift"
            >
              <h3 className="text-xl font-bold mb-2">Honorary Doctorate in AI & Research</h3>
              <p className="text-light-dark mb-4">Iconic Peace Council (Govt. of India), 2023</p>
              <p className="text-sm">Awarded for distinguished research contributions in artificial intelligence.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl hover-lift"
            >
              <h3 className="text-xl font-bold mb-2">Honorary Doctorate in AI-Driven Engineering Leadership</h3>
              <p className="text-light-dark mb-4">Human Rights Council (Govt. of India Approved), 2024</p>
              <p className="text-sm">Recognized for outstanding innovation leadership in the field of AI.</p>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/education" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-700">
              View Complete Education
            </Link>
          </div>
        </div>
      </section>

      {/* PhD Certificates Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container">
          <SectionTitle
            subtitle=""
            title="DOCTORAL QUALIFICATIONS"
            description="My academic journey and achievements in Artificial Intelligence research and education."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-soft-xl hover-lift transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64 bg-primary-50 p-4 flex items-center justify-center">
                <img
                  src="https://phdcertificates.s3.eu-north-1.amazonaws.com/vtu+phd-1_page-0001.jpg"
                  alt="Ph.D. in AI and Machine Learning"
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 text-xs font-bold rounded-bl-md">
                  2019
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-800">Ph.D. in AI and Machine Learning</h3>
                <p className="text-gray-600 text-sm mb-3">Official doctoral degree from VTU University, recognizing my research and contributions in the field of Artificial Intelligence and Machine Learning.</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="font-medium text-primary-700">VTU University</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-soft-xl hover-lift transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64 bg-secondary-50 p-4 flex items-center justify-center">
                <img
                  src="https://phdcertificates.s3.eu-north-1.amazonaws.com/phd2.jpeg"
                  alt="Honorary Doctorate in AI & Research"
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-secondary-600 text-white px-3 py-1 text-xs font-bold rounded-bl-md">
                  2023
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary-800">Honorary Doctorate in AI & Research</h3>
                <p className="text-gray-600 text-sm mb-3">Honorary doctorate awarded by the Iconic Peace Council (Govt. of India), recognizing contributions to AI research and its application for societal improvement.</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="font-medium text-secondary-700">Iconic Peace Council</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-soft-xl hover-lift transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64 bg-gray-50 p-4 flex items-center justify-center">
                <img
                  src="https://phdcertificates.s3.eu-north-1.amazonaws.com/phd3.jpg"
                  alt="Honorary Doctorate in AI-Driven Engineering Leadership"
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-gray-800 text-white px-3 py-1 text-xs font-bold rounded-bl-md">
                  2024
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Honorary Doctorate in AI-Driven Engineering Leadership</h3>
                <p className="text-gray-600 text-sm mb-3">Honorary doctorate awarded by the Human Rights Council (Govt. of India Approved), acknowledging leadership in engineering with AI-driven solutions.</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="font-medium text-gray-700">Human Rights Council</span>
                </div>
              </div>
            </motion.div>
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
                <h3 className="text-xl font-bold mb-3">Unprecedented AI Product Launch</h3>
                <p className="text-gray-600 mb-4">
                  Led the strategic development and launch of 35 AI-powered product features, managed 100+ product requirements, and coordinated 2500+ pieces of product content in just 3 months, 
                  demonstrating exceptional product velocity and cross-functional leadership.
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
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-800 text-xs font-semibold rounded-full">Product Innovation</span>
                  <span className="ml-2 text-gray-400 text-sm">2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Revolutionary AI Meeting Product</h3>
                <p className="text-gray-600 mb-4">
                  Product managed the development of the world's first AI Meeting Superagent - a groundbreaking product that autonomously participates in meetings, 
                  demonstrating innovative product vision and successful go-to-market execution for cutting-edge AI solutions.
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

      {/* Contact Info */}
      <section className="py-16 bg-light">
        <div className="container">
          <SectionTitle
            subtitle="GET IN TOUCH"
            title="Contact Information"
            description="Let's discuss how we can collaborate on your next AI project."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg hover-lift text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FaEnvelope className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-800 transition-colors">
                {contactInfo.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg hover-lift text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FaPhone className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-primary-600 hover:text-primary-800 transition-colors">
                {contactInfo.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg hover-lift text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FaLinkedin className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Social Media</h3>
              <div className="flex justify-center space-x-4 mt-2">
                {contactInfo.social.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="btn btn-primary">
              Contact Me
            </Link>
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
            Let's discuss how my expertise in product strategy, AI-powered product development, and cross-functional team leadership can drive your product initiatives forward.
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
      
