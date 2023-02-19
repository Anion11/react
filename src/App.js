import React from 'react';
import "./index.css";
import Header from './Componets/Header';
import FirstContainer from './Componets/firstMain';
import ThirdMain from './Componets/ThirdMain';
import Footer from './Componets/Footer';
import SecondContainer from './Componets/SecondMain';
import FourthContainer from './Componets/fourthContainer';
import SixContainer from './Componets/SixContainer';
import {FiveCont} from './Componets/FIveContainer';
var lastScrollTop = 50; //После какого значения появлется хэдер
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            scroll: 0,
        }
        this.spawnHeader = this.spawnHeader.bind(this)
        this.hideHeader = this.hideHeader.bind(this)
        this.activeLink = this.activeLink.bind(this)
        this.forActiveLink = this.forActiveLink.bind(this)
    }
    componentDidMount() {
        if (sessionStorage.length === 0){
            var firstHeightWindow = window.innerHeight * 0.01;
            sessionStorage.setItem("myKey",JSON.stringify(firstHeightWindow));
        }
        var vh = JSON.parse(sessionStorage.getItem("myKey"));
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        this.setState({
            theposition: 0,
          })
    }
    componentDidUpdate() {
        window.addEventListener('scroll', this.listenToScroll)
        if (window.pageYOffset > lastScrollTop){
            this.spawnHeader();
        } else {
            this.hideHeader();
        }
        this.forActiveLink()
    }   
    forActiveLink(){
        var vh = JSON.parse(sessionStorage.getItem("myKey"));
        if (window.pageYOffset <= vh*100 - 20*vh){
            this.activeLink(0,6,12)
        }
        else{
            if (window.pageYOffset <= vh*200 - 40*vh){
                this.activeLink(1,7,13)
            }
            else{
                if (window.pageYOffset <= vh*300 - 50*vh){
                    this.activeLink(2,8,14)
                }
                else{
                    if (window.pageYOffset <= vh*400 - 50*vh){
                        this.activeLink(3,9,15)
                    }
                    else{
                        if (window.pageYOffset <= vh*500){
                            this.activeLink(4,10,16)
                        }
                        else{
                            if (window.pageYOffset <= vh*600 - 50*vh){
                                this.activeLink(5,11,17)
                            }
                        }
                    }
                }
            }
        }
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
    listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        this.setState({
          theposition: scrolled,
        })
    }
    spawnHeader() {
        document.getElementsByClassName("headerClinvisibility")[0].style.display='grid';
    }
    
    hideHeader() {
        document.getElementsByClassName("headerClinvisibility")[0].style.display='none';
    }
    render(){
        return (
            <div>
                <Header/>
                <main>
                    <FirstContainer />
                    <SecondContainer />
                    <ThirdMain />
                    <FourthContainer />
                    <FiveCont />
                    <SixContainer />
                </main>
                <Footer/>
            </div>
        )
    }
}
export default App

// сделать альбом
// добавть бд для комментариев
// добавть функциональность
// посмотреть по адаптивности
