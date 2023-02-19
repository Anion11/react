import React from 'react';
import "../index.css";
import BtnAndText from "./BtnAndText.js"
import ContainerImg from "./ContainerImage.js";
import Partners from "./Partners.js";

class FirstContainer extends React.Component{
    
    render(){
        return (
            <div className='firstContainer'>
                <div className="blueBg"></div>
                <BtnAndText />
                <ContainerImg/>
                <Partners />
            </div>
        )
    }
}
export default FirstContainer