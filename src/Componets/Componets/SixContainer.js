import React from 'react';
import "../index.css";
class SixContainer extends React.Component{
    constructor(props){
        super(props)
        this.checkInputBlurEmail = this.checkInputBlurEmail.bind(this)
        this.checkInputFocusEmail = this.checkInputFocusEmail.bind(this)
    }
    checkInputFocusEmail()
    {
        document.getElementById('email').style.borderBottom = "1px solid black";
    }
    checkInputBlurEmail(value){
        if (value === ''){
            document.getElementById('email').style.borderBottom = "none";
        }
        else{
            document.getElementById('email').style.borderBottom = "1px solid black";
        }
    }
    render(){
        return (
            <div className="sixthContainer"><a name = "Contact" href= "/#">{String.fromCharCode(160)}</a>
            <div className="sixthContainers">
                 <div className="sixthContainerWrapper">
                     <div className="headingText">Get Our Newsletter</div>  
                     <div className="headingTextBottom">To join the worldwide community</div>  
                     <form className="inputEmailAdress">
                         <div>
                             <label htmlFor = "email">Type your Email Address</label>
                             <input type="email" name="email" id="email" required onBlur={(e) => {this.checkInputBlurEmail(e.target.value)}} onFocus={this.checkInputFocusEmail}></input>
                         </div>
                         <div style={{position: "relative"}}>
                             <button>Send Now</button>
                         </div>
                     </form>
                 </div>
            </div>
        </div>
        )
    }
}
export default SixContainer