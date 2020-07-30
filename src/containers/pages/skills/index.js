import React , {Component , Fragment} from 'react';
import './skills.css';
class Skills extends Component{
    render(){
        return(
            <Fragment>
                 <div className="container-halaman-skills" >
                    <div className="halaman-skills">
                        <div className="judul-halaman-skills" id="skills">
                            <h3>skills me</h3>
                            <img src="https://www.kindpng.com/picc/m/317-3179993_skills-icon-png-transparent-png.png"alt="skills" />
                        </div>
                        <div className="isi-halaman-skills">
                            <div className="container-isi-skill">
                            <p className="tulisan-css">CSS</p>
                            <div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><p className="skils-css">70% </p> <br/>
                            <p className="tulisan-css">HTML</p>
                            <div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div> <div className="kotak-css"></div><p className="skils-css">80%</p><br/>
                            <p className="tulisan-css">Javascript</p>
                            <div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div> <div className="kotak-css"></div><p className="skils-css">70%</p><br/>
                            <p className="tulisan-css">PHP </p>
                            <div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div><div className="kotak-css"></div> <div className="kotak-css"></div> <p className="skils-css">70% </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Skills;