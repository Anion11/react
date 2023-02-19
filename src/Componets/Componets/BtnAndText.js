import React from 'react';
import "../index.css";
var ok = false
class BtnAndText extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''};
    }
    componentDidMount() {
        document.querySelector("#imgZipCode").addEventListener("keypress", function (evt) {
            if (evt.which !== 8 && evt.which !== 0 && evt.which < 48)
            {
                evt.preventDefault();
            } 
            if (evt.which > 57){
                evt.preventDefault();
            }
      })
    }
    componentDidUpdate(){
        if (this.state.value.length === 5 && this.state.value[4] !== "-" && ok === false){
            this.setState({value:this.state.value + "-"})
            ok = true
        }
        if (this.state.value.length === 4){
            ok = false
        }
        document.querySelector("#imgZipCode").addEventListener("keypress", function (evt) {
        if (evt.target.value.length === 10){
            evt.preventDefault();
        }
        
    })
    }
    render(){
        return (
            <div className="textAndButton">
                <span className='textHeader'>RESIDENTIAL & OFFICE SPACES</span><br/>
                <span className='textFirst'>Smart Living Style<br/> for Smart People</span><br/>
                <span className="textSecond">Much did had call new drew that kept. Limits expect wonder<br/> law she. Now has you views woman noisy match money rooms.</span>
                <form className="imgZipCode">
                    <input id="imgZipCode" type="text" required placeholder="Enter Zipcode to search properties"
                     pattern="(^[0-9]{5}[-]{1}[0-9]{4}$|^[0-9]{5}$)" value={this.state.value} title="XXXXX-YYYY" onBlur={() => this.checkInputBlur(this.state.value) }
                      onFocus={() => this.checkInputFocus()} onChange={(event) => {this.setState({value: event.target.value});}}/>
                    <button id="btnZipCode">Search Now!</button>
                </form>
            </div>
        )
    }
    checkInputFocus()
    {
        document.getElementById('imgZipCode').style.opacity = 1;
    }
    checkInputBlur(value){
        if (value === ""){
            document.getElementById('imgZipCode').style.opacity = 0.4;
        }
    }
}
export default BtnAndText;