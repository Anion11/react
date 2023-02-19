import React, { useEffect } from 'react';
import "../index.css";
import { FiveContFooter } from './FiveContFooter';
import { useState } from "react";
import { FiveContForm, arrComment, pushComm } from './FiveContForm';


export const FiveCont = () => {
  
    const [comments, setArrComent] = useState([])
    const [showButton, setShowButton] = useState(true);
   
    useEffect(() => {   
        setArrComent(pushComm(arrComment));
        setShowButton(true);
    }, [])
    return (
            <div className="fivesContainer"><a name = "Blog" className='BlogA' href= "/#">{String.fromCharCode(160)}</a>
                <div className="fivesContainerHeader"><span>Loved by businesses, and individuals across the globe.</span></div>
                <div className="fivesContainerMain">
                    {comments}
                </div> 
                {showButton ? <button  className='fivesContButton' onClick={() => {setShowButton(false)}}>Оставить коментарий</button>  : <FiveContForm setArrComent = {setArrComent} setShowButton = {setShowButton}/>}
               
                
                <FiveContFooter/>
            </div>
        )
        
    
}
