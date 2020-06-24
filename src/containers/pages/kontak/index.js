import React, {Component , Fragment} from 'react';
import './kontak.css';

class Kontak extends Component{
    render(){
        return(
            <Fragment>
                <div className="kontainer-kontak">
                    <div className="halaman-kontak">
                        <div className="judul-halaman-kontak"  id="kontak">
                            <h3>Kontak</h3>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzjfYVYy6vimh-C4IlX-Mn-cjLw0DTI9F0VkJ1wOJQVolKFbn0&usqp=CAU" alt="kontak" />
                        </div>
                        <div className="isi-halaman-kontak">
                            <p>No Tlpn : +6285816790359</p>
                            <p>Wa: +6282269687374</p>
                            <p>Linkedin : https://www.linkedin.com/in/yudi-gunaone-b316a0170/</p>
                            <p>Github : https://github.com/youone04</p>
                            <p >Email : yudi.gunaone87@gmail.com</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Kontak;