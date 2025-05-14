
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/utils/SectionTitle";
import AnimatedCounter from "../components/utils/AnimatedCounter";
import { FaTrophy, FaRobot, FaAward, FaRocket, FaCode } from "react-icons/fa";

const Achievements = () => {
  // Achievements data
  const achievements = [
    {
      title: "World Record",
      year: "2023",
      description: "Created 35 AI-assisted News Broadcasts, 100+ apps, 2500+ blogs in 3 months",
      impact: "Featured in multiple publications and record books",
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
    },
    {
      title: "AI Meeting Superagent",
      year: "2025",
      description: "Developed first AI Meeting Superagent",
      impact: "Revolutionized virtual meeting participation and productivity",
      icon: <FaRobot className="text-primary-500 text-3xl" />,
    },
    {
      title: "Indian Achievers Award",
      year: "2023",
      description: "Recognition with Dr. Sanjeev Kuwadekar (CEO, Infogen Labs)",
      impact: "Acknowledged for fastest growing solutions in AI/ML",
      icon: <FaAward className="text-accent-500 text-3xl" />,
    },
    {
      title: "Rapid Development",
      year: "2022",
      description: "Built enterprise applications within 2-3 days",
      impact: "Multiple client testimonials praising delivery speed and quality",
      icon: <FaRocket className="text-secondary-500 text-3xl" />,
    },
    {
      title: "Prolific Developer",
      year: "2023",
      description: "Created 100+ applications in 3 months",
      impact: "Demonstrated exceptional productivity and technical expertise",
      icon: <FaCode className="text-primary-700 text-3xl" />,
    },
  ];

  // World record details
  const worldRecordDetails = {
    title: "Global Benchmark in AI Agent Development",
    description: "In a groundbreaking achievement, I successfully created 35 AI-assisted News Broadcasts, developed over 100 AI features, and published 2,500+ blogs within just 3 months. This record-setting accomplishment demonstrates the transformative potential of AI when combined with strategic leadership and technical expertise.",
    metrics: [
      { label: "News Broadcasts", value: 35 },
      { label: "AI Features", value: 100 },
      { label: "Blog Articles", value: 2500 },
      { label: "Months", value: 3 },
    ],
    recognitions: [
      "Featured in International Tech Review",
      "Recognized by AI Innovators Association",
      "Covered in major media outlets",
      "Verified and documented record achievement",
    ],
  };

  // AI Meeting Superagent details
  const superagentDetails = {
    title: "First AI Meeting Superagent",
    description: "I developed a revolutionary AI Meeting Superagent that transforms how professionals participate in and benefit from virtual meetings. This groundbreaking innovation combines natural language processing, context awareness, and autonomous action to create an AI assistant that can actively participate in meetings.",
    features: [
      "Real-time meeting transcription and summarization",
      "Autonomous interaction with meeting participants",
      "Context-aware information retrieval during discussions",
      "Post-meeting action item extraction and assignment",
      "Integration with calendar and project management tools",
    ],
    impact: "The AI Meeting Superagent has revolutionized remote work collaboration, saving professionals an average of 5+ hours weekly by automating meeting-related tasks while improving information retention and follow-through.",
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark to-dark-light overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2"
            alt="Achievements Background"
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
            Record-Breaking Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Pushing the boundaries of innovation and excellence in AI
          </motion.p>
        </div>
      </section>

      {/* Achievements Table Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <SectionTitle
            subtitle="RECOGNITION"
            title="Achievement Highlights"
            description="A summary of key achievements and their impact in the field of AI and technology."
          />

          <div className="mt-12">
            <table className="min-w-full bg-white shadow-soft-xl rounded-xl overflow-hidden border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Achievement
                  </th>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Year
                  </th>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Description
                  </th>
                  <th className="px-6 py-4 bg-primary-600 text-left text-sm font-bold text-white uppercase tracking-wider border border-gray-200">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {achievements.map((achievement, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-base font-medium text-gray-900 border border-gray-200">
                      <div className="flex items-center">
                        <span className="mr-3 p-2 rounded-full bg-primary-100 flex items-center justify-center">{achievement.icon}</span>
                        <span className="whitespace-nowrap">{achievement.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-base text-gray-700 border border-gray-200">
                      {achievement.year}
                    </td>
                    <td className="px-6 py-4 text-base text-gray-700 border border-gray-200">
                      {achievement.description}
                    </td>
                    <td className="px-6 py-4 text-base text-gray-700 border border-gray-200">
                      {achievement.impact}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* World Record Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="WORLD RECORD"
            title={worldRecordDetails.title}
            description="A groundbreaking achievement in AI-powered content creation and application development."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-8 shadow-soft-lg"
            >
              <h3 className="text-xl font-bold mb-4">Record Details</h3>
              <p className="text-gray-700 mb-6">
                {worldRecordDetails.description}
              </p>

              <div className="mb-6 flex justify-center">
                <div className="relative w-4/5 shadow-lg border-2 border-primary-200 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <img 
                    src="https://phdcertificates.s3.eu-north-1.amazonaws.com/world+record.jpeg" 
                    alt="World Record Certificate" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 text-xs font-bold rounded-bl-md">
                    World Record
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {worldRecordDetails.metrics.map((metric, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-1">
                      <AnimatedCounter end={metric.value} />
                    </div>
                    <p className="text-gray-600">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary-700">Press Release Links</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">➤</span>
                    <a href="https://aninews.in/news/business/business/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-202320231120120611/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors">
                      ANI News
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">➤</span>
                    <a href="https://www.zee5.com/articles/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-2023" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors">
                      Zee5
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">➤</span>
                    <a href="https://www.worldnewsnetwork.net/news/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-202320231120120557/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors">
                      World News Network
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">➤</span>
                    <a href="https://www.losangeleseveningdespatch.com/news/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-202320231120120557/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors">
                      Los Angeles Evening Despatch
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">➤</span>
                    <a href="https://www.londonchannelnews.com/news/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-202320231120120557/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors">
                      London Channel News
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">➤</span>
                    <a href="https://www.srilankaislandnews.com/news/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-202320231120120557/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors">
                      Srilanka Island News
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">➤</span>
                    <a href="https://www.whitehousenewstime.com/news/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-202320231120120557/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors">
                      WhiteHouse News Time
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">➤</span>
                    <a href="https://www.KarnatakaLive.in/news/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-202320231120120557/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors">
                      Karnataka Live
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary-500 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-secondary-500 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="relative z-10 h-full bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl p-8 shadow-soft-lg overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white opacity-5 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <FaTrophy className="text-yellow-300 text-6xl" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-center">Impact & Significance</h3>
                  <p className="mb-6">
                    This groundbreaking achievement demonstrates the revolutionary potential of AI when 
                    combined with expert human guidance and strategic implementation.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="font-semibold mb-2">Efficiency Gains</h4>
                      <p className="text-sm">
                        Achieved 10x productivity compared to traditional development and content creation methods.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="font-semibold mb-2">Quality Assurance</h4>
                      <p className="text-sm">
                        Maintained high standards across all deliverables through innovative quality control processes.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="font-semibold mb-2">Industry Recognition</h4>
                      <p className="text-sm">
                        Set a new benchmark for AI-assisted productivity in the technology sector.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <a 
                      href="https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/Info+News+(2)+(1).mp4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-white text-primary-700 rounded-full font-medium hover:bg-opacity-90 transition-all"
                    >
                      View News Broadcasts
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Meeting Superagent Section */}
      <section className="py-16 bg-light-dark">
        <div className="container">
          <SectionTitle
            subtitle="INNOVATION"
            title={superagentDetails.title}
            description="A revolutionary AI system that transforms virtual meeting participation and effectiveness."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-secondary-600 to-secondary-800 text-white rounded-xl overflow-hidden shadow-soft-lg"
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white opacity-5 rounded-full"></div>
              
              <div className="relative z-10 p-8">
                <div className="flex justify-center mb-8">
                  <FaRobot className="text-6xl text-secondary-200" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-center">Key Features</h3>
                
                <ul className="space-y-4">
                  {superagentDetails.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                    >
                      <span className="text-secondary-300 mt-1 mr-3">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Technical Innovation 2025</h4>
                  <p className="text-sm">
                    Combines advanced NLP, real-time audio processing, semantic understanding, 
                    and autonomous decision-making in a unified AI system.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-soft-lg"
            >
              <h3 className="text-xl font-bold mb-4">Transformative Impact</h3>
              <p className="text-gray-700 mb-6">
                {superagentDetails.impact}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-light p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-1 text-secondary-600">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <p className="text-gray-600">Hours Saved Weekly</p>
                </div>
                <div className="bg-light p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-1 text-secondary-600">
                    <AnimatedCounter end={90} suffix="%" />
                  </div>
                  <p className="text-gray-600">Information Retention</p>
                </div>
                <div className="bg-light p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-1 text-secondary-600">
                    <AnimatedCounter end={85} suffix="%" />
                  </div>
                  <p className="text-gray-600">Action Item Completion</p>
                </div>
                <div className="bg-light p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-1 text-secondary-600">
                    <AnimatedCounter end={40} suffix="%" />
                  </div>
                  <p className="text-gray-600">Meeting Duration Reduction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition Gallery */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <SectionTitle
            subtitle="RECOGNITION"
            title="Awards & Acknowledgments"
            description="Industry recognition and awards highlighting innovation and excellence."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl overflow-hidden shadow-soft-lg hover-lift"
            >
              <div className="pt-4 bg-primary-100 flex items-center justify-center">
                {/* Removed the icon since we have the certificate image */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 whitespace-nowrap">Indian Achievers Award</h3>
                <div className="mb-4 flex justify-center">
                  <div className="relative w-4/5 shadow-lg border-2 border-primary-200 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <img 
                      src="https://phdcertificates.s3.eu-north-1.amazonaws.com/achievers+award.jpeg" 
                      alt="Indian Achievers Award Certificate" 
                      className="w-full h-auto"
                    />
                    <div className="absolute top-0 right-0 bg-secondary-600 text-white px-3 py-1 text-xs font-bold rounded-bl-md">
                      2023
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Recognized alongside Dr. Sanjeev Kuwadekar for creating the fastest growing 
                  solutions in AI/ML technology.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">2023</span>
                  <span className="text-primary-600">Award of Excellence</span>
                </div>
                
                <div className="mt-4 bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-primary-700">Press Release Links</h4>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">➤</span>
                      <a href="https://aninews.in/news/business/business/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-202320231120120611/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors text-sm">
                        ANI News
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">➤</span>
                      <a href="https://www.zee5.com/articles/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-2023" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors text-sm">
                        Zee5
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">➤</span>
                      <a href="https://www.worldnewsnetwork.net/news/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-202320231120120557/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors text-sm">
                        World News Network
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">➤</span>
                      <a href="https://www.KarnatakaLive.in/news/blindwink-announces-the-winners-of-7th-edition-of-india-achievers-awards-202320231120120557/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors text-sm">
                        Karnataka Live
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl overflow-hidden shadow-soft-lg hover-lift"
            >
              <div className="h-48 bg-secondary-100 flex items-center justify-center">
                <FaTrophy className="text-secondary-500 text-6xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tech Innovator of the Year</h3>
                <p className="text-gray-600 mb-4">
                  Honored for groundbreaking contributions to AI application development 
                  and rapid deployment methodologies.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2023</span>
                  <span className="text-secondary-600">Technology Award</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container">
          <SectionTitle
            subtitle="TESTIMONIALS"
            title="Professional Endorsements"
            description="What industry leaders say about my work and achievements."
            light={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="mb-4">
                <div className="flex space-x-1">
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                </div>
              </div>
              <p className="italic mb-6">
                "I had the opportunity to explore Dr. Patil's AI Meeting Superagent in action. It's a genuinely useful solution with strong potential for enterprise environments. The app streamlines interactions and boosts efficiency—impressive work!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">VB</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Vinay B. K.</h4>
                  <p className="text-sm text-light-dark">Sr. Delivery Manager, APAC, Cognizant</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="mb-4">
                <div className="flex space-x-1">
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="text-yellow-300 text-xl">★</span>
                </div>
              </div>
              <p className="italic mb-6">
                "Dr. Patil's AI Superagent is a practical, forward-thinking, and well-engineered solution. During the demo, I found it highly relevant, thoughtfully designed, and beneficial for real-world delivery environments."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">SM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Soumen M</h4>
                  <p className="text-sm text-light-dark">Sr. Developer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
      