import React from 'react';

const Video =({videoSrc})=>(
    <div className="col-lg-6" style={{display:'flex',justifyContent:"center", background:'black'}}>
    <video className="video-container video-container-overlay" height="330vh" autoPlay loop muted data-reactid=".0.1.0.0">
<source type="video/mp4" data-reactid=".0.1.0.0.0" src={videoSrc}/>
</video>
    </div>
)
export default Video