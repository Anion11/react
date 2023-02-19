import React from 'react';
import "../index.css";
import { Coment } from './Coment';
import User from "../Img/user.png";
import { useState } from "react";

var  arrComment = [
    {
        Stars: 5,
        CommentText: "Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.",
        UserImg: User,
        userName:"Jane Cooper",
        userResidency: "Los Angeles, CA"
    },
    {
        Stars: 2,
        CommentText: "123",
        UserImg: User,
        userName:"Jane Coop",
        userResidency: "Los Angeles, CA"
    }
];
export function pushComm(arr){
    var arrPush = []; 
    for(let i = 0; i < arr.length; i++)
    {
        arrPush.push(
            <Coment key = {i} Stars = {arr[i].Stars} ComentText = {`${arr[i].CommentText}`}
                UserImg = {arr[i].UserImg} userName = {`${arr[i].userName}`} userResidency = {`${arr[i].userResidency}`} />
        ) 
    }
    return arrPush;
}
export const FiveContForm = (props) => {
    const setArrComent = props.setArrComent;
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
                        Stars : stars,
                        CommentText : commentText,
                        UserImg : User,
                        userName : userName,
                        userResidency : userResidency,
                    }
                    arrComment.push(obj);
                    setArrComent(pushComm(arrComment));
                }}>Оставить коментарий</button>
            </form>
        </div>
    )
}
export {arrComment};