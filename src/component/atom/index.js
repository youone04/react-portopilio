import React,{Component ,Fragment} from 'react';
import './atom.css';
export class HomeMobile extends Component{
    render(){
        return(
            <Fragment>
                <div className="home-mobile">
                    <i className="fa fa-home fa-3x" aria-hidden="true"></i>
                </div>
            </Fragment>
        )
    }
}

export class AboutMobile extends Component{
    render(){
        return(
            <Fragment>
                <div className="about-mobile">
                <i className="fa fa-info-circle fa-3x" aria-hidden="true"></i>
                </div>
            </Fragment>
        )
    }
}
export class KontakMobile extends Component{
    render(){
        return(
            <div className="kontak-mobile">
                    <i className="fa fa-phone fa-3x" aria-hidden="true"></i>
            </div>
        )
    }
}
export class Footer extends Component{
    render(){
        return(
            <Fragment>
                <footer>
                    <p>Yudi Gunawan &#169; 2020 </p>
                </footer>
            </Fragment>
        )
    }
}
export class SkillsMobile extends Component{
    render(){
        return(
            <Fragment>
                <div className="skills-mobile">
                    <i className="fa fa-percent fa-3x" aria-hidden="true"></i>
                </div>
            </Fragment>
        )
    }
}