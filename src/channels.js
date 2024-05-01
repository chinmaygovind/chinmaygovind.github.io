


export default function Channels() {
    return (
        
    <div id = "channels" style = {{zIndex: "0"}}>
        <video src = "videos/disc.mp4" autoPlay loop muted 
        style = {{zIndex: 0, position: "relative", float: "left", margin: "4% 0 0 8%", width: "21%", height: "21%"}}></video>
        
        <video src = "videos/crowd.mp4" autoPlay loop muted 
        style = {{zIndex: 0, position: "relative", float: "left", margin: "4% 0 0 0%", width: "21%", height: "21%"}}></video>
        
        <video src = "videos/photos.mp4" autoPlay loop muted 
        style = {{zIndex: 0, position: "relative", float: "left", margin: "4% 0 0 0%", width: "21%", height: "21%"}}></video>
        
        <video src = "videos/shop.mp4" autoPlay loop muted 
        style = {{zIndex: 0, position: "relative", float: "left", margin: "4% 0 0 0%", width: "21%", height: "21%"}}></video>
        
    </div>
    );
}