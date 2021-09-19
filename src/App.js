import { Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from './SectionSeven';
import SectionEight from "./SectionEight";
import Footer from './Footer'

function App() {
  return (
    <Route path='/' render={routeProps =>
      <Home>
        <NavBar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <Footer />
      </Home>
    } />
  )
}

export default App;
