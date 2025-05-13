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
    <section className="py-12 bg-light rounded-xl shadow-soft-lg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Demo Videos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our SuperAgents in action to see how they streamline workflows and deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-soft-lg hover-lift"
            >
              <div className="aspect-w-16">
                <video 
                  controls
                  className="w-full h-full object-cover video-hover"
                  poster="https://images.unsplash.com/photo-1557264337-e8a93017fe92"
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
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