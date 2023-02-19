import React from 'react';
import "../index.css";
import { Coment } from './Coment';
import User from "../Img/user.png";
import { useState } from "react";

var  arrComment = [
    {
        id: 0,
        Stars: 0,
        CommentText: "Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.",
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
export function switchRightComment(id)
{
    if(id < arrComment.length )
    {
        var temp = arrComment.shift();
        arrComment.push(temp);
    }
    
}
export function switchLeftComment(id)
{
    if(id > 0)
    {
        var temp = arrComment.pop();
        arrComment.unshift(temp);
    }
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
    
    const setShowButton = props.setShowButton;
    const [userName, setUserName] = useState("");
    const [userResidency, setUserResidency] = useState("");
    const [commentText, setCommentText] = useState("");
    const [stars, setStars] = useState("");
   
    return(
        <div className='fivesContainerForm'>
            <form>
                <input type="text" id = "userName" onChange={(e) => {setUserName(e.target.value)}}/>
                <input type="text" id = "userResidency" onChange={(e) => {setUserResidency(e.target.value)}}/>
                <input type="text" id = "comment"  onChange={(e) => {setCommentText(e.target.value)}}/>
                <input type="number" id = "stars" onChange={(e) => {setStars(e.target.value)}}/>
                <button  className='fivesContButtonClose' onClick={() => {setShowButton(true)}}>Закрыть</button>
                <button  className='fivesContButtonClose' onClick={() => {
                    setShowButton(true);
                    let obj = {  
                        id: arrComment.length,
                        Stars : stars,
                        CommentText : commentText,
                        UserImg : User,
                        userName : userName,
                        userResidency : userResidency,
                    }
                    arrComment.push(obj);
                    lastId = arrComment[arrComment.length - 1].id;
                }}>Оставить коментарий</button>
            </form>
        </div>
    )
}
export {arrComment, lastId};
