import React from 'react';
import "../index.css";
import ForthContainer1 from "../Img/ForthContainer1.png"
import ForthContainer from "../Img/ForthContainer.png"
import FourthContainerLeft from './FourthContainerLeft';
import FourthContainerRight from './FourthContainerRight';
class FourthContainer extends React.Component{
    render(){
        return (
            <div className="fourthContainer"><a name = "Portfolio" className='PortfolioA' href= "/#">{String.fromCharCode(160)}</a>
               <div className="fourthContainerHead"><span>Featured Listing of the Week</span></div>
               <div className="fourthContainerMain">
                    <FourthContainerLeft img1 = {ForthContainer1} img = {ForthContainer}/>
                    <FourthContainerRight />
               </div>
           </div>
        )
    }
}

export default FourthContainer