import React, { useEffect, useState } from 'react';
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
    const [buttonFullText, setButtonFullText] = useState(false);
    const [buttonHideText, setButtonHideText] = useState(false);
    const [commentText, setCommentText] = useState('');
    const countStar = props.Stars;
    var text = props.ComentText;
    const userImg = props.UserImg;
    const userName = props.userName;
    const userResidency = props.userResidency;
    const viewSymCount = 200;
    const spliceText = () => {
        var textSplice = ' ';
        for(let i = 0; i < viewSymCount; i++)
        {
                textSplice += text[i];
        }
        setCommentText(textSplice);
    }
    useEffect(() => {
        setButtonFullText(false);
        if(text.length > viewSymCount)
        {  
            setButtonFullText(true);
            spliceText();
            
        }
        else
        {
            setCommentText(text);   
        }
    }, [text])
    const fullText = () => {
        setButtonFullText(false);
        setButtonHideText(true);
        setCommentText(text);
    }
    
    const hideText = () => {
        setButtonFullText(true);
        setButtonHideText(false);
        spliceText();
    }
   
   
        return( 
            <div className="fivesContainerFeedback">
                <div className="fivesContainerFeedbackInfo">
                    <StarsCount Count = {countStar} />
                    <div className="fivesContainerFeedbackText">
                        <span>
                            {commentText}
                            <br></br>
                            {buttonFullText && <button onClick={fullText}>Читать дальше</button>}
                            {buttonHideText && <button onClick={hideText}>Скрыть</button>}
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