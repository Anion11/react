import React from 'react';
import "../index.css";
import { Coment } from './Coment';
import User from "../Img/user.png";
import { useState } from "react";
import Close from "../Img/modalClose.png";
import Star from "../Img/Starx3.png";
var  arrComment = [
    {
        id: 0,
        Stars: 1,
        CommentText: "Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described. Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described. Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described. Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described. Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described. Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.",
        UserImg: User,
        userName:"Jane Cooper",
        userResidency: "Los Angeles, CA"
    },
    {
        id: 1,
        Stars: 1,
        CommentText: "123",
        UserImg: User,
        userName:"Jane Coop",
        userResidency: "Los Angeles, CA"
    },
    {
        id: 2,
        Stars: 2,
        CommentText: "qwe",
        UserImg: User,
        userName:"Jane Pope",
        userResidency: "Los Angeles, CA"
    },
    {   
        id: 3,
        Stars: 4,
        CommentText: "ВАУУУ",
        UserImg: User,
        userName:"Jane Pope",
        userResidency: "Los Angeles, CA"
    },
    {
        id: 4,
        Stars: 4,
        CommentText: "5555555555555555",
        UserImg: User,
        userName:"Jane Pooooo",
        userResidency: "Los Angeles, CA"
    }
];
var lastId = arrComment[arrComment.length - 1].id;
export function switchRightComment(comentComp)
{
    var arr = [];
    if(comentComp[2].props.id < arrComment.length )
    {
        for(let i = 0; i < 3; i++)
        {
            arr[i] = arrComment[comentComp[i].props.id + 1];
        }
       
    }
    return arr;
}
export function switchLeftComment(comentComp)
{
    var arr = [];
    if(comentComp[0].props.id > 0)
    {
        for(let i = 0; i < 3; i++)
        {
            arr[i] = arrComment[comentComp[i].props.id - 1];
        }
    }
    return arr;
}
export function switchNo(comentComp)
{
    var arr = [];
    if(comentComp[0].props.id > 0)
    {
        for(let i = 0; i < 3; i++)
        {
            arr[i] = arrComment[comentComp[i].props.id];
        }
    }
    return arr;
}
export function pushComm(arr){
    var arrPush = []; 
    for(let i = 0; i < 3; i++)
    {
        arrPush.push(
            <Coment key = {i} id = {arr[i].id} Stars = {arr[i].Stars} ComentText = {`${arr[i].CommentText}`}
                UserImg = {arr[i].UserImg} userName = {`${arr[i].userName}`} userResidency = {`${arr[i].userResidency}`} />
        ) 
    }
    return arrPush;
}

export const FiveContForm = (props) => {
    const body = document.body;
    const html = document.querySelector('html')
    const starImg = document.getElementsByClassName("starImg")
    const setShowButton = props.setShowButton;
    const scrollY = props.scrollY;
    const [userName, setUserName] = useState("");
    const [userResidency, setUserResidency] = useState("");
    const [commentText, setCommentText] = useState("");
    const [stars, setStars] = useState("");
    const [countStar, setCountStar] = useState(0);
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    const closeDialog = () => {
        setShowButton(true);
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        html.style.scrollBehavior = "auto"
        window.scrollTo({
            top: parseInt(scrollY || '0') * -1
        });
        html.style.scrollBehavior = "smooth"    
      }
    const changeStarOnMouseOver = (id)=>{
        for (var i = 0; i < 5; i++){
            starImg[i].style.opacity = "0.4"
        }
        for (i = 0; i < id; i++){
            starImg[i].style.opacity = "1"
        }
    } 
    const hideStarOnMouseOut = ()=>{
        if (countStar === 0){
            for (var i = 0; i < 5; i++){
                starImg[i].style.opacity = "0.4"
            }
        }
        else{
            for (i = 0; i < countStar; i++){
                starImg[i].style.opacity = "0.9"
            }
            for (i = countStar; i < 5; i++){
                starImg[i].style.opacity = "0.4"
            }
        }
    } 
    const changeStarOnClick = (id)=>{
        setStars(id); 
        setCountStar(id)
        for (var i = 0; i < id; i++){
            starImg[i].style.opacity = "1"
        }
    } 
    return(
        <div className='fivesContainerForm' >
            <div className='modalTable'>
                <div className='modalCell'>
                    <form action="" method="get">
                        <button className='fivesContClose' onClick={() => {closeDialog()}}><img src={Close} width = "25" alt=''/></button>
                        <div className='form'>  
                            <div className='rate'>
                                <div id='starImglabel'>Rate:</div>
                                <div id='starImg' onMouseOut = {hideStarOnMouseOut}>
                                    <img className='starImg' onClick={() => {changeStarOnClick(1)}} onMouseOver = {() => {changeStarOnMouseOver(1)}} src={Star} alt = "" />
                                    <img className='starImg' onClick={() => {changeStarOnClick(2)}} onMouseOver = {() => {changeStarOnMouseOver(2)}} src={Star} alt = "" />
                                    <img className='starImg' onClick={() => {changeStarOnClick(3)}} onMouseOver = {() => {changeStarOnMouseOver(3)}} src={Star} alt = "" />
                                    <img className='starImg' onClick={() => {changeStarOnClick(4)}} onMouseOver = {() => {changeStarOnMouseOver(4)}} src={Star} alt = "" />
                                    <img className='starImg' onClick={() => {changeStarOnClick(5)}} onMouseOver = {() => {changeStarOnMouseOver(5)}} src={Star} alt = "" />
                                </div>
                            </div>
                            <label htmlFor = "comment">Leave your feedback:</label><br />
                            <textarea name="comment" id="comment" placeholder='What do you think?' onChange={(e) => {setCommentText(e.target.value)}}></textarea>
                            <div className='fivesContButtonAdd'>
                                <button id='fivesContButtonAdd' onClick={() => {
                                if (countStar !== 0){
                                    closeDialog()
                                    let obj = {  
                                        id: arrComment.length,
                                        Stars : stars,
                                        CommentText : commentText,
                                        UserImg : User,
                                        userName : "User_name",
                                        userResidency : "User_residency",
                                    }
                                    arrComment.push(obj);
                                    lastId = obj.id;
                                }
                                else{
                                    alert("Select a rating!")
                                }
                            }}>Send feedback</button>
                                <button id='fivesContButtonClose' onClick={() => {closeDialog()}}>Close</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export {arrComment, lastId};
