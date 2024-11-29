import AboutSection from "./Components/AboutSection";
import BlogSection from "./Components/BlogSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ProjectsSection from "./Components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container px-12 py-4 mx-auto mt-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
