import "../index.css";
import ImgTopFirst from "../Img/FirstContainerBul2.png";
import ImgTopSecond from "../Img/FirstContainerBul1.png";
import React, { useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
var interval = 5000;    // задержка между изображениями
var qwe1,qwe2,qwe3;
var duration = 800;
const defaultStyle = {
    transition: `all ${duration}ms`,
    opacity: 1,
}
const transitionStyle = {
    entering: { transform:'scale(0.95)',
                filter: 'brightness(90%)'},
    entered:  { transform: 'scale(1)',
                filter: 'brightness(100%)' },
    exiting:  { transform: 'scale(0.95)',
                filter: 'brightness(90%)' },
    exited:  { transform: 'scale(1)'},
               filter: 'brightness(100%)' }
function Image(props) {
    const [startBackAnim, setStartBackAnim] = useState(true);
    const nodeRefBack = useRef(null);
    const backRef = useRef(startBackAnim);
    backRef.current = startBackAnim;
    const imgTop = props.imgTop;
    useEffect(() => {
        qwe3 = setTimeout(()=>{
            setStartBackAnim(!backRef.current);
        },interval - 500)
        qwe2 = setInterval(() => {
            qwe3 = setTimeout(()=>{
                setStartBackAnim(!backRef.current);
            }, interval - 500)
        },interval);
    }, []) 
   
 
    return(
       
        <Transition in={backRef.current}  timeout = {{enter: 800, exit: 800,}} nodeRef = {nodeRefBack} onExited={() => {setStartBackAnim(!backRef.current);}}>
            {state => (  
            <div ref={nodeRefBack} style={{
            ...defaultStyle[state],
          ...transitionStyle[state]
            }}>
            {imgTop ? <img src={ImgTopFirst} id = "img_1" alt='' border = "0"/> : <img src={ImgTopSecond} id = "img_1" alt=''/>}
            </div>
            )}
        </Transition>
        
    )
        
}
class ImageFirstContainer extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                imgTop: true,
                spawnImg: true,
            }
    }
    componentDidMount() {
        qwe1 = setInterval(() => {
           this.setState({imgTop: !this.state.imgTop});
        }, interval)
    }
    componentDidUpdate() {
        clearInterval(qwe1,qwe2,qwe3);
    }
   
    render() {
        return(
            <Image imgTop = {this.state.imgTop}/>
        )
    }
}
//Через вторую картинку
export default ImageFirstContainer;