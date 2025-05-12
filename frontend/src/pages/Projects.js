
import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/utils/SectionTitle";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRobot, FaNewspaper, FaMobileAlt, FaBrain, FaServer } from "react-icons/fa";

const Projects = () => {
  // Category filters
  const categories = [
    { name: "All", icon: <FaCode /> },
    { name: "AI Meeting Superagent", icon: <FaRobot /> },
    { name: "News Channels", icon: <FaNewspaper /> },
    { name: "Mobile Apps", icon: <FaMobileAlt /> },
    { name: "AI Systems", icon: <FaBrain /> },
    { name: "Backend Services", icon: <FaServer /> },
  ];

  // State for active filter
  const [activeCategory, setActiveCategory] = useState("All");

  // Projects data
  const projects = [
    {
      title: "AI Meeting Superagent",
      description: "World's first AI system that can autonomously participate in meetings, providing real-time insights, taking notes, and generating action items.",
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92",
      categories: ["AI Meeting Superagent", "AI Systems"],
      technologies: ["Natural Language Processing", "Machine Learning", "Speech Recognition", "Semantic Analysis"],
      links: [
        { label: "Demo", url: "#", icon: <FaExternalLinkAlt /> },
      ],
      featured: true,
    },
    {
      title: "Global News Network",
      description: "A suite of AI-assisted news channels covering international topics with automated content generation and distribution systems.",
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92",
      categories: ["News Channels", "AI Systems"],
      technologies: ["Content Generation", "Video Processing", "Automated Journalism", "Distribution Systems"],
      links: [
        { label: "Website", url: "https://ainewsletter.wordpress.in", icon: <FaExternalLinkAlt /> },
      ],
      featured: true,
    },
    {
      title: "Rapid Enterprise App Framework",
      description: "A framework that enables development of enterprise applications in 2-3 days with pre-built components and AI-assisted code generation.",
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92",
      categories: ["Backend Services", "AI Systems"],
      technologies: ["Code Generation", "Component Architecture", "API Integration", "Automated Testing"],
      links: [
        { label: "GitHub", url: "#", icon: <FaGithub /> },
        { label: "Documentation", url: "#", icon: <FaExternalLinkAlt /> },
      ],
      featured: true,
    },
    {
      title: "Health Monitoring System",
      description: "Mobile application that uses AI to monitor vital signs and provide health recommendations based on user data and medical guidelines.",
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92",
      categories: ["Mobile Apps", "AI Systems"],
      technologies: ["Health Analytics", "Real-time Monitoring", "Personalized Recommendations", "Data Security"],
      links: [
        { label: "App Store", url: "#", icon: <FaExternalLinkAlt /> },
      ],
      featured: false,
    },
    {
      title: "Financial News Analyzer",
      description: "AI-powered system that analyzes financial news and provides market insights and trading recommendations.",
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92",
      categories: ["News Channels", "AI Systems"],
      technologies: ["Sentiment Analysis", "Market Prediction", "Financial Modeling", "Natural Language Processing"],
      links: [
        { label: "Platform", url: "#", icon: <FaExternalLinkAlt /> },
      ],
      featured: false,
    },
    {
      title: "Industry 4.0 Implementation",
      description: "Complete IoT system for manufacturing facilities that includes predictive maintenance, quality control, and production optimization.",
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92",
      categories: ["Backend Services", "AI Systems"],
      technologies: ["IoT", "Predictive Analytics", "Real-time Monitoring", "Data Visualization"],
      links: [
        { label: "Case Study", url: "#", icon: <FaExternalLinkAlt /> },
      ],
      featured: false,
    },
  ];

  // Filter projects by category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark to-dark-light overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1557264337-e8a93017fe92"
            alt="Projects Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-light opacity-70"></div>
        </div>

        <div className="container relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Projects & Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Innovative AI solutions and applications
          </motion.p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-light">
        <div className="container">
          <SectionTitle
            subtitle="SIGNATURE WORK"
            title="Featured Projects"
            description="Highlighted innovations that showcase breakthrough technologies and solutions."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-soft-lg hover-lift"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.categories.map((category, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-800 flex items-center"
                        >
                          <span className="mr-1">{link.icon}</span> {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="PORTFOLIO"
            title="All Projects"
            description="Browse through a comprehensive collection of my work."
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center mt-8 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`flex items-center px-6 py-3 m-2 rounded-full font-medium transition-all ${
                  activeCategory === category.name
                    ? "bg-primary-600 text-white"
                    : "bg-light text-gray-700 hover:bg-primary-100 hover:text-primary-700"
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
                viewport={{ once: true }}
                className="bg-light rounded-xl overflow-hidden shadow-soft-lg hover-lift"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.categories.map((category, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-800 flex items-center"
                        >
                          <span className="mr-1">{link.icon}</span> {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* AI Meeting Superagent Showcase */}
      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container">
          <SectionTitle
            subtitle="INNOVATION SPOTLIGHT"
            title="AI Meeting Superagent"
            description="A closer look at the world's first AI system designed to transform virtual meetings."
            light={true}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-time Meeting Analysis</h4>
                    <p className="text-light-dark text-sm">
                      Processes and analyzes meeting content in real-time, identifying key topics,
                      sentiment, and action items as the conversation unfolds.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Autonomous Participation</h4>
                    <p className="text-light-dark text-sm">
                      Joins meetings as a participant, responding to queries, providing information,
                      and contributing insights based on context and historical data.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Documentation</h4>
                    <p className="text-light-dark text-sm">
                      Generates detailed meeting summaries, action items, and follow-up tasks,
                      with intelligent categorization and prioritization.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Integration Capabilities</h4>
                    <p className="text-light-dark text-sm">
                      Seamlessly integrates with calendar systems, project management tools,
                      and knowledge bases to enhance productivity and follow-through.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Technical Innovation</h3>
              <p className="text-light-dark mb-6">
                The AI Meeting Superagent represents a breakthrough in applied artificial intelligence,
                combining multiple advanced technologies in a seamless system that augments human capabilities:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Natural Language Processing</h4>
                  <p className="text-light-dark text-sm">
                    Advanced NLP systems that understand context, nuance, and technical jargon
                    across multiple domains and languages.
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Context Awareness</h4>
                  <p className="text-light-dark text-sm">
                    Sophisticated algorithms that maintain awareness of organizational knowledge,
                    meeting history, and participant backgrounds.
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Real-time Processing</h4>
                  <p className="text-light-dark text-sm">
                    High-performance computing architecture that enables instantaneous analysis
                    and response generation with minimal latency.
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Adaptive Learning</h4>
                  <p className="text-light-dark text-sm">
                    Self-improving systems that learn from interactions, refining understanding
                    and responses based on feedback and outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="btn bg-white text-primary-700 hover:bg-light hover:text-primary-800"
            >
              Request Demo
            </motion.button>
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section className="py-16 bg-light">
        <div className="container">
          <SectionTitle
            subtitle="CLIENT WORK"
            title="Enterprise Solutions"
            description="Custom AI implementations delivering business value for enterprise clients."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <FaBrain className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Financial Services AI</h3>
                  <p className="text-gray-500 text-sm">Major Financial Institution</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Implemented an AI-driven risk assessment and fraud detection system that reduced 
                fraudulent transactions by 78% while decreasing false positives by 45%.
              </p>
              
              <div className="pt-4 mt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2023</span>
                  <span className="text-sm font-medium text-primary-600">AI Systems</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center mr-4">
                  <FaServer className="text-secondary-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Healthcare Analytics Platform</h3>
                  <p className="text-gray-500 text-sm">National Healthcare Provider</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Developed a predictive analytics platform that improved patient outcomes by 32% 
                through early intervention recommendations and treatment optimization.
              </p>
              
              <div className="pt-4 mt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2022</span>
                  <span className="text-sm font-medium text-secondary-600">Backend Services</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mr-4">
                  <FaMobileAlt className="text-accent-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Retail Customer Experience</h3>
                  <p className="text-gray-500 text-sm">Global Retail Chain</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Created an AI-powered mobile application that personalized the shopping experience, 
                resulting in a 28% increase in average order value and 40% higher customer retention.
              </p>
              
              <div className="pt-4 mt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2022</span>
                  <span className="text-sm font-medium text-accent-600">Mobile Apps</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <FaNewspaper className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Media Content Management</h3>
                  <p className="text-gray-500 text-sm">International Media Group</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Implemented an AI-driven content management system that automated content curation, 
                personalization, and distribution, increasing audience engagement by 65%.
              </p>
              
              <div className="pt-4 mt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2023</span>
                  <span className="text-sm font-medium text-primary-600">News Channels</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-secondary-600 to-secondary-800 text-white">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Interested in a Custom Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            Let's discuss how we can implement AI technology to address your specific business challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="btn bg-white text-secondary-700 hover:bg-light hover:text-secondary-800 focus:ring-white"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
      