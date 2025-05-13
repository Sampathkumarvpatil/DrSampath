
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
            src="https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Projects Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-light opacity-70"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left text-white md:w-3/5">
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
                className="text-xl max-w-3xl mx-auto md:mx-0"
              >
                The world's most comprehensive AI agent system with industry-specific solutions
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 md:mt-0 md:w-2/5 flex justify-center md:justify-end"
            >
              <div className="w-72 h-72 relative">
                <div className="absolute inset-0 bg-primary-500 rounded-full opacity-20 blur-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1676493273592-ec1de91908e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YWkgdGVjaG5vbG9neXx8fHx8fDE2MjE4MjA3NTQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                  alt="AI Technology" 
                  className="w-full h-full object-cover rounded-xl z-10 relative"
                />
              </div>
            </motion.div>
          </div>
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
      