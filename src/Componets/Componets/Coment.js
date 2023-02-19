import React from 'react';
import "../index.css";
import Star from "../Img/Star.png";
function StarsCount(props) {
    var stars = [];
    for(let i = 0; i < props.Count; i++){
        stars.push (
            <img key={i} src={Star} alt=''/>
         )
    }
    return(
        <div className="fivesContainerFeedbackRate">
           {stars}
        </div>
    )
    
}
export const Coment = props => {
    const countStar = props.Stars;
    const text = props.ComentText;
    const userImg = props.UserImg;
    const userName = props.userName;
    const userResidency = props.userResidency;
        return( 
            <div className="fivesContainerFeedback">
                <div className="fivesContainerFeedbackInfo">
                    <StarsCount Count = {countStar} />
                    <div className="fivesContainerFeedbackText">
                        <span>
                            {text}
                        </span>
                    </div>
                    <div className="fivesContainerFeedbackProfile">
                        <a href="/#">
                            <img id="userPhoto" alt='' src={userImg}/>
                            <div className="userInfo">
                                <span id="userName">{userName}</span><br/>
                                <span id="userResidency">{userResidency}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>)
    }
    

