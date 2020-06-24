import React,{Component , Fragment} from 'react';
import './about.css';
class About extends Component{
    render(){
        return(
            <Fragment>
                <div className="container-halaman-about" >
                    <div className="halaman-about">
                        <div className="judul-halaman-about" id="about">
                            <h3>About me</h3>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFTe4hKnnZFZ-mBxy5yAPRKD2Z66x8dTRL0l_en6PCCzQkjsXF&usqp=CAU" alt="about" />
                        </div>
                        <div className="isi-halaman-about">
                            <p>Nama : yudi gunawan</p>
                            <p>Lahir : Penanggungan,Tanggamus, Lampung</p>
                            <p>ALamat : Jl. Kihajar Dewantar No 4. desa Sumanda</p>
                            <p>Hobi : Bermain sepakbola</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default About;