import React, { useEffect, useRef } from 'react';
import "../index.css";
import { FiveContFooter } from './FiveContFooter';
import { useState } from "react";
import { FiveContForm, arrComment, pushComm , switchRightComment , switchLeftComment, lastId} from './FiveContForm';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CSSTransition } from 'react-transition-group';
import { Coment } from './Coment';
var classNameRightLeft = ""
export const FiveCont = () => {
    const [comments, setArrComent] = useState([])
    const [showButton, setShowButton] = useState(true);
    const [showButtonSwithLeft, setShowButtonSwithLeft] = useState(false);
    const [showButtonSwithRight, setShowButtonSwithRight] = useState(true);
    const [startAnim, setstartAnim] = useState(false);
    const nodeRef1 = useRef(null);
    const nodeRef2 = useRef(null);
    const nodeRef3 = useRef(null);
    const nodeRef4 = useRef(null);
    useEffect(() => {
        setArrComent(pushComm(arrComment));
        setShowButton(true);
        if(arrComment.length <= 3)
        {
            setShowButtonSwithRight(false);
        }
    }, [])

    const buttonLeft = () => 
    { 
        setTimeout(() =>{
            switchLeftComment(comments[0].props.id);  
            setArrComent(pushComm(arrComment)); 
            setShowButtonSwithLeft(comments[0].props.id > 1 );
            setShowButtonSwithRight(comments[comments.length - 1].props.id < lastId + 1);
        } ,200)
        setstartAnim(!startAnim);
        classNameRightLeft = "LeftAnim"
    }
    const buttonRight = () => {
        setTimeout(()=>{
            switchRightComment(comments[comments.length - 1].props.id);
            setArrComent(pushComm(arrComment)); 
            setShowButtonSwithLeft(comments[0].props.id >= 0);
            setShowButtonSwithRight(comments[comments.length - 1].props.id !== lastId - 1);
        } ,200)
        setstartAnim(!startAnim);
        classNameRightLeft = "RightAnim"
    }
    return ( 
            <div className="fivesContainer"><a name = "Blog" className='BlogA' href= "/#">{String.fromCharCode(160)}</a>
                <div className="fivesContainerHeader"><span>Loved by businesses, and individuals across the globe.</span></div>
                <div className="fivesContainerMain">
                    <div id='fivesContainerMainLeftArrow'>{showButtonSwithLeft && <button onClick={buttonLeft}><FaArrowLeft fill='currentColor' stroke='currentColor' size={20}/></button>}</div>
                        <CSSTransition in = {startAnim} nodeRef = {nodeRef1} timeout = {200} classNames = {classNameRightLeft + "First"} onExit = {()=>{setstartAnim(!startAnim);}}>
                            <div ref = {nodeRef1}>{comments[0]}</div>
                        </CSSTransition>
                        <CSSTransition in = {startAnim} nodeRef = {nodeRef2} timeout = {200} classNames = {classNameRightLeft + "Second"} onExit = {()=>{setstartAnim(!startAnim);}}>
                            <div ref = {nodeRef2}>{comments[1]}</div>
                        </CSSTransition>
                        <CSSTransition in = {startAnim} nodeRef = {nodeRef3} timeout = {200} classNames = {classNameRightLeft + "Second"} onExit = {()=>{setstartAnim(!startAnim);}}>
                            <div ref = {nodeRef3}>{comments[2]}</div>
                        </CSSTransition>
                    <div id='fivesContainerMainRightArrow'>{showButtonSwithRight && <button  onClick={buttonRight}><FaArrowRight fill='currentColor' stroke='currentColor' size={20}/></button>}</div>
                </div>
                {showButton ? <button  className='fivesContButton' onClick={() => {setShowButton(false)}}>Оставить коментарий</button>  : <FiveContForm setArrComent = {setArrComent} setShowButton = {setShowButton}/>}
                <FiveContFooter/>
            </div>
        )
}
