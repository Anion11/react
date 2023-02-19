import React from 'react';
import "../index.css";
import Buzz from "../Img/Buzz.png";
import Chase from "../Img/Chase.png";
import Microsoft from "../Img/Microsoft.png";
import GUCC from "../Img/GUCC.png";
import Airbnb from "../Img/airbnb.png";
import Uber from "../Img/Uber.png";
class Partners extends React.Component{
    
    render(){
        return (
            <div className="partners">
                    <div className="partnersInf">
                        <span className='partnersBlock'>Our Amazing Partners</span>
                        <div className="partnersImg">                  
                            <img src={Buzz} alt=''/>
                            <img src={Chase} id='imgEr' alt=''/>
                            <img src={Microsoft} alt=''/>
                            <img src={GUCC} alt=''/>
                            <img src={Airbnb} alt=''/>
                            <img src={Uber} alt=''/>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Partners;