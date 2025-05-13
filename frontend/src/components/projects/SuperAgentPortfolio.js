
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import ProjectVideos from './ProjectVideos';

const SuperAgentPortfolio = () => {
  const [activeTab, setActiveTab] = useState('software');
  
  // Define all our tabs and their content
  const tabs = {
    hr: {
       title: "Human Resources",
       solutions: [
         { title: "BotSuperAgent+ HRAssistant", description: "Streamlines HR processes like employee onboarding, document management, leave requests, and compliance tracking with intelligent automation.", category: "HR Management" },
         { title: "BotSuperAgent+ RecruitmentHelper", description: "Automates candidate sourcing, resume screening, interview scheduling, and provides AI-powered insights on candidate suitability.", category: "Recruitment" },
         { title: "BotSuperAgent+ PerformanceTracker", description: "Monitors employee performance metrics, generates comprehensive reports, and provides actionable insights for performance improvement.", category: "Performance Management" },
         { title: "BotSuperAgent+ LearningManager", description: "Creates personalized learning paths for employees, tracks progress, and recommends relevant training resources based on skill gaps.", category: "Learning & Development" },
         { title: "BotSuperAgent+ EmployeeEngagement", description: "Measures employee sentiment, conducts automated surveys, and provides insights to improve workplace culture and engagement.", category: "Employee Experience" },
         { title: "BotSuperAgent+ ComplianceMonitor", description: "Ensures HR compliance with regulations, tracks policy updates, and generates necessary documentation for audits and reporting.", category: "Compliance" }
       ]
    },
    it: {
       title: "Information Technology",
       solutions: [
         { title: "ITSuperagent CodeAutomator", description: "Automates code generation and templating for rapid application development with intelligent pattern recognition.", category: "Development" },
         { title: "ITSuperagent IssueTracker", description: "Centralizes bug tracking and issue management with AI-powered categorization, prioritization, and resolution suggestions.", category: "Issue Management" },
         { title: "ITSuperagent BuildPipeline", description: "Manages CI/CD build workflows with intelligent optimization and automatic error detection and resolution.", category: "DevOps" },
         { title: "ITSuperagent DeployManager", description: "Orchestrates application deployments with zero-downtime strategies and automatic rollback capabilities.", category: "Deployment" },
         { title: "ITSuperagent TestOrchestrator", description: "Integrates test suites into pipelines with intelligent test selection and parallel execution optimization.", category: "Testing" },
         { title: "ITSuperagent MetricsDashboard", description: "Visualizes development metrics in real time with AI-powered insights and anomaly detection capabilities.", category: "Analytics" }
       ]
    },
    software: {
       title: "Software Development",
       solutions: [
         { title: "DevSuperAgent+ CodeGenerator", description: "Generates high-quality code based on natural language descriptions and design specifications.", category: "Code Generation" },
         { title: "DevSuperAgent+ BugPredictor", description: "Identifies potential bugs in code before deployment using advanced static analysis and pattern recognition.", category: "Quality Assurance" },
         { title: "DevSuperAgent+ ArchitectAssistant", description: "Recommends optimal software architecture patterns based on project requirements and constraints.", category: "Architecture" },
         { title: "DevSuperAgent+ TestCaseGenerator", description: "Automatically generates comprehensive test cases from code and functional specifications.", category: "Testing" },
         { title: "DevSuperAgent+ DocumentationWriter", description: "Creates detailed software documentation from code, including API references, user guides, and technical specs.", category: "Documentation" },
         { title: "DevSuperAgent+ CodeReviewer", description: "Reviews code for quality, performance issues, security vulnerabilities, and adherence to best practices.", category: "Code Review" }
       ]
    },
    qa: {
       title: "Quality Assurance",
       solutions: [
         { title: "TestVerse AutoTestGen", description: "Generates comprehensive test suites from natural language descriptions of system behaviors.", category: "Test Generation" },
         { title: "TestVerse SpecParser", description: "Automatically converts specifications into testable requirements with validation criteria.", category: "Requirements Analysis" },
         { title: "TestVerse BehaviorSimulator", description: "Simulates user behaviors to identify edge cases and stress test applications.", category: "Behavior Testing" },
         { title: "TestVerse RegressionPredictor", description: "Uses machine learning to predict potential regression issues before code changes are deployed.", category: "Regression Testing" },
         { title: "TestVerse SecurityProbe", description: "Continuously scans applications for security vulnerabilities using advanced threat modeling.", category: "Security Testing" },
         { title: "TestVerse PerformanceAnalyzer", description: "Identifies bottlenecks and performance degradation patterns in complex systems.", category: "Performance Testing" }
       ]
    },
    education: {
       title: "Education",
       solutions: [
         { title: "EduSuperAgent+ PersonalizedTutor", description: "Creates customized learning paths based on student's learning style, strengths, and areas for improvement.", category: "Personalized Learning" },
         { title: "EduSuperAgent+ AssessmentCreator", description: "Generates diverse assessments tailored to learning objectives with automatic grading and feedback.", category: "Assessment" },
         { title: "EduSuperAgent+ ContentAdapter", description: "Adapts educational content to different learning levels, styles, and accessibility requirements.", category: "Content Adaptation" },
         { title: "EduSuperAgent+ EngagementMonitor", description: "Tracks student engagement and identifies early intervention opportunities for at-risk students.", category: "Student Engagement" },
         { title: "EduSuperAgent+ CurriculumDesigner", description: "Assists in curriculum development with alignment to standards and integration of innovative teaching methods.", category: "Curriculum Design" },
         { title: "EduSuperAgent+ LearningAnalytics", description: "Provides detailed analytics on student performance, learning patterns, and educational outcomes.", category: "Learning Analytics" }
       ]
    },
    healthcare: {
       title: "Healthcare",
       solutions: [
         { title: "MedSuperAgent+ DiagnosisAssistant", description: "Supports medical diagnosis with pattern recognition across symptoms, medical history, and similar cases.", category: "Diagnosis Support" },
         { title: "MedSuperAgent+ PatientMonitor", description: "Continuously monitors patient data and alerts healthcare providers to concerning trends or changes.", category: "Patient Monitoring" },
        { title: "MedSuperAgent+ TreatmentOptimizer", description: "Recommends personalized treatment plans based on patient data, medical research, and outcomes analysis.", category: "Treatment Planning" },
        { title: "MedSuperAgent+ MedicalScribe", description: "Automatically documents patient encounters, generating clinical notes and updating medical records.", category: "Documentation" },
        { title: "MedSuperAgent+ MedicationManager", description: "Manages medication schedules, checks for interactions, and ensures proper dosage and administration.", category: "Medication Management" },
        { title: "MedSuperAgent+ CareCoordinator", description: "Coordinates care across multiple providers, ensuring seamless information sharing and continuity of care.", category: "Care Coordination" }
      ]
    },
    finance: {
      title: "Finance",
      solutions: [
        { title: "FinSuperAgent+ RiskAnalyzer", description: "Identifies financial risks using predictive modeling and scenario analysis across diverse market conditions.", category: "Risk Management" },
        { title: "FinSuperAgent+ FraudDetector", description: "Detects fraudulent transactions and activities using behavioral analysis and anomaly detection.", category: "Fraud Prevention" },
        { title: "FinSuperAgent+ InvestmentAdvisor", description: "Provides personalized investment recommendations based on financial goals, risk tolerance, and market conditions.", category: "Investment Advisory" },
        { title: "FinSuperAgent+ ComplianceMonitor", description: "Ensures adherence to financial regulations and reporting requirements across multiple jurisdictions.", category: "Compliance" },
        { title: "FinSuperAgent+ ForecastGenerator", description: "Generates accurate financial forecasts using advanced predictive modeling and economic indicators.", category: "Financial Planning" },
        { title: "FinSuperAgent+ TransactionProcessor", description: "Streamlines transaction processing with automated verification, reconciliation, and reporting.", category: "Transaction Management" }
      ]
    },
    marketing: {
      title: "Marketing",
      solutions: [
        { title: "MarketingSuperAgent+ CampaignManager", description: "Plans, executes, and optimizes marketing campaigns across multiple channels with AI-driven targeting.", category: "Campaign Management" },
        { title: "MarketingSuperAgent+ ContentCreator", description: "Generates marketing content including copy, social media posts, and email templates optimized for engagement.", category: "Content Creation" },
        { title: "MarketingSuperAgent+ AudienceAnalyzer", description: "Segments audiences and identifies high-value customer profiles using advanced data analytics.", category: "Audience Analysis" },
        { title: "MarketingSuperAgent+ SentimentTracker", description: "Monitors brand sentiment across social media and review platforms with real-time insights.", category: "Brand Monitoring" },
        { title: "MarketingSuperAgent+ ROIOptimizer", description: "Analyzes marketing performance and optimizes budget allocation for maximum return on investment.", category: "Performance Analysis" },
        { title: "MarketingSuperAgent+ CompetitiveIntelligence", description: "Tracks competitor activities, pricing strategies, and market positioning with actionable insights.", category: "Competitive Analysis" }
      ]
    },
    food: {
       title: "Food Industry",
       solutions: [
         { title: "FoodSuperAgent+ QualityAnalyzer", description: "Monitors food quality parameters in real-time and predicts potential quality issues before they occur.", category: "Quality Control" },
         { title: "FoodSuperAgent+ SupplyChainTracker", description: "Tracks food products from farm to table with blockchain-based traceability and contamination alerts.", category: "Supply Chain" },
         { title: "FoodSuperAgent+ InventoryOptimizer", description: "Optimizes inventory levels to minimize waste while ensuring product availability.", category: "Inventory Management" },
         { title: "FoodSuperAgent+ RecipeInnovator", description: "Generates new recipe ideas based on consumer trends, available ingredients, and nutritional goals.", category: "Product Development" },
         { title: "FoodSuperAgent+ ShelfLifePredictor", description: "Predicts precise shelf life for products based on environmental conditions and ingredient analysis.", category: "Shelf Life Management" },
         { title: "FoodSuperAgent+ ComplianceMonitor", description: "Ensures compliance with food safety regulations and certification requirements across global markets.", category: "Compliance" }
       ]
    },
    agriculture: {
       title: "Agriculture",
       solutions: [
         { title: "AgroSuperAgent+ CropAnalyzer", description: "Uses AI to analyze crop health, predict yields, and identify potential issues before they affect production.", category: "Crop Management" },
         { title: "AgroSuperAgent+ SoilMonitor", description: "Monitors soil conditions, nutrient levels, and recommends optimal fertilization strategies for maximum yield.", category: "Soil Analysis" },
         { title: "AgroSuperAgent+ IrrigationOptimizer", description: "Optimizes irrigation schedules based on weather forecasts, soil conditions, and crop water requirements.", category: "Irrigation" },
         { title: "AgroSuperAgent+ PestPredictor", description: "Predicts pest outbreaks based on environmental conditions and recommends preventive actions.", category: "Pest Management" },
         { title: "AgroSuperAgent+ HarvestPlanner", description: "Determines optimal harvest times based on crop maturity, weather conditions, and market demand.", category: "Harvest Planning" },
         { title: "AgroSuperAgent+ SupplyChainManager", description: "Optimizes agricultural supply chains from farm to market with real-time tracking and demand forecasting.", category: "Supply Chain" }
       ]
    }
  };
  
  // Active solution
  const [activeSolution, setActiveSolution] = useState(tabs[activeTab].solutions[0]);
  
  // Additional QA content visibility state
  const [showQADetails, setShowQADetails] = useState(false);

  // Check if we're on the QA tab and toggle details automatically
  useEffect(() => {
    setShowQADetails(activeTab === 'qa');
  }, [activeTab]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white rounded-xl overflow-hidden shadow-soft-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                Transform Your Business With AI SuperAgents
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Our cutting-edge AI platform connects hundreds of specialized intelligent agents to automate workflows, enhance productivity, and deliver unparalleled business intelligence across every department.
              </p>
              <button className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-soft-lg">
                Schedule a Demo
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 md:mt-0 hidden md:block"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-white/20 rounded-full blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1717501218347-64853a917fd8?w=800&auto=format&fit=crop"
                  alt="AI Technology" 
                  className="w-96 h-80 object-cover rounded-2xl shadow-2xl relative z-10 border-2 border-white/30"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1652554074038-c3ec9aeb6c0d?w=800&auto=format&fit=crop";
                  }}
                />
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/20 rounded-full blur-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-center p-6 rounded-xl shadow-soft-lg hover-lift"
            >
              <div className="text-5xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-500 font-medium">AI Solutions</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white text-center p-6 rounded-xl shadow-soft-lg hover-lift"
            >
              <div className="text-5xl font-bold text-primary-600 mb-2">85%</div>
              <div className="text-gray-500 font-medium">Workflow Automation</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white text-center p-6 rounded-xl shadow-soft-lg hover-lift"
            >
              <div className="text-5xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-500 font-medium">Client Satisfaction</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white text-center p-6 rounded-xl shadow-soft-lg hover-lift"
            >
              <div className="text-5xl font-bold text-primary-600 mb-2">10x</div>
              <div className="text-gray-500 font-medium">Productivity Boost</div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific SuperAgent Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI SuperAgents are specialized for diverse industry needs, delivering tailored automation and intelligence across every business vertical.
            </p>
          </motion.div>
          
          {/* Industry Tabs */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {['software', 'it', 'qa', 'education', 'healthcare', 'finance', 'marketing', 'food', 'agriculture', 'hr'].map((tabKey, index) => (
              <motion.button
                key={tabKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => {
                  setActiveTab(tabKey);
                  setActiveSolution(tabs[tabKey].solutions[0]);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tabKey
                     ? 'bg-primary-600 text-white shadow-soft'
                     : 'bg-light text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                {tabs[tabKey].title}
              </motion.button>
            ))}
          </div>
          
          {/* Featured Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 bg-white p-8 rounded-xl shadow-soft-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">{activeSolution.title}</h3>
            <p className="text-gray-600 mb-4">{activeSolution.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-primary-600 text-sm font-medium">{activeSolution.category}</span>
              <a href="#" className="text-gray-700 hover:text-primary-600 text-sm font-medium flex items-center transition-colors">
                Learn more →
              </a>
            </div>
          </motion.div>
          
          {/* Other Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabs[activeTab].solutions.slice(1).map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 % 0.5 }}
                viewport={{ once: true }}
                className="bg-light rounded-xl overflow-hidden shadow-soft-lg hover-lift cursor-pointer"
                onClick={() => setActiveSolution(solution)}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                </div>
                <div className="px-6 py-4 bg-light-dark flex justify-between items-center">
                  <span className="text-primary-600 text-sm font-medium">{solution.category}</span>
                  <a href="#" className="text-gray-700 hover:text-primary-600 text-sm font-medium flex items-center transition-colors">
                    Learn more →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Project Videos - Only shown for tabs that have videos */}
          <ProjectVideos activeTab={activeTab} />
          
          {/* QA-specific "How It Works" section - only shown when QA tab is active */}
          {showQADetails && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 bg-white rounded-xl shadow-soft-xl overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-primary-50 p-6 rounded-xl relative hover-lift">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 -left-4 shadow-soft">1</div>
                    <h4 className="font-bold text-gray-900 mb-3 mt-2">Write test requirements in plain English</h4>
                    <p className="text-gray-700">Describe your API test scenario using natural language, including details like user count, duration, and metrics to monitor.</p>
                  </div>
                  
                  <div className="bg-primary-50 p-6 rounded-xl relative hover-lift">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 -left-4 shadow-soft">2</div>
                    <h4 className="font-bold text-gray-900 mb-3 mt-2">AI translates your description into optimized test scenarios</h4>
                    <p className="text-gray-700">Our AI engine converts your natural language instructions into efficient, optimized test cases designed for maximum performance.</p>
                  </div>
                  
                  <div className="bg-primary-50 p-6 rounded-xl relative hover-lift">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 -left-4 shadow-soft">3</div>
                    <h4 className="font-bold text-gray-900 mb-3 mt-2">View detailed performance metrics and insights</h4>
                    <p className="text-gray-700">Receive comprehensive reports with visualizations showing response times, throughput, error rates, and system performance during the test.</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6">Example Test Scenarios</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-light p-6 rounded-xl border-l-4 border-primary-600 hover-lift">
                    <h4 className="font-bold text-gray-900 mb-3">Load Testing</h4>
                    <div className="bg-light-dark p-4 rounded-lg mb-4 text-sm text-gray-700 font-mono">
                      "Run load test for login API with:<br/>
                      - 1000 concurrent users<br/>
                      - 5 minute duration<br/>
                      - Monitor response times<br/>
                      - Generate performance report"
                    </div>
                    <p className="text-gray-700">This test simulates 1000 concurrent users accessing your login API over 5 minutes, measuring response times and generating a detailed performance report.</p>
                  </div>
                  
                  <div className="bg-light p-6 rounded-xl border-l-4 border-primary-600 hover-lift">
                    <h4 className="font-bold text-gray-900 mb-3">Stress Testing</h4>
                    <div className="bg-light-dark p-4 rounded-lg mb-4 text-sm text-gray-700 font-mono">
                      "Execute stress test with:<br/>
                      - Start at 100 users<br/>
                      - Increase by 100 every minute<br/>
                      - Until system breaks<br/>
                      - Log all metrics"
                    </div>
                    <p className="text-gray-700">This test gradually increases load on your system until performance degradation occurs, helping identify your system's breaking point.</p>
                  </div>
                  
                  <div className="bg-light p-6 rounded-xl border-l-4 border-primary-600 hover-lift">
                    <h4 className="font-bold text-gray-900 mb-3">End-to-End Flow Testing</h4>
                    <div className="bg-light-dark p-4 rounded-lg mb-4 text-sm text-gray-700 font-mono">
                      "Test complete checkout flow:<br/>
                      - 1000 users browsing products<br/>
                      - 500 users adding to cart<br/>
                      - 200 users completing purchase<br/>
                      - Generate detailed report"
                    </div>
                    <p className="text-gray-700">This test simulates a real-world e-commerce scenario with users at different stages of the purchasing process, helping identify bottlenecks in your checkout flow.</p>
                  </div>
                  
                  <div className="bg-light p-6 rounded-xl border-l-4 border-primary-600 hover-lift">
                    <h4 className="font-bold text-gray-900 mb-3">API Endpoint Validation</h4>
                    <div className="bg-light-dark p-4 rounded-lg mb-4 text-sm text-gray-700 font-mono">
                      "Validate user registration API:<br/>
                      - Test with valid and invalid inputs<br/>
                      - Check response codes and messages<br/>
                      - Verify data is correctly stored<br/>
                      - Measure response times"
                    </div>
                    <p className="text-gray-700">This test ensures your user registration API correctly handles both valid and invalid inputs, with proper validation and error handling.</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="btn btn-primary py-3 px-6 transform hover:scale-105">
                    Try QA Testing Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* AI MeetSuperAgent Featured Section */}
      <section className="py-16 bg-light rounded-xl shadow-soft-lg my-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">Featured Product</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI MeetSuperAgent</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The world's first AI meeting agent that seamlessly joins virtual meetings, responds in real-time using your voice profile, adapts intelligently to conversational context, and connects to hundreds of SuperAgents simultaneously.
            </p>
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-soft-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-light p-4 rounded-lg hover-lift"
                >
                  <h4 className="font-semibold text-primary-700 mb-2">Smart Navigation</h4>
                  <p className="text-gray-700">Seamlessly switch between "AI Meeting Assistant" and "AI Meeting Bot" interface modes for different meeting contexts.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  viewport={{ once: true }}
                  className="bg-light p-4 rounded-lg hover-lift"
                >
                  <h4 className="font-semibold text-primary-700 mb-2">Multi-Agent Management</h4>
                  <p className="text-gray-700">Can create, add, name, rename or delete up to 100+ agents that can join meetings simultaneously across your organization.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-light p-4 rounded-lg hover-lift"
                >
                  <h4 className="font-semibold text-primary-700 mb-2">Advanced Agent Configuration</h4>
                  <p className="text-gray-700">For each agent, specify meeting title, phone number, meeting PIN and optional custom prompt to control behavior and responses.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  viewport={{ once: true }}
                  className="bg-light p-4 rounded-lg hover-lift"
                >
                  <h4 className="font-semibold text-primary-700 mb-2">Intelligent Call Control</h4>
                  <p className="text-gray-700">Easily initiate calls via Bland.ai with automatic PIN entry using DTMF and end calls on demand with one click.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-light p-4 rounded-lg hover-lift"
                >
                  <h4 className="font-semibold text-primary-700 mb-2">Comprehensive Call Logs</h4>
                  <p className="text-gray-700">View scrollable, timestamped logs of all call events and statuses for complete meeting audit trails.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  viewport={{ once: true }}
                  className="bg-light p-4 rounded-lg hover-lift"
                >
                  <h4 className="font-semibold text-primary-700 mb-2">Dynamic Transcript Display</h4>
                  <p className="text-gray-700">Watch real-time transcript panels showing speaker labels and conversation bubbles as the meeting progresses.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-light p-4 rounded-lg hover-lift"
                >
                  <h4 className="font-semibold text-primary-700 mb-2">Intelligent Auto Summary</h4>
                  <p className="text-gray-700">Automatically generates structured meeting summaries with Overview, Key Points, Action Items, and Next Steps.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.45 }}
                  viewport={{ once: true }}
                  className="bg-light p-4 rounded-lg hover-lift"
                >
                  <h4 className="font-semibold text-primary-700 mb-2">Flexible Export Options</h4>
                  <p className="text-gray-700">One-click clear or TXT-export functionality for both transcripts and summaries to integrate with other tools.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-light p-4 rounded-lg hover-lift"
                >
                  <h4 className="font-semibold text-primary-700 mb-2">Seamless Persistence</h4>
                  <p className="text-gray-700">Save agent configurations locally (IndexedDB) and load/delete them from an intuitive "Saved Agents" modal interface.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.55 }}
                  viewport={{ once: true }}
                  className="bg-light p-4 rounded-lg hover-lift"
                >
                  <h4 className="font-semibold text-primary-700 mb-2">Unlimited Cloud Storage</h4>
                  <p className="text-gray-700">Forever meeting storage through AWS cloud with the ability to retrieve any stored meeting information anytime, from anywhere.</p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <button className="btn btn-primary py-3 px-6 transform hover:scale-105">
                  Try AI MeetSuperAgent Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SuperAgent Automation Terminal for QA */}
      <section className="py-16 bg-white rounded-xl shadow-soft-lg mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">QA Engineering Tool</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SuperAgent Automation Terminal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A specialized testing interface that enables QA engineers to automate testing workflows using simple natural language commands, eliminating the need for complex test scripts.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-black rounded-lg overflow-hidden shadow-soft-lg">
                <div className="flex items-center bg-gray-800 px-4 py-2">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-200 text-sm font-mono">SuperAgent QA Terminal v2.1.0</div>
                </div>
                <div className="p-4 font-mono text-sm text-green-400">
                  <div>$ test "Verify user login with valid credentials"</div>
                  <div className="text-gray-400 ml-2">Analyzing test requirement...</div>
                  <div className="text-gray-400 ml-2">Generating test steps...</div>
                  <div className="text-white ml-2">Executing 7 test steps across login workflow</div>
                  <div className="text-white ml-2">✓ Navigate to login page</div>
                  <div className="text-white ml-2">✓ Enter username "test_user"</div>
                  <div className="text-white ml-2">✓ Enter password "********"</div>
                  <div className="text-white ml-2">✓ Click login button</div>
                  <div className="text-white ml-2">✓ Verify redirect to dashboard</div>
                  <div className="text-white ml-2">✓ Verify username appears in header</div>
                  <div className="text-white ml-2">✓ Verify all dashboard elements loaded</div>
                  <div className="text-gray-400 ml-2">Test completed successfully. Duration: 3.42s</div>
                  <div className="text-gray-400 ml-2">Test report saved to ./reports/login_test_05112025.html</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">QA Features</h3>
              <div className="space-y-4">
                <div className="bg-light p-4 rounded-lg hover-lift">
                  <h4 className="font-semibold text-primary-700 mb-1">Natural Language Test Creation</h4>
                  <p className="text-gray-700">Write tests in plain English sentences that automatically get translated into executable test steps without coding.</p>
                </div>
                <div className="bg-light p-4 rounded-lg hover-lift">
                  <h4 className="font-semibold text-primary-700 mb-1">Cross-Browser & Cross-Platform</h4>
                  <p className="text-gray-700">Execute the same NLP test commands across multiple browsers, devices, and operating systems simultaneously.</p>
                </div>
                <div className="bg-light p-4 rounded-lg hover-lift">
                  <h4 className="font-semibold text-primary-700 mb-1">Visual Regression Testing</h4>
                  <p className="text-gray-700">Automatically detect UI changes with pixel-perfect comparisons triggered by simple natural language commands.</p>
                </div>
                <div className="bg-light p-4 rounded-lg hover-lift">
                  <h4 className="font-semibold text-primary-700 mb-1">AI-Powered Test Maintenance</h4>
                  <p className="text-gray-700">Tests automatically adapt to minor UI changes, reducing maintenance overhead and test flakiness.</p>
                </div>
                <div className="bg-light p-4 rounded-lg hover-lift">
                  <h4 className="font-semibold text-primary-700 mb-1">Continuous Integration</h4>
                  <p className="text-gray-700">Seamlessly integrate with CI/CD pipelines via CLI commands for automated testing in your deployment workflow.</p>
                </div>
              </div>
              <div className="mt-6">
                <a href="#" className="text-primary-600 font-medium hover:text-primary-700 flex items-center transition-colors">
                  View QA Terminal Documentation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuperAgentPortfolio;
      