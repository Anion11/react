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
    const viewSymCount = 300;
    const spliceText = () => {
        var textSplice = ' ';
        var ok = true;
        var i = 0;
        while(i < viewSymCount && ok)
        {
            if(i > viewSymCount - 50 && text[i + 1] === " ")
            {
                ok = false;
            }
            textSplice += text[i];
            i++;
        }
        setCommentText(textSplice);
    }
    useEffect(() => {
        const spliceText = () => {
            var textSplice = ' ';
            var ok = true;
            var i = 0;
            while(i < 300 && ok)
            {
                if(i > 250 && text[i + 1] === " ")
                {
                    ok = false;
                }
                textSplice += text[i];
                i++;
            }
                    
            
            setCommentText(textSplice);
        }
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
                <div className="fivesContainerFeedbackInfoWraper">
                    <div className="fivesContainerFeedbackInfo">
                        <div className="fivesContainerFeedbackText">
                            <StarsCount Count = {countStar} /> 
                            <span>
                                {commentText}
                                {buttonFullText && <span>...<button className ="buttonFullText" onClick={fullText}>Читать дальше</button></span>}
                                {buttonHideText && <span>&nbsp;<button className ="buttonFullText" onClick={hideText}>Скрыть</button></span>}
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
                </div>
            </div>)
}