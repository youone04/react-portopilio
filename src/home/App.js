import React,{Fragment} from 'react';
import HalamanUtama from '../containers/pages/halaman_utama';
import About from '../containers/pages/about';
import MenuNavbar from '../component/menu-navbar';
import Kontak from '../containers/pages/kontak';
import './home.css';
import NavbarMobile from '../component/navbar-mobile';
import { Footer } from '../component/atom';
// digunakan sebagai router

function App() {
  return (
    // <Router>
      <Fragment>
            <MenuNavbar />
            <HalamanUtama id="halamanutama" />
            <About id="about" />
            <Kontak id="kontak" />
            <Footer />
            <NavbarMobile />
      </Fragment>
    // </Router>
  );
}
export default App;
