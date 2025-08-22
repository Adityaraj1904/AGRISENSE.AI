import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LoginSignupPage from "./components/LoginSignupPage";
import PredictionsPage from "./components/PredictionsPage";
import ViewInsightsPage from "./components/ViewInsightsPage";


import Navbar from "./components/Navbar";        // Your full homepage navbar
import BackNavbar from "./components/BackNavbar"; // Simple back button navbar

import Footer from "./components/Footer";
import "./App.css";

import CropYieldPage from "./components/CropYieldPage";
import FertilizerPage from "./components/FertilizerPage";
import DiseaseDetectionPage from "./components/DiseaseDetectionPage";

import aboutus from "./components/asset/aboutus.png"; 
import cropImg from "./components/asset/crop.png";
import fertilizerImg from "./components/asset/fertilizer.png";
import diseaseImg from "./components/asset/disease.png";

// NavbarSwitcher to switch navbar based on current route
function NavbarSwitcher() {
  const location = useLocation();
  return location.pathname === "/" ? <Navbar /> : <BackNavbar />;
}

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 200);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(percent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <NavbarSwitcher />
      <Routes>
        <Route path="/login" element={<LoginSignupPage />}/>
        <Route path="/predictions" element={<PredictionsPage />} />
        <Route path="/View Insights" element={<ViewInsightsPage />} />
        

        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }} />
              
              <main>
                {/* Hero Section */}
                <section id="hero" className="hero-section">
                  <h1>
                    SMART FARMING <span className="blue">MADE SIMPLE</span> WITH<span className="blue"> AI</span>
                  </h1>
                  <p>
                    AGRISENSE.AI helps farmers grow better crops, choose the right fertilizers, and fight plant diseases — all with the power of machine learning.
                  </p>
                  <div>
                    <a href="/predictions" className="hero-btn">🌾 Predict Now</a>
                    <a href="/View Insights" className="hero-btn" rel="noopener noreferrer">📘 Learn More</a>
                  </div>
                </section>

                {/* About Us Section */}
                <section id="about" className="why-section">
                  <div className="section-title about-title">About Us</div>
                  <div className="why-card">
                    <img src={aboutus} alt="Soil in hand" className="why-img" />
                    <div>
                      <h2>WHY AGRISENSE ?</h2>
                      <p>
                        AGRISENSE.AI is an integrated platform that combines three powerful machine learning models to assist farmers, hobbyists, and agriculture enthusiasts.
                      </p>
                      <ol>
                        <li>
                          <strong>Crop Recommendation Model:</strong> Takes user-input details such as nitrogen, potassium, phosphorous levels, temperature, humidity, and pH of the soil. Using this information, it predicts the most suitable crop varieties that can be grown, ensuring optimal yield and resource utilization.
                        </li>
                        <li>
                          <strong>Plant Disease Detection:</strong> Keeping your plants healthy is crucial for a successful harvest. Our second ML model is designed to identify and diagnose plant diseases. Users can upload images of their plants, and the model will provide instant feedback, helping farmers take timely action to protect their crops.
                        </li>
                        <li>
                          <strong>Fertilizer Recommender:</strong> Recommends the Fertilizer Required for the plant based on disease detected and the type of soil. (Yet to release)
                        </li>
                      </ol>
                    </div>
                  </div>
                </section>

                {/* Features Section */}
                <section id="features" className="features-section">
                  <div className="section-title features-title">Features</div>
                  <div className="features-cards">
                    <div className="feature-card">
                      <img src={cropImg} alt="Crop Recommendation" className="feature-img" />
                      <div className="feature-content">
                        <b>Crop Yield</b>
                        <p>Recommendation about the type of crops to be cultivated which is best suited for the respective conditions.</p>
                        <Link to="/crop-yield">
                          <button className="details-btn">🌱View Details</button>
                        </Link>
                      </div>
                    </div>
                    <div className="feature-card">
                      <img src={fertilizerImg} alt="Fertilizer Recommender" className="feature-img" />
                      <div className="feature-content">
                        <b>Fertilizer Suggestion</b>
                        <p>Recommendation about the type of fertilizer best suited for the particular soil and the recommended crop.</p>
                        <Link to="/fertilizer">
                          <button className="details-btn">🧪View Details</button>
                        </Link>
                      </div>
                    </div>
                    <div className="feature-card">
                      <img src={diseaseImg} alt="Plant Disease Detection" className="feature-img" />
                      <div className="feature-content">
                        <b>Crop Disease</b>
                        <p>Predicting the name and causes of crop disease and suggestions to cure it.</p>
                        <Link to="/disease-detection">
                          <button className="details-btn">🩺View Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Us Section */}
                <section id="contact" className="contact-section">
                  <div className="section-title contact-title">Contact Us</div>
                  <div className="contact-wrapper">
                    <div className="contact-info">
                      <h2>Get In Touch</h2>
                      <p>
                        Have questions or need support?<br />
                        Reach out to us using the form or via the details below.<br /><br />
                        <strong>Email:</strong> support@agri.ai<br />
                        <strong>Phone:</strong> +91-12345-67890<br />
                        <strong>Address:</strong><br />
                        1st Floor, Agri Tower,<br />
                        Innovation Park, Mumbai, India
                      </p>
                    </div>
                    <form className="contact-form">
                      <label>
                        Name
                        <input type="text" placeholder="Your Name" required />
                      </label>
                      <label>
                        Email
                        <input type="email" placeholder="Your Email" required />
                      </label>
                      <label>
                        Message
                        <textarea placeholder="Your Message" required></textarea>
                      </label>
                      <button type="submit" className="contact-btn">Send</button>
                    </form>
                  </div>
                </section>

                {/* Back To Top Button */}
                {showTopBtn && (
                  <button
                    className="back-to-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Back to Top"
                    title="Back to Top"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#2563eb" />
                      <path d="M8 14l4-4 4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </main>
            </>
          }
        />

        {/* Feature Pages */}
        <Route path="/crop-yield" element={<CropYieldPage />} />
        <Route path="/fertilizer" element={<FertilizerPage />} />
        <Route path="/disease-detection" element={<DiseaseDetectionPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
