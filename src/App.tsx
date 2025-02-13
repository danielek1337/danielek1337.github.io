import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectSection from "./sections/ProjectSection";
import Layout from "./layouts/Layout";
import Lenis from "lenis";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

function App() {
  new Lenis({
    autoRaf: true,
  });

  return (
    <>
      <Navbar />
      <Header />
      <Layout>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
