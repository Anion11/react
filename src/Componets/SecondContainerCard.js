import React from 'react';
import "../index.css";
class SecondContainerCard extends React.Component{
    render(){
        return (
            <div className="cardAbout" id={"cardAboutArea" + this.props.CardId}>
                <div className={"cardAboutImg" + this.props.CardIdImg} >
                    <img src={this.props.img} alt=''></img></div>
                <div className="TextCard">
                    <div className="headingCard">{this.props.headingCard}</div>
                    <div className="textInCard">{this.props.textInCard}</div>
                </div>
            </div>
        )
    }
}
export default SecondContainerCard