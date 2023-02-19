import React from 'react';
import "../index.css";
class Hr extends React.Component{
    render(){
        return (
                <div className ={ "parentForHr" + this.props.Id}>
                    <div className= {"hrCircle" + this.props.Id} >
                        <div className={"circl" + this.props.colorFirst}></div>
                        <hr className={"gradientHr" + this.props.Id}></hr>
                        <div className={"circl" + this.props.colorSecond}></div>
                    </div>
                </div>
        )
    }
}
export default Hr