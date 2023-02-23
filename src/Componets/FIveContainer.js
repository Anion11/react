import React, { useEffect, useRef } from 'react';
import "../index.css";
import { FiveContFooter } from './FiveContFooter';
import { useState } from "react";
import { FiveContForm, arrComment, pushComm , switchRightComment , switchLeftComment, lastId} from './FiveContForm';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CSSTransition } from 'react-transition-group';
var classNameRightLeft = "";
export const FiveCont = () => {
    const [comments, setArrComent] = useState([])
    const [showButton, setShowButton] = useState(true);
    const [showButtonSwithLeft, setShowButtonSwithLeft] = useState(false);
    const [showButtonSwithRight, setShowButtonSwithRight] = useState(true);
    const [startAnim, setstartAnim] = useState(false);
    const [disabledleft, setDisabledLeft] = useState(false);
    const [disabledright, setDisabledRight] = useState(false);
    const [scrollYprop, setscrollY] = useState(0);
    const nodeRef1 = useRef(null);
    const nodeRef2 = useRef(null);
    const nodeRef3 = useRef(null);

    useEffect(() => {
        setArrComent(pushComm(arrComment));
        setShowButton(true);
        if(arrComment.length <= 3)
        {
            setShowButtonSwithRight(false);
        }
        
    }, []);
    const buttonLeft = () => 
    { 
        setDisabledLeft(true);
        setTimeout(() =>{
            setArrComent(pushComm(switchLeftComment(comments)));
            setShowButtonSwithLeft(comments[0].props.id > 1);
            setShowButtonSwithRight(comments[comments.length - 1].props.id < lastId + 1);
            if (comments[0].props.id > 1){
                setDisabledLeft(false);
            }
            setDisabledRight(false)
        } ,200)
        setstartAnim(!startAnim);
        classNameRightLeft = "LeftAnim"
    }
    const buttonRight = () => {
        setDisabledRight(true)
        setTimeout(()=>{
            if(comments[comments.length - 1].props.id === lastId)
            {
                setShowButtonSwithRight(comments[comments.length - 1].props.id === lastId);
            }
            else
            {
                setShowButtonSwithRight(comments[comments.length - 1].props.id !== lastId - 1);
            }
            setArrComent(pushComm(switchRightComment(comments)));
            setShowButtonSwithLeft(comments[0].props.id >= 0);
            setDisabledLeft(false);
            if (comments[comments.length - 1].props.id !== lastId - 1){
                setDisabledRight(false)
            }
        } ,200)
        setstartAnim(!startAnim);
        classNameRightLeft = "RightAnim"
    }
    const showModal = () => {
        setShowButton(false);
        setscrollY(window.scrollY)
    }
    return ( 
            <div className="fivesContainer"><a name = "Blog" className='BlogA' href= "/#">{String.fromCharCode(160)}</a>
                <div className="fivesContainerHeader"><span>Loved by businesses, and individuals across the globe.</span></div>
                <div className="fivesContainerMain">
                    <div id='fivesContainerMainLeftArrow'>{showButtonSwithLeft && <button disabled = {disabledleft} onClick={buttonLeft}><FaArrowLeft fill='currentColor' stroke='currentColor' size={20}/></button>}</div>
                        <CSSTransition in = {startAnim} nodeRef = {nodeRef1} timeout = {200} classNames = {classNameRightLeft + "First"} onExit = {()=>{setstartAnim(!startAnim);}}>
                            <div ref = {nodeRef1}>{comments[0]}</div>
                        </CSSTransition>
                        <CSSTransition in = {startAnim} nodeRef = {nodeRef2} timeout = {200} classNames = {classNameRightLeft + "Second"} onExit = {()=>{setstartAnim(!startAnim);}}>
                            <div ref = {nodeRef2}>{comments[1]}</div>
                        </CSSTransition>
                        <CSSTransition in = {startAnim} nodeRef = {nodeRef3} timeout = {200} classNames = {classNameRightLeft + "Last"} onExit = {()=>{setstartAnim(!startAnim);}}>
                            <div ref = {nodeRef3}>{comments[2]}</div>
                        </CSSTransition>
                    <div id='fivesContainerMainRightArrow'>{showButtonSwithRight && <button disabled = {disabledright} onClick={buttonRight}><FaArrowRight fill='currentColor' stroke='currentColor' size={20}/></button>}</div>
                </div>
                <div className='fivesContButton'><button  onClick={showModal}>Write a review</button></div>  {!showButton && <FiveContForm setArrComent = {setArrComent} setShowButton = {setShowButton} scrollY = {scrollYprop}/>}
                <FiveContFooter/>
            </div>
        )
}

