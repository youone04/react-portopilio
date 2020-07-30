import React,{Component , Fragment} from 'react';
import './halaman_utama.css';
import gambarPortopolio from '../../../assets/gambar1.png';
class HalamanUtama extends Component{
    // componentDidMount(){
    //     const splashScreen = document.getElementById('splashScreen');
    //         setInterval(function(){
    //             window.onload = () =>{
    //                 if(splashScreen){
    //                     splashScreen.remove();
    //                 }
    //             }
    //         })
    // }
    render(){
        return(
            <Fragment>
                <div className="container-halaman-utama" id="halamanutama">
                        <div className="halaman-utama">
                            <div className="judul-halaman-utama">
                                <h3>Profil</h3>
                            </div>
                            <div className="gambar-portopolio-halaman-utama">
                                <img src={gambarPortopolio} alt="gambar portopolio"/>
                            </div>
                            <div className="isi-halaman-utama">
                            <i>
                                <p> 
                                        Hallo... Nama saya Yudi Gunawan, saya berasal dari Tanggamus,Lampung, 
                                        Indonesia, saya adalah seorang programmer (front-end dan backend).
                                        saya sangat tertarik sekali dengan dunia pemroggraman bahkam setiap hari
                                        tidak ada kata "tidak ngoding" . <br/><br/>

                                        Saya memang suka dengan hal yang berbau teknologi, ya saya pernah mendengar
                                        kutipan bahwa <b>"dengan teknologi kita dapat menguaasi dunia"</b>. Ya
                                        mungkin itu saja perkenalan awal saya, profil lebih lengkap bisa menekan menguaasi
                                        yang telah di sediakan. Atas perhatiannya terimakasih.
                                            
                                </p>
                            </i>
                            </div>
                        </div>
                </div>
            </Fragment>
        )
    }
}
export default HalamanUtama;