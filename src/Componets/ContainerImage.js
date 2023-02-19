import React from 'react';
import "../index.css";
import ImageFirstContainer from "./ImgeFirstCont.js"
import Facebook from "../Img/facebook.png";
import instagramm from "../Img/instagramm.png";
import twitter from "../Img/twitter.png";
import inNetw from "../Img/in.png";
class ContainerImg extends React.Component{
    render(){
        return (
            <div className="containerImage">
                        <div className="imgTop">
                            <div className='posImgBoxFirst'>
                                <ImageFirstContainer />
                                <div className="containerSocialNetwork">
                                    <div className="socialNetwork">
                                        <a href="/#"><img src={Facebook} alt='' id='netWork1'/></a>
                                        <a href="/#"><img src={instagramm} alt='' id='netWork2'/></a>
                                        <a href="/#"><img src={twitter} alt = '' id='netWork3'/></a>
                                        <a href="/#"><img src={inNetw} alt = '' id='netWork4'/></a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                </div> 
        )
    }
}
export default ContainerImg;