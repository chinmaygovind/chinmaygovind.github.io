import Channels from './channels.js'
import StartMenu from "./startmenu.js"


export default function WiiMenu() {
    var state = "WII_MENU";
    var currentChannel = -1;

    function handleClick(e) {
        console.log("Click detected!");
        if (state === "WII_MENU") {
            var x = e.clientX / window.innerWidth;
            var y = e.clientY / window.innerHeight;
            console.log(x + ", " + y);
            for (var i = 0; i < 12; i++) {
                var channelX = i % 4;
                var channelY = Math.floor(i / 4);
                var lowX = (0.08 + 0.21 * channelX);
                var highX = lowX + 0.21;
                var lowY = (0.04 + 0.25 * channelY);
                var highY = lowY + 0.25;
                if (lowX < x && x < highX && lowY < y && y < highY) {
                    var scale = 8;
                    var channels = document.getElementById('channels');
                    var rect = channels.getBoundingClientRect();
                    
                    var targetX = window.innerWidth * (0.16 + 0.23 * channelX);
                    var targetY = window.innerHeight * (lowY + highY) / 2;
                    
                    channels.style.transformOrigin = targetX + 'px ' + targetY + 'px';
                    channels.style.transform = 'scale(' + scale + ')';
                    channels.style.transition = 'transform 0.5s, opacity 0.25s ease-in';
                    channels.style.opacity = '0';

                    var startmenu = document.getElementById("startmenu");
                    startmenu.style.zIndex = 10;
                    startmenu.style.opacity = 1;
                    startmenu.style.width = "100%";
                    startmenu.style.height = "100%";
                    startmenu.style.transform = "scale(1)";
                    startmenu.style.transition = 'transform 0.5s, opacity 0.25s ease-in';
                    startmenu.src = `images/channels/startmenu${i}.png`;
                    
                    var clickSound = document.getElementById("clickSounds");
                    clickSound.play();

                    var bgm = document.getElementById("backgroundMusic");
                    bgm.pause();
                    //content.scrollTo(tx, ty);
                }
            }
            setTimeout(() => state = "START_MENU", 500);
            currentChannel = i;
        }
        if (state === "START_MENU") {
            var x = e.clientX / window.innerWidth;
            var y = e.clientY / window.innerHeight;
            console.log(x + ", " + y);
            var clickState = "NONE";
            if (0.2 < x && x < 0.48 && 0.8 < y && y < 0.93) clickState = "LEFT";
            if (0.52 < x && x < 0.8 && 0.8 < y && y < 0.93) clickState = "RIGHT";
            console.log(clickState);
            alert(clickState);
        }
    }

    return (
        <div id="wii-menu" onClick = {handleClick}
        style = {{position: "relative", color: "red", width: "100%", height: "100%",  
        cursor: "url(images/wiicursor.cur), none"}}>
            <StartMenu />
            <Channels />
        </div>
    )
}