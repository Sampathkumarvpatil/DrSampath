
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/utils/SectionTitle";
import { FaGraduationCap, FaMedal, FaCertificate } from "react-icons/fa";

const Education = () => {
  // Education data
  const education = [
    {
      degree: "Honorary Doctorate in AI-Driven Engineering Leadership",
      institution: "Human Rights Council (Govt. of India Approved)",
      year: "2024",
      achievements: "Recognized for innovation leadership",
      icon: <FaGraduationCap className="text-primary-500 text-4xl" />,
    },
    {
      degree: "Honorary Doctorate in AI & Research",
      institution: "Iconic Peace Council (Govt. of India Approved)",
      year: "2023",
      achievements: "Distinguished research contributions",
      icon: <FaGraduationCap className="text-primary-500 text-4xl" />,
    },
    {
      degree: "Ph.D. in AI and Machine Learning",
      institution: "VTU University, Belgaum, Karnataka",
      year: "2015-19",
      achievements: "Youngest Ph.D. holder in the field",
      icon: <FaGraduationCap className="text-primary-500 text-4xl" />,
    },
    {
      degree: "M.Tech",
      institution: "JNTUH University",
      year: "2012-2014",
      achievements: "84% aggregate, Topper in 2nd & 3rd semesters",
      icon: <FaGraduationCap className="text-primary-500 text-4xl" />,
    },
    {
      degree: "B.E. in Electrical and Electronics Engineering",
      institution: "VTU University",
      year: "2008-2012",
      achievements: "80% aggregate, Topper from 2nd-7th semesters",
      icon: <FaGraduationCap className="text-primary-500 text-4xl" />,
    },
  ];

  // Certifications data
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Advanced certification for designing distributed applications and systems on the AWS platform with expertise in architectural best practices.",
    },
    {
      title: "AWS Certified DevOps Engineer - Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Professional-level certification validating expertise in implementing CI/CD systems and automation on AWS cloud platforms.",
    },
    {
      title: "AWS Certified Security - Specialty",
      issuer: "Amazon Web Services",
      year: "2022",
      description: "Specialized certification demonstrating expertise in cloud security, including data protection, encryption, and secure infrastructure design.",
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      year: "2022",
      description: "Certification validating ability to design available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark to-dark-light overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Education Background"
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
            Educational Background
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            A journey of academic excellence and continuous learning
          </motion.p>
        </div>
      </section>

      {/* Education Table Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <SectionTitle
            subtitle="ACADEMIC CREDENTIALS"
            title="Education Timeline"
            description="My educational journey demonstrates a consistent track record of excellence and achievement."
          />

          <div className="mt-12">
            <table className="min-w-full bg-white shadow-soft-xl rounded-xl overflow-hidden border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Degree
                  </th>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Institution
                  </th>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Year
                  </th>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Achievements
                  </th>
                </tr>
              </thead>
              <tbody>
                {education.map((edu, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-base font-medium text-gray-900 border border-gray-200">
                      {edu.degree}
                    </td>
                    <td className="px-6 py-4 text-base text-gray-700 border border-gray-200">
                      {edu.institution}
                    </td>
                    <td className="px-6 py-4 text-center text-base text-gray-700 border border-gray-200">
                      {edu.year}
                    </td>
                    <td className="px-6 py-4 text-base text-gray-700 border border-gray-200">
                      {edu.achievements}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Academic Distinctions */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="ACADEMIC EXCELLENCE"
            title="Distinguished Achievements"
            description="Key academic accomplishments that highlight my dedication to learning and innovation."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-8 shadow-soft-lg hover-lift"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-primary-100 rounded-full">
                <FaGraduationCap className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Youngest Ph.D. Holder</h3>
              <p className="text-gray-600 text-center">
                Achieved the distinction of being the youngest Ph.D. holder in AI/ML,
                demonstrating exceptional aptitude and dedication to the field.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-8 shadow-soft-lg hover-lift"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-primary-100 rounded-full">
                <FaMedal className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Consistent Academic Topper</h3>
              <p className="text-gray-600 text-center">
                Maintained top academic performance throughout undergraduate and graduate studies,
                with exemplary results across multiple semesters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-8 shadow-soft-lg hover-lift"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-primary-100 rounded-full">
                <FaCertificate className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Honorary Recognitions</h3>
              <p className="text-gray-600 text-center">
                Received multiple honorary doctorates for outstanding contributions to AI research
                and leadership, recognized by prestigious institutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Timeline Visual */}
      <section className="py-16 bg-light-dark">
        <div className="container">
          <SectionTitle
            subtitle="JOURNEY"
            title="Educational Progression"
            description="A visual timeline of my academic development and accomplishments."
          />

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {education.map((edu, index) => (
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
                    <div className="bg-white p-6 rounded-xl shadow-soft-lg">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-primary-600 mb-2">{edu.institution}</p>
                      <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
                      <p className="text-gray-600">
                        {edu.achievements}
                      </p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary-100 border-4 border-white flex items-center justify-center z-10">
                    {edu.icon}
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

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="PROFESSIONAL DEVELOPMENT"
            title="AWS Cloud Certifications"
            description="Advanced AWS cloud certifications demonstrating expertise in cloud architecture, security, and DevOps."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light p-6 rounded-xl shadow-soft-lg hover-lift"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-primary-600 mb-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm mb-3">{cert.year}</p>
                  </div>
                  <div className="bg-primary-100 p-3 rounded-full">
                    <FaCertificate className="text-primary-600 text-xl" />
                  </div>
                </div>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
      