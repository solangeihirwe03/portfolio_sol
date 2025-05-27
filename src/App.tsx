import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import Footer from "./components/footer";
import Services from "./pages/services";


function App() {

  return (
    <div className="font-poppins">
      <Header/>
      <Home/>
      <About/>
      <Services/>
      {/* <Projects/>
      <Contact/> */}
      <Footer/>
    </div>
  )
}

export default App
