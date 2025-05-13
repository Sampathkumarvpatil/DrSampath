import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";

const ProjectVideos = ({ activeTab }) => {
  // Track which video is currently playing
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
  // Refs to keep track of video elements
  const videoRefs = useRef({});

  // Handler for playing/pausing videos
  const handlePlayButtonClick = (index) => {
    const videoElement = videoRefs.current[index];
    if (!videoElement) return;
    
    if (videoElement.paused) {
      // Pause all videos first
      Object.values(videoRefs.current).forEach(vid => {
        if (vid && !vid.paused) vid.pause();
      });
      
      // Play this video
      videoElement.play()
        .then(() => {
          setPlayingVideoIndex(index);
        })
        .catch(error => {
          console.error('Error playing video:', error);
        });
    } else {
      videoElement.pause();
      setPlayingVideoIndex(null);
    }
  };

  // Video player component
  const VideoPlayer = ({ video, index }) => {
    const handleVideoRef = (element) => {
      if (element) {
        videoRefs.current[index] = element;
      }
    };

    return (
      <div 
        className="aspect-w-16 relative group video-container cursor-pointer" 
        onClick={() => handlePlayButtonClick(index)}
      >
        <video 
          ref={handleVideoRef}
          className="w-full h-full object-cover"
          preload="metadata"
          controls={playingVideoIndex === index}
          poster={playingVideoIndex === index ? "" : "https://images.unsplash.com/photo-1557264337-e8a93017fe92"}
          onEnded={() => setPlayingVideoIndex(null)}
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {playingVideoIndex !== index && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center group-hover:opacity-80">
            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-primary-600/80 transition-all duration-300 play-button">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Video data organized by tab/category
  const videosByCategory = {
    software: [
      {
        title: "ChartSuperagent",
        description: "Creates mindmaps, flowcharts and visual representations of data",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/chartgenius+comp+(2).mp4",
        thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      },
      {
        title: "ChatSuperagent",
        description: "Open-source chat solution with advanced capabilities",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/Chatgeniusplus+(1).mp4",
        thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
      },
      {
        title: "DataSuperagent",
        description: "Powerful visualizations from files and data sources",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/DataGenius+comp+(3).mp4",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      },
      {
        title: "PM Superagent",
        description: "Project management and workflow optimization",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/PMGenius+Comp.mp4",
        thumbnail: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      }
    ],
    qa: [
      {
        title: "Test Superagent",
        description: "Comprehensive testing solution for QA engineers",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/TestGenius+Comp.mp4",
        thumbnail: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      },
      {
        title: "AI Testverse Superagent Terminal",
        description: "Advanced testing automation platform",
        url: "https://aitestversesuperagentterminal.s3.eu-north-1.amazonaws.com/superagentvideo.mp4",
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
      },
      {
        title: "Web Performance Testing",
        description: "Complete solution for web page testing",
        url: "https://mcptestversesuperagentvideos.s3.eu-north-1.amazonaws.com/webperformancetestingvideo+(1).mp4",
        thumbnail: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
      },
      {
        title: "ETL Testing",
        description: "Effective data pipeline validation",
        url: "https://mcptestversesuperagentvideos.s3.eu-north-1.amazonaws.com/etltesting.mp4",
        thumbnail: "https://images.unsplash.com/photo-1665686304355-0b09b9e902b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      },
      {
        title: "API Testing",
        description: "Comprehensive API testing solution",
        url: "https://mcptestversesuperagentvideos.s3.eu-north-1.amazonaws.com/apitestingvideo+(1).mp4",
        thumbnail: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
      },
      {
        title: "AI Testverse MCP Podcast",
        description: "Learn about the latest in testing automation",
        url: "https://mcptestversesuperagentvideos.s3.eu-north-1.amazonaws.com/AI+Testverse+podcast+mcp.mp4",
        thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      }
    ],
    education: [
      {
        title: "EdTech Superagent",
        description: "Revolutionary solutions for education technology",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/EdTechGenius+comp.mp4",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1622&q=80"
      },
      {
        title: "Doc Superagent",
        description: "Document summarization, Q&A, and analysis",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/DocGenius+Comp+(2).mp4",
        thumbnail: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      },
      {
        title: "Video Superagent",
        description: "Video analysis, Q&A, and content understanding",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/Video+Genius+comp.mp4",
        thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
      }
    ],
    marketing: [
      {
        title: "Info-News Superagent",
        description: "Advanced news and information processing",
        url: "https://botgeniussuperagentvideos.s3.eu-north-1.amazonaws.com/Info+News+(2)+(1).mp4",
        thumbnail: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1747&q=80"
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

  // Map SuperAgentPortfolio tabs to video categories
  const getVideoCategory = (tab) => {
    // These are the tabs from SuperAgentPortfolio that we have videos for
    const videoTabs = ['software', 'qa', 'education', 'marketing'];
    
    // If the current tab has videos, return it
    if (videoTabs.includes(tab)) {
      return tab;
    }
    
    // Otherwise return null (no videos for this tab)
    return null;
  };

  // Get videos for current tab
  const videoCategory = getVideoCategory(activeTab);
  const videos = videoCategory ? videosByCategory[videoCategory] || [] : [];
  const resources = videoCategory ? additionalResources[videoCategory] || [] : [];

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
            Watch our SuperAgents in action to see how they streamline workflows and deliver exceptional results in the {videoCategory === 'software' ? 'Software Development' : 
              videoCategory === 'qa' ? 'Quality Assurance' : 
              videoCategory === 'education' ? 'Education' : 
              videoCategory === 'marketing' ? 'Marketing' : 'Technology'} domain.
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
              <VideoPlayer video={video} index={index} />
              <div className="p-8">
                <div className="flex items-center mb-3">
                  <span className="bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                    {videoCategory}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{video.title}</h3>
                <p className="text-gray-600 mb-4 text-lg">{video.description}</p>
                <button 
                  onClick={() => handlePlayButtonClick(index)}
                  className="text-primary-600 hover:text-primary-800 font-medium flex items-center mt-2 transition-all duration-300 hover:translate-x-1"
                >
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
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block bg-secondary-100 text-secondary-700 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-3">
                Premium Access
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Explore these additional tools and resources to enhance your experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-soft-xl hover-lift transform transition-all duration-300"
                >
                  {resource.imageUrl && (
                    <div className="relative overflow-hidden h-64 video-container">
                      <img 
                        src={resource.imageUrl} 
                        alt={resource.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                    <p className="text-gray-600 mb-6">Experience our advanced tools designed to streamline your workflow and boost productivity.</p>
                    <a 
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary py-3 px-8 rounded-lg flex items-center justify-center w-full md:w-auto"
                    >
                      Visit Resource
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
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