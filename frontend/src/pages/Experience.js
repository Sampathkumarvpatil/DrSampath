
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/utils/SectionTitle";
import { FaBriefcase, FaChevronRight, FaCode, FaUsers, FaChartLine, FaRocket } from "react-icons/fa";

const Experience = () => {
  // Experience data
  const experiences = [
    {
      position: "Business Unit Head & GenAI Principal Lead",
      company: "Ciklum",
      duration: "Feb'24 - Present",
      responsibilities: [
        "Providing strategic direction for GenAI solutions and implementations",
        "Leading business unit operations and team management",
        "Overseeing AI architecture design and implementation strategies",
        "Driving innovation in GenAI applications and use cases",
        "Establishing partnerships with key technology providers"
      ],
      icon: <FaBriefcase className="text-primary-600 text-2xl" />,
    },
    {
      position: "Business Unit Head & GenAI Principal Lead",
      company: "Infogen Labs",
      duration: "Oct'21 - Jan'24",
      responsibilities: [
        "Led business unit operations & GenAI initiatives",
        "Managed cross-functional teams and project delivery",
        "Developed and implemented GenAI strategy and roadmap",
        "Oversaw client relationships and business development",
        "Spearheaded innovation in AI/ML applications"
      ],
      icon: <FaBriefcase className="text-primary-600 text-2xl" />,
    },
    {
      position: "AI/ML Architect Consultant",
      company: "Nexamatic Solutions",
      duration: "Nov'18 - Sep'21",
      responsibilities: [
        "Designed and implemented AI/ML architecture for enterprise clients",
        "Provided technical leadership and mentoring to development teams",
        "Created frameworks for rapid AI application development",
        "Consulted on complex AI implementation challenges",
        "Developed proof-of-concepts for innovative AI solutions"
      ],
      icon: <FaBriefcase className="text-primary-600 text-2xl" />,
    },
    {
      position: "Director of Engineering",
      company: "Techvoage LLP",
      duration: "Jan'18 - Oct'18",
      responsibilities: [
        "Directed engineering operations & team leadership",
        "Established technical strategies and implementation roadmaps",
        "Managed product development lifecycle and quality assurance",
        "Implemented agile methodologies and DevOps practices",
        "Oversaw technical architecture and platform decisions"
      ],
      icon: <FaBriefcase className="text-primary-600 text-2xl" />,
    },
    {
      position: "AI/ML Architect Consultant",
      company: "Nexamatic Solutions",
      duration: "Mar 2015 - Dec 2017",
      responsibilities: [
        "Led AI/ML solution development & consulting",
        "Designed scalable architectures for machine learning systems",
        "Developed algorithms and models for predictive analytics",
        "Implemented data pipelines and processing frameworks",
        "Provided technical guidance on AI/ML best practices"
      ],
      icon: <FaBriefcase className="text-primary-600 text-2xl" />,
    }
  ];

  // Key projects data
  const keyProjects = [
    {
      title: "AI Meeting Superagent",
      company: "Infogen Labs",
      description: "Developed the world's first AI system capable of autonomously participating in meetings, taking notes, and providing intelligent insights in real-time.",
      technologies: ["Natural Language Processing", "Speech Recognition", "Context Awareness", "Real-time Processing"],
      impact: "Revolutionized meeting productivity and information retention for enterprise clients",
      icon: <FaRocket className="text-secondary-500 text-2xl" />,
    },
    {
      title: "Rapid AI Application Framework",
      company: "Nexamatic Solutions",
      description: "Created a proprietary framework enabling the development of enterprise-grade AI applications in days rather than months, while maintaining quality standards.",
      technologies: ["GenAI", "Component Architecture", "API Integration", "Automated Testing"],
      impact: "Reduced development time by 90% while improving application quality and consistency",
      icon: <FaCode className="text-accent-500 text-2xl" />,
    },
    {
      title: "AI News Channel Platform",
      company: "Infogen Labs",
      description: "Architected and implemented a platform for generating and managing AI-assisted news channels with minimal human intervention.",
      technologies: ["Content Generation", "Media Processing", "Distribution Pipeline", "Analytics"],
      impact: "Enabled the creation of 35 news channels in record time, setting a world record",
      icon: <FaChartLine className="text-primary-700 text-2xl" />,
    },
  ];

  // Skills data
  const skills = [
    {
      category: "Technical Leadership",
      items: ["AI/ML Architecture", "Technology Strategy", "Solution Design", "Technical Roadmapping", "Innovation Leadership"]
    },
    {
      category: "Artificial Intelligence",
      items: ["Generative AI", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "Machine Learning"]
    },
    {
      category: "Development",
      items: ["Rapid Application Development", "Software Architecture", "API Design", "System Integration", "Cloud Infrastructure"]
    },
    {
      category: "Management",
      items: ["Business Unit Management", "Team Leadership", "Project Management", "Client Relations", "Strategic Planning"]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark to-dark-light overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1573497701175-00c200fd57f0"
            alt="Experience Background"
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
            Professional Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            A track record of leadership and innovation in AI/ML
          </motion.p>
        </div>
      </section>

      {/* Experience Table Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <SectionTitle
            subtitle="CAREER PATH"
            title="Experience Timeline"
            description="A chronological overview of my professional journey and leadership roles."
          />

          <div className="mt-12">
            <table className="min-w-full bg-white shadow-soft-xl rounded-xl overflow-hidden border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Position
                  </th>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Company
                  </th>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Duration
                  </th>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Key Responsibilities
                  </th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((exp, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-base font-medium text-gray-900 border border-gray-200">
                      {exp.position}
                    </td>
                    <td className="px-6 py-4 text-base text-gray-700 border border-gray-200">
                      {exp.company}
                    </td>
                    <td className="px-6 py-4 text-base text-gray-700 border border-gray-200">
                      {exp.duration}
                    </td>
                    <td className="px-6 py-4 text-base text-gray-700 border border-gray-200">
                      <ul className="list-disc list-inside space-y-1">
                        {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Career Timeline Visual */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="JOURNEY"
            title="Professional Timeline"
            description="A visual representation of my career progression and key milestones."
          />

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                    }`}
                  >
                    <div className="bg-light p-6 rounded-xl shadow-soft-lg hover-lift">
                      <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                      <p className="text-primary-600 mb-2">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
                      <ul className={`space-y-2 text-gray-600 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <FaChevronRight className={`text-primary-500 mt-1 flex-shrink-0 ${
                              index % 2 === 0 ? "md:order-last md:ml-2" : "mr-2"
                            }`} />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary-100 border-4 border-white flex items-center justify-center z-10">
                    {exp.icon}
                  </div>
                  <div className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="py-16 bg-light-dark">
        <div className="container">
          <SectionTitle
            subtitle="HIGHLIGHTED WORK"
            title="Key Projects"
            description="Signature projects that showcase technical expertise and innovation."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {keyProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-soft-lg hover-lift"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-primary-600 text-sm">{project.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Impact:</h4>
                    <p className="text-sm text-gray-600">{project.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="EXPERTISE"
            title="Professional Skills"
            description="Core capabilities and areas of expertise that drive results."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light rounded-xl p-6 shadow-soft-lg hover-lift"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <FaUsers className="text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold">{skillSet.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {skillSet.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container">
          <SectionTitle
            subtitle="LEADERSHIP"
            title="Leadership Philosophy"
            description="My approach to leadership and team management."
            light={true}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Innovation-Driven</h3>
              <p className="text-light-dark">
                I foster a culture of continuous innovation, encouraging teams to experiment with emerging technologies 
                and challenge conventional approaches to problem-solving.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Results-Oriented</h3>
              <p className="text-light-dark">
                My leadership focuses on delivering measurable results and business value. I establish clear metrics 
                and accountability frameworks to ensure team success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">People-First</h3>
              <p className="text-light-dark">
                I believe in empowering team members through mentorship, growth opportunities, and recognition. 
                I create environments where talent can thrive and reach their full potential.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl font-light max-w-3xl mx-auto italic">
              "True leadership in technology is about creating a vision that inspires others, 
              building systems that empower teams, and delivering innovations that transform industries."
            </p>
            <p className="mt-4 font-medium">— Dr. Sampath V. Patil</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
      