import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectSection from "./sections/ProjectSection";
import MainLayout from "./layouts/MainLayout";
import Layout from "./layouts/Layout";
import Lenis from "lenis";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

function App() {
  new Lenis({
    autoRaf: true,
  });

  return (
    <MainLayout>
      <Header />
      <Layout>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </Layout>
      <Footer />
    </MainLayout>
  );
}

export default App;
