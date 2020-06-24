import React,{Component ,Fragment} from 'react';
import './atom.css';
export class HomeMobile extends Component{
    render(){
        return(
            <Fragment>
                <div className="home-mobile">
                    <img src="data:image/png;base64,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" alt="mobile home" />
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT057ktuIWjKYRDQNgtKoLP-CJHDi7JHX0Tepxg4AyiHMVrSBUY&usqp=CAU" alt="mobile about" />
                </div>
            </Fragment>
        )
    }
}
export class KontakMobile extends Component{
    render(){
        return(
            <div className="kontak-mobile">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpCogffN_uAF5-z89SYPONQ7DZ9YrfnbNz6VixzGNNAv1MpZE9&usqp=CAU" alt="mobile kontak" />
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