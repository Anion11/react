import React from 'react';
import "../index.css";
import BtnThirdCont from './BtnThirdCont';
import Gallery from './GalleryThirdCont';

class ThirdMain extends React.Component{
    
    render(){
        return (
            <div className='thirdContainer'><a className='ServiceA' name = "Service" href= "/#">{String.fromCharCode(160)}</a>
                <div className='galleryConatiner'>
                    <BtnThirdCont />
                    <Gallery />
                </div>
            </div>
        )
    }
}
export default ThirdMain