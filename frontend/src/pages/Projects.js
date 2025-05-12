
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/utils/SectionTitle";
import SuperAgentPortfolio from "../components/projects/SuperAgentPortfolio";

const Projects = () => {
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
            AI SuperAgent Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            The world's most comprehensive AI agent system with industry-specific solutions
          </motion.p>
        </div>
      </section>

      {/* SuperAgent Portfolio Section */}
      <section className="py-8">
        <div className="container">
          <SuperAgentPortfolio />
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
            Interested in Implementing AI SuperAgents?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            Let's discuss how we can implement AI SuperAgent technology to address your specific business challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="btn bg-white text-primary-700 hover:bg-light hover:text-primary-800 focus:ring-white"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
      