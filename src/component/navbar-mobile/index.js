import React ,{Component ,Fragment} from 'react';
import {Link} from 'react-scroll';
import'./navbar-mobile.css';
import { HomeMobile, AboutMobile, KontakMobile } from '../atom';

class NavbarMobile extends Component{
    render(){
        return(
            <Fragment>
                <div className="navbar-mobile">
                    <Link
                        activeClass ="active"
                        to="halamanutama"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    ><HomeMobile/>
                    </Link>
                    <Link
                    activeClass ="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    <AboutMobile />
                    </Link>
                    <Link
                    activeClass ="active"
                    to="kontak"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    <KontakMobile />
                    </Link>
                </div>
            </Fragment>
        );
    }
}
export default NavbarMobile;