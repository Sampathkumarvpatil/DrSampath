import React from 'react';
import { motion } from "framer-motion";

const ProjectVideos = ({ activeTab }) => {
  // Video data organized by tab/category
  const videosByCategory = {
    software: [
      {
        title: "ChartSuperagent",
        description: "Creates mindmaps, flowcharts and visual representations of data",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/chartgenius+comp+(2).mp4"
      },
      {
        title: "ChatSuperagent",
        description: "Open-source chat solution with advanced capabilities",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/Chatgeniusplus+(1).mp4"
      },
      {
        title: "DataSuperagent",
        description: "Powerful visualizations from files and data sources",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/DataGenius+comp+(3).mp4"
      },
      {
        title: "PM Superagent",
        description: "Project management and workflow optimization",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/PMGenius+Comp.mp4"
      }
    ],
    qa: [
      {
        title: "Test Superagent",
        description: "Comprehensive testing solution for QA engineers",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/TestGenius+Comp.mp4"
      },
      {
        title: "AI Testverse Superagent Terminal",
        description: "Advanced testing automation platform",
        url: "https://aitestversesuperagentterminal.s3.eu-north-1.amazonaws.com/superagentvideo.mp4"
      },
      {
        title: "Web Performance Testing",
        description: "Complete solution for web page testing",
        url: "https://mcptestversesuperagentvideos.s3.eu-north-1.amazonaws.com/webperformancetestingvideo+(1).mp4"
      },
      {
        title: "ETL Testing",
        description: "Effective data pipeline validation",
        url: "https://mcptestversesuperagentvideos.s3.eu-north-1.amazonaws.com/etltesting.mp4"
      },
      {
        title: "API Testing",
        description: "Comprehensive API testing solution",
        url: "https://mcptestversesuperagentvideos.s3.eu-north-1.amazonaws.com/apitestingvideo+(1).mp4"
      },
      {
        title: "AI Testverse MCP Podcast",
        description: "Learn about the latest in testing automation",
        url: "https://mcptestversesuperagentvideos.s3.eu-north-1.amazonaws.com/AI+Testverse+podcast+mcp.mp4"
      }
    ],
    education: [
      {
        title: "EdTech Superagent",
        description: "Revolutionary solutions for education technology",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/EdTechGenius+comp.mp4"
      },
      {
        title: "Doc Superagent",
        description: "Document summarization, Q&A, and analysis",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/DocGenius+Comp+(2).mp4"
      },
      {
        title: "Video Superagent",
        description: "Video analysis, Q&A, and content understanding",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/Video+Genius+comp.mp4"
      }
    ],
    marketing: [
      {
        title: "Info-News Superagent",
        description: "Advanced news and information processing",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/Info+News+(2)+(1).mp4"
      }
    ]
  };

  // Additional resources
  const additionalResources = {
    qa: [
      {
        title: "AI Testverse Automation Terminal",
        url: "https://aitestversesuperagentterminal.s3.eu-north-1.amazonaws.com/automationterminal.html",
        imageUrl: "https://aitestversesuperagentterminal.s3.eu-north-1.amazonaws.com/superagent1.png"
      },
      {
        title: "AI Testverse MCP",
        url: "https://mcptestversesuperagentvideos.s3.eu-north-1.amazonaws.com/aitestversemcp.html",
        imageUrl: null
      }
    ]
  };

  // Get videos for current tab
  const videos = videosByCategory[activeTab] || [];
  const resources = additionalResources[activeTab] || [];

  if (videos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-light to-white rounded-xl shadow-soft-lg my-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-3">
            Expert Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Demo Videos</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Watch our SuperAgents in action to see how they streamline workflows and deliver exceptional results in the {activeTab === 'software' ? 'Software Development' : 
              activeTab === 'qa' ? 'Quality Assurance' : 
              activeTab === 'education' ? 'Education' : 
              activeTab === 'marketing' ? 'Marketing' : 'Technology'} domain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-soft-xl hover-lift transform transition-all duration-300"
            >
              <div className="aspect-w-16 relative group">
                <video 
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-3">
                  <span className="bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                    {activeTab}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{video.title}</h3>
                <p className="text-gray-600 mb-4 text-lg">{video.description}</p>
                <button className="text-primary-600 hover:text-primary-800 font-medium flex items-center mt-2 transition-all duration-300 hover:translate-x-1">
                  Watch Video
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {resources.length > 0 && (
          <div className="mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Additional Resources</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore these additional tools and resources to enhance your experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-soft-lg hover-lift"
                >
                  {resource.imageUrl && (
                    <img 
                      src={resource.imageUrl} 
                      alt={resource.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <a 
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-4"
                    >
                      Visit Resource
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectVideos;