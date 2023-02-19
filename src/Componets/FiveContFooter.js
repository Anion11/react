import React from 'react';
import "../index.css";
import CISCO from "../Img/CISCO.png"
import Microsoft from "../Img/Microsoft.png";
import Airbnb from "../Img/airbnb.png";
import Ebay from "../Img/Ebay.png"
import Uber from "../Img/Uber.png";

export const FiveContFooter = () => {
    return(
        <div className="fivesContainerFooter">
            <div className="fivesContainerPartnersImg">      
                <img src={Airbnb} alt=''/>            
                <img src={CISCO} alt=''/>
                <img src={Ebay} alt=''/>
                <img src={Uber} alt=''/>
                <img src={Microsoft} alt=''/>
            </div>
                <div className="fivesContainerFooterText">
                    <span>Give us a Call 1-888-111-2222 and we can set you up, or <a href="/#" className="pricingPlans">check our pricing plans</a></span>
                </div>
        </div>
    )
}