import React from 'react';
import "../index.css";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.activeLink = this.activeLink.bind(this)
    }
    componentDidMount() {
        this.activeLink(0,6,12)
      }
    render(){
        return (
            <header><a name = "Home" href= "/#">{String.fromCharCode(160)}</a>
                <div className="headerCl">
                    <div className = "compName">SmartSpace</div> 
                    <div className = "menu">
                        <span><a href="#Home" className="disActiveLink" onClick={() => {this.activeLink(0,6,12)}}>Home</a></span>
                        <span><a href="#About" className="disActiveLink" onClick={() => {this.activeLink(1,7,13)}}>About</a></span>
                        <span><a href="#Service" className="disActiveLink" onClick={() => {this.activeLink(2,8,14)}}>Service</a></span>
                        <span><a href="#Portfolio" className="disActiveLink" onClick={() => {this.activeLink(3,9,15)}}>Portfolio</a></span>
                        <span><a href="#Blog" className="disActiveLink" onClick={() => {this.activeLink(4,10,16)}}>Blog</a></span>
                        <span><a href="#Contact" className="disActiveLink" onClick={() => {this.activeLink(5,11,17)}}>Contact</a></span>
                    </div>
                </div>
                <div className="headerClinvisibility">
                    <div className = "compName">SmartSpace</div> 
                    <div className = "menuInvisibility">
                        <span><a href="#Home" className="disActiveLink" onClick={() => {this.activeLink(0,6,12)}}>Home</a></span>
                        <span><a href="#About" className="disActiveLink" onClick={() => {this.activeLink(1,7,13)}}>About</a></span>
                        <span><a href="#Service" className="disActiveLink" onClick={() => {this.activeLink(2,8,14)}}>Service</a></span>
                        <span><a href="#Portfolio" className="disActiveLink" onClick={() => {this.activeLink(3,9,15)}}>Portfolio</a></span>
                        <span><a href="#Blog" className="disActiveLink" onClick={() => {this.activeLink(4,10,16)}}>Blog</a></span>
                        <span><a href="#Contact" className="disActiveLink" onClick={() => {this.activeLink(5,11,17)}}>Contact</a></span>
                    </div>
                </div>
            </header>    
        )
    }
    activeLink(index1,index2,index3){
        var links = document.getElementsByClassName("disActiveLink");
        for (let i = 0; i < links.length; i++){
            links[i].classList.remove("activeLink");
        }
        links[index1].classList.add("activeLink");
        links[index2].classList.add("activeLink");
        links[index3].classList.add("activeLink");
    }
}
export default Header