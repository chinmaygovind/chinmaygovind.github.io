import Channels from './channels.js'


export default function Menu() {
    return (
        <div id="wii-menu" 
        style = {{position: "relative", color: "red", width: "100%", height: "100%",  
        cursor: "url(images/wiicursor.cur), none"}}>
            <Channels></Channels>
            <img src = "images/wiimenu.png" style = {{position: "absolute", top: "0", left: "0", width: "100%", zIndex: "1"}}></img>
        </div>
    )
}