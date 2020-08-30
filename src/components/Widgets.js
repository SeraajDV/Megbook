import React from 'react';
import '../styles/Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBeArBuLlBrOzUs%2F&tabs=timeline&width=340&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=235647477516686" 
                frameborder="0"
                width="340"
                height="100%"
                style={{border:"none", overflow:"hidden"}}
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
                title="Live"
            ></iframe>
        </div>
    )
}

export default Widgets;
