import React from 'react';
import "../index.css";
import SecondContainer1 from "../Img/SecondContainer.png";
import SecondContainer2 from "../Img/SecondContainer2.png";
import SecondContainer3 from "../Img/SecondContainer3.png";
import SecondContainerCard from './SecondContainerCard';
import Hr from './Hr';
class SecondContainer extends React.Component{
    render(){
        return (
            <div className="secondContainer"><a name = "About" href= "/#">{String.fromCharCode(160)}</a>
                <div className="secondContainerWrapper">
                    <div className="headingText">How it works?</div>  
                    <div className="aboutWorksContainer">
                        <SecondContainerCard img = {SecondContainer1} headingCard = {"Research Suburbs"}
                         textInCard = {"Wonder twenty hunted and put income set desire expect. Am cottage calling."} CardId = {"First"} CardIdImg = {""}/>
                        <Hr Id = {"First"} colorFirst = {"purple"} colorSecond = {"blue"}/>
                        <SecondContainerCard img = {SecondContainer3} headingCard = {"Instant Valuation"}
                         textInCard = {"Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight."} CardId = {"Second"} CardIdImg = {1}/>
                         <Hr Id = {"Second"} colorFirst = {"blue"} colorSecond = {"purple"}/>
                        <SecondContainerCard img = {SecondContainer2} headingCard = {"Track Property"}
                         textInCard = {"Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible."} CardId = {"Third"} CardIdImg = {2}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default SecondContainer