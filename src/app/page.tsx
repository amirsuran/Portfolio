import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Skills from "@/components/organisms/Skills";
import Projects from "@/components/organisms/Projects";
import Resume from "@/components/organisms/Resume";
import Contact from "@/components/organisms/Contact";
import Footer from "@/components/organisms/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background-DEFAULT to-background-DEFAULT dark:from-background-dark dark:to-[#1e293b]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
