import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectSection from "./sections/ProjectSection";
import Layout from "./layouts/Layout";
import Lenis from "lenis";

// TODO
// określić design dla sekcji z projektami mobilka/desktop
// prawdopodobnie coś pokroju opis po lewej, po prawej zdjęcie i coś może z rozwinięciem ale raczej zbyteczne bo mało info
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
