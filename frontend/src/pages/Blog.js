
import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/utils/SectionTitle";
import { FaSearch, FaTags, FaCalendarAlt, FaChartLine, FaArrowRight, FaNewspaper, FaRobot, FaChartBar, FaBrain, FaCode } from "react-icons/fa";

const Blog = () => {
  // Category filters
  const categories = [
    { name: "All", icon: <FaNewspaper /> },
    { name: "AI Technology", icon: <FaRobot /> },
    { name: "Business Applications", icon: <FaChartBar /> },
    { name: "Research Insights", icon: <FaBrain /> },
    { name: "Development", icon: <FaCode /> },
  ];

  // State for active filter and search
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Blog posts data
  const blogPosts = [
    {
      title: "Revolutionary Impact of AI Meeting Superagent",
      excerpt: "Exploring how AI Meeting Superagent is transforming virtual collaboration and team productivity through autonomous meeting participation and intelligent insights.",
      date: "March 15, 2024",
      category: "AI Technology",
      readTime: "8 min read",
      views: 2458,
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92",
      url: "https://theainewsletterin.wordpress.com",
      featured: true,
    },
    {
      title: "Rapid Application Development: The Future of Enterprise Software",
      excerpt: "How AI-assisted development methodologies are reducing application development time from months to days while maintaining quality and security standards.",
      date: "February 28, 2024",
      category: "Development",
      readTime: "12 min read",
      views: 1876,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      url: "https://ainewsletter.wordpress.in",
      featured: true,
    },
    {
      title: "AI-Driven News: Transforming Media Production",
      excerpt: "A deep dive into how artificial intelligence is revolutionizing news production, curation, and distribution across multiple channels and platforms.",
      date: "January 20, 2024",
      category: "Business Applications",
      readTime: "10 min read",
      views: 3104,
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92",
      url: "https://ainewsletter.wordpress.in",
      featured: true,
    },
    {
      title: "The Ethics of Autonomous AI Systems",
      excerpt: "Examining the ethical considerations and responsible development practices for AI systems that operate with increasing levels of autonomy.",
      date: "December 12, 2023",
      category: "Research Insights",
      readTime: "15 min read",
      views: 2205,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      url: "https://ainewsletter.wordpress.in",
      featured: false,
    },
    {
      title: "GenAI: Beyond Content Generation",
      excerpt: "How generative AI is evolving beyond basic content creation to become a transformative force in product design, strategic planning, and decision support.",
      date: "November 5, 2023",
      category: "AI Technology",
      readTime: "9 min read",
      views: 1843,
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92",
      url: "https://ainewsletter.wordpress.in",
      featured: false,
    },
    {
      title: "AI Implementation for Enterprise: A Practical Guide",
      excerpt: "Practical strategies and best practices for successfully implementing AI solutions within enterprise environments, from proof-of-concept to full deployment.",
      date: "October 18, 2023",
      category: "Business Applications",
      readTime: "14 min read",
      views: 2752,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      url: "https://ainewsletter.wordpress.in",
      featured: false,
    },
    {
      title: "The Future of Natural Language Processing",
      excerpt: "Exploring the cutting edge of NLP research and how advancements in language understanding are opening new possibilities for human-computer interaction.",
      date: "September 29, 2023",
      category: "Research Insights",
      readTime: "11 min read",
      views: 1967,
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92",
      url: "https://ainewsletter.wordpress.in",
      featured: false,
    },
    {
      title: "Microservices Architecture for AI Applications",
      excerpt: "How microservices architecture provides the flexibility and scalability needed for modern AI application development and deployment.",
      date: "August 15, 2023",
      category: "Development",
      readTime: "13 min read",
      views: 1432,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      url: "https://ainewsletter.wordpress.in",
      featured: false,
    },
  ];

  // Filter and search blog posts
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

  // Separate featured posts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark to-dark-light overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1557264337-e8a93017fe92"
            alt="Blog Background"
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
            Blog & Research
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Insights, articles, and research on AI technology and applications
          </motion.p>
        </div>
      </section>

      {/* Blog Overview */}
      <section className="py-16 bg-light">
        <div className="container">
          <SectionTitle
            subtitle="KNOWLEDGE HUB"
            title="AI Newsletter"
            description="Explore over 2,500 articles on AI applications, research, and development techniques."
          />

          <div className="mt-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-soft-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Welcome to AI Newsletter</h3>
                  <p className="text-gray-700 mb-6">
                    Founded and curated by Dr. Sampath V. Patil, AI Newsletter is a comprehensive resource
                    covering the latest developments in artificial intelligence, machine learning, and
                    their practical applications across industries. With over 2,500 articles published,
                    the platform has become a go-to resource for professionals and enthusiasts alike.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://ainewsletter.wordpress.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visit AI Newsletter
                    </a>
                    <button className="btn btn-outline">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-light p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-primary-600">2500+</div>
                      <p className="text-gray-600">Published Articles</p>
                    </div>
                    <div className="bg-light p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-primary-600">35</div>
                      <p className="text-gray-600">News Channels</p>
                    </div>
                    <div className="bg-light p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-primary-600">50K+</div>
                      <p className="text-gray-600">Monthly Readers</p>
                    </div>
                    <div className="bg-light p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-primary-600">12</div>
                      <p className="text-gray-600">Industry Focuses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Featured Articles</h2>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Featured posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light rounded-xl overflow-hidden shadow-soft-lg hover-lift"
              >
                <div className="img-hover-zoom h-48 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FaCalendarAlt className="mr-1" /> {post.date}
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="flex items-center text-xs text-primary-600 font-medium">
                      <FaTags className="mr-1" /> {post.category}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      <FaChartLine className="mr-1" /> {post.views} views
                    </span>
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Read Article <FaArrowRight className="inline ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center mt-12 mb-8">
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

          {/* Regular posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-soft-lg hover-lift"
              >
                <div className="img-hover-zoom h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FaCalendarAlt className="mr-1" /> {post.date}
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="flex items-center text-xs text-primary-600 font-medium">
                      <FaTags className="mr-1" /> {post.category}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      <FaChartLine className="mr-1" /> {post.views} views
                    </span>
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Read Article <FaArrowRight className="inline ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found. Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* International Papers */}
      <section className="py-16 bg-light">
        <div className="container">
          <SectionTitle
            subtitle="RESEARCH"
            title="International Papers"
            description="Academic contributions and research papers published in international conferences and journals."
          />

          <div className="mt-12 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-soft-lg hover-lift"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">
                    "Novel Architecture for Autonomous AI Meeting Assistants"
                  </h3>
                  <p className="text-primary-600 mb-4">International Conference on Artificial Intelligence, 2023</p>
                  <p className="text-gray-600 mb-4">
                    This paper presents a groundbreaking architecture for AI systems capable of 
                    autonomous participation in virtual meetings, including real-time language processing, 
                    context awareness, and intelligent response generation.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center">
                      <FaChartLine className="mr-1" /> 84 citations
                    </span>
                    <span className="mx-3">•</span>
                    <span>Published: June 2023</span>
                  </div>
                </div>
                <div className="md:w-1/4 flex items-center justify-center">
                  <button className="btn btn-primary w-full">View Paper</button>
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
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">
                    "Rapid Application Development Framework for Enterprise AI Solutions"
                  </h3>
                  <p className="text-primary-600 mb-4">Journal of Software Engineering & Applications, 2022</p>
                  <p className="text-gray-600 mb-4">
                    This research introduces a novel framework for dramatically accelerating the development 
                    of enterprise-grade AI applications while maintaining quality, security, and scalability standards.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center">
                      <FaChartLine className="mr-1" /> 56 citations
                    </span>
                    <span className="mx-3">•</span>
                    <span>Published: November 2022</span>
                  </div>
                </div>
                <div className="md:w-1/4 flex items-center justify-center">
                  <button className="btn btn-primary w-full">View Paper</button>
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
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">
                    "AI-Driven Content Production and Distribution Systems"
                  </h3>
                  <p className="text-primary-600 mb-4">International Journal of Media Technology, 2022</p>
                  <p className="text-gray-600 mb-4">
                    This paper examines innovative approaches to automated content production, curation, 
                    and distribution using advanced AI systems, with case studies on implementing 
                    multi-channel news platforms.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center">
                      <FaChartLine className="mr-1" /> 43 citations
                    </span>
                    <span className="mx-3">•</span>
                    <span>Published: August 2022</span>
                  </div>
                </div>
                <div className="md:w-1/4 flex items-center justify-center">
                  <button className="btn btn-primary w-full">View Paper</button>
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
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">
                    "Ethical Considerations in Autonomous AI Deployment"
                  </h3>
                  <p className="text-primary-600 mb-4">AI Ethics Journal, 2021</p>
                  <p className="text-gray-600 mb-4">
                    This research explores the ethical dimensions and governance frameworks necessary 
                    for responsible development and deployment of autonomous AI systems in business 
                    and consumer applications.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center">
                      <FaChartLine className="mr-1" /> 72 citations
                    </span>
                    <span className="mx-3">•</span>
                    <span>Published: October 2021</span>
                  </div>
                </div>
                <div className="md:w-1/4 flex items-center justify-center">
                  <button className="btn btn-primary w-full">View Paper</button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <button className="btn btn-primary">
              View All Research Papers
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Stay Updated with Latest Research
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg mb-8 text-light-dark"
            >
              Subscribe to receive notifications about new blog posts, research papers, and industry insights.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn bg-white text-primary-700 hover:bg-light-dark hover:text-primary-800">
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
      