import React ,{Fragment} from 'react';
import './App.css';
import MenuNavbar from '../component/menu-bar';
import About from '../containers/pages/about';
import HalamanUtama from '../containers/pages/halaman_utama';
import Kontak from '../containers/pages/kontak';
import NavbarMobile from '../component/navbar-mobile';
import { Footer } from '../component/atom';
import Skills from '../containers/pages/skills';
function App() {
  return (
      <Fragment>
          <MenuNavbar/>
          <HalamanUtama /><br/><br/>
          <About/><br/><br/>
          <Kontak /><br/><br/>
          <Skills />
          <Footer />
          <NavbarMobile />
      </Fragment>
  );
}
export default App;
