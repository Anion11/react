import React from 'react';
import "../index.css";
class FourthContainerLeft extends React.Component{
    render(){
        return (
            <div className="fourthContainerMainLeft">
                <div className="fourthContainerMainLeftImg">
                    <img id="fourthContainerMainLeftImg1" src= {this.props.img1} alt=''></img>
                    <img id="fourthContainerMainLeftImg2" src= {this.props.img} alt=''></img>
                </div>
            </div>
        )
    }
}

export default FourthContainerLeft