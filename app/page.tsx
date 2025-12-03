"use client";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BottomBackground from "./components/BottomBackground";
import TopBackground from "./components/TopBackground";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      {/* Wrapper for About and Certifications with "arriba" SVG */}
      <div className="relative">
        <TopBackground />

        <CertificationsSection />
      </div>

      <SkillsSection />
      <PortfolioSection />

      {/* Wrapper for Portfolio and Services with "abajo" SVG */}
      <div className="relative">
        <BottomBackground />

        <ServicesSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
