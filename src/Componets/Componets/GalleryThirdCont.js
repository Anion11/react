import React from 'react';
import "../index.css";
import ThirdBild1 from "../Img/ThirdBuildings.jpg";
import ThirdBild2 from "../Img/ThirdBuildings1.jpg";
import ThirdBild3 from "../Img/ThirdBildings2.jpg";
import ThirdBuildComr from "../Img/ThirdBuildngComer.jpg";
import ThirdBuildComr1 from "../Img/ThirdBuildngComer1.jpg";
import ThirdBuildComr2 from "../Img/ThirdBuildingComer2.jpg";
import ThirdBuildingAgr from "../Img/ThirdBuildingAgr.jpg";
import ThirdBuildingAgr1 from "../Img/ThirdBuildgnAgr1.jpg";
import ThirdBuildingAgr2 from "../Img/ThirdBuildngAgr2.jpg";
import ThirdBuildingInd from "../Img/ThirdBuildngInd.jpg";
import ThirdBuildingInd1 from "../Img/ThirdBuildngInd1.jpg";
import ThirdBuildingInd2 from "../Img/ThirdBuildingInd2.jpg";
import { useState , useRef} from "react";
import { CSSTransition } from 'react-transition-group';
var links;
function Imgs(props) {
    const [spawnAnim, setSpawnAnim] = useState(false);
    const img1 = props.img1;
    const img2 = props.img2;
    const img3 = props.img3;
    const changeImgs = props.changeImgs;
    const nodeRef1 = useRef(null);
    return(
        <div className="galleryPhoto">
            <div className="namesHouse">
                <div className="activeLinkSecond" onClick={(e) => {changeImgs(ThirdBild1,ThirdBild2, ThirdBild3 , e.target); setSpawnAnim(true); const timer = setTimeout(() => {setSpawnAnim(false); clearTimeout(timer)},300)}}>Residential Property</div>
                <div className="activeLinkSecond" onClick={(e) => {changeImgs(ThirdBuildComr,ThirdBuildComr1, ThirdBuildComr2, e.target); setSpawnAnim(true);const timer =  setTimeout(() => {setSpawnAnim(false); clearTimeout(timer)},300)}}>Commercial Property</div>
                <div className="activeLinkSecond" onClick={(e) => {changeImgs(ThirdBuildingAgr,ThirdBuildingAgr1, ThirdBuildingAgr2,e.target); setSpawnAnim(true); const timer =  setTimeout(() => {setSpawnAnim(false);  clearTimeout(timer)},300)}}>Agriculture Property</div>
                <div className="activeLinkSecond" onClick={(e) => {changeImgs(ThirdBuildingInd,ThirdBuildingInd1, ThirdBuildingInd2,e.target); setSpawnAnim(true); const timer = setTimeout(() => {setSpawnAnim(false);  clearTimeout(timer)},300)}}>Industrial Property</div>
            </div>
            <CSSTransition
                in={spawnAnim}
                nodeRef={nodeRef1}
                timeout={300}
                classNames="thirdCardImgs"
            >
                <div ref = {nodeRef1}  className="imgHouse">
                    <img src={img1} alt = ''/>
                    <img src={img2} alt = ''/>
                    <img src={img3} alt = ''/>   
                </div>  
            </CSSTransition>
                <div id="spawnText"></div>
    </div>
       
    )
    
}
class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img1: ThirdBild1,
            img2: ThirdBild2,
            img3: ThirdBild3,
        }
        this.changeImgs = this.changeImgs.bind(this);
    }
  
    componentDidMount() {     
        links = document.getElementsByClassName("activeLinkSecond");
        this.changeImgs(this.state.img1, this.state.img2, this.state.img3, links[0]);
    }
    render(){
        return ( 
             <Imgs img1 = {this.state.img1} img2 = {this.state.img2} img3 = {this.state.img3} changeImgs = {this.changeImgs}/>
        )
    }
    changeImgs(img1,img2,img3,obj){
        for(let i = 0; i < links.length;i++) {
            links[i].style.color = "#000000";
            links[i].style.borderBottom = "0px solid #F85A47";
        }
        this.setState({img1: img1, img2:img2, img3:img3,});
        obj.style.color = "#F85A47";
        obj.style.borderBottom = "2px solid #F85A47";
    }
}
export default Gallery