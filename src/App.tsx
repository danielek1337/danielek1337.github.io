import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectSection from "./sections/ProjectSection";
import Layout from "./layouts/Layout";
import Lenis from "lenis";

// TODO
// ogarnac czemu animacje na mobilce są polagowane
// dodać burger menu i stylowanie pod mobilke
//
// TODO

function App() {
  new Lenis({
    autoRaf: true,
  });

  return (
    <>
      <Navbar />
      <Header />
      <Layout>
        <ProjectSection />
      </Layout>
    </>
  );
}

export default App;
