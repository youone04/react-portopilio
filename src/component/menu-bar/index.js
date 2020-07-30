import React, {Component,Fragment} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './menuBar.css';
import gambarPortopolio from "../../assets/gambar1.png";
class MenuNavbar extends Component {

    scrollTop = () => {
        scroll.scrollTop();
    };
    render(){
        return(
            <Fragment>
                <div className="navigation">
                        <div className="gambar-portopolio">
                            <img src={gambarPortopolio} alt="gambar portopolio" />
                        </div>
                        <p><b>Yudi Gunawan</b></p>
                    <div className="navbar">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Skills</Link>
                        <Link
                            activeClass="active"
                            to="kontak"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >kontak</Link>

                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</Link>

                        <Link
                            activeClass="active"
                            to="halamanutama"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Home</Link>

                    </div>
                </div>
                </Fragment>
        )
    }
}
export default MenuNavbar;