import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import Loader from "./components/utils/Loader";

// Pages (with lazy loading for better performance)
const Home = lazy(() => import("./pages/Home"));
const Education = lazy(() => import("./pages/Education"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Experience = lazy(() => import("./pages/Experience"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  useEffect(() => {
    // You can add any global effects here
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App min-h-screen flex flex-col bg-gradient-to-br from-light to-light-dark">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
