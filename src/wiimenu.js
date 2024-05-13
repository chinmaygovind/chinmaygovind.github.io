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
                    currentChannel = i;
                    var scale = 8;
                    var channels = document.getElementById('channels');
                    
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
                    setTimeout(() => {
                        bgm.src = `audio/channels/channel${currentChannel}.mp3`
                        bgm.removeAttribute("loop")
                        bgm.play();
                    }, 250);
                    //content.scrollTo(tx, ty);
                }
            }
            setTimeout(() => state = "START_MENU", 100);
        }
        if (state === "START_MENU") {
            var x = e.clientX / window.innerWidth;
            var y = e.clientY / window.innerHeight;
            console.log(x + ", " + y);
            var clickState = "NONE";
            if (0.2 < x && x < 0.48 && 0.8 < y && y < 0.93) clickState = "LEFT";
            if (0.52 < x && x < 0.8 && 0.8 < y && y < 0.93) clickState = "RIGHT";
            if (clickState !== "NONE") {
                var bgm = document.getElementById("backgroundMusic");
                bgm.pause();
                var clickSound = document.getElementById("clickSounds");
                clickSound.src = "audio/refresh.wav";
                clickSound.play();
                setTimeout(() => {
                    var root = document.getElementById("root");
                    root.classList.remove('fade-in');
                    root.classList.add('fade-out');
                }, 500); 
                if (clickState === "LEFT") {
                    setTimeout(() => {
                        window.location.reload();
                    }, 2500);
                } else if (clickState === "RIGHT") {
                    setTimeout(() => {
                        startChannel(currentChannel);
                    }, 2500);
                }
            }
        }
    }

    function startChannel(id) {
        switch (id) {
            case 0:
                document.location.href = "https://play.typeracer.com/";
                break;
            case 1:
                document.location.href = "channels/mii/index.html";
                break;
            case 2:
                document.location.href = "https://www.amazon.com/Day-Trade-Theoretical-foundations-discretionary/dp/B0CH28XG8M";
                break;
            case 3:
                document.location.href = "https://www.instagram.com/sirchinmay/";
                break;
            case 4:
                document.location.href = "https://www.theonion.com/";
                break;
            case 5:
                document.location.href = "https://sites.google.com/cvschools.org/cv-science-olympiad/home";
                break;
            case 6:
                document.location.href = "channels/codebusters/index.html";
                break;
            default:
                window.location.reload();
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