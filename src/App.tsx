import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import Footer from "./components/footer";
import Services from "./pages/services";


function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      {/* <Projects/>
      <Contact/> */}
      <Footer/>
    </>
  )
}

export default App
