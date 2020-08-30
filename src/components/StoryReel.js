import React from 'react';
import '../styles/StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://thumbs.dreamstime.com/b/empty-comfort-sport-fitness-gym-club-night-window-iron-barbells-dumbbells-171197285.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbmLFmWO-qvEP2yF-Esn3j4FU9aWF50RPSFQ&usqp=CAU"
                title="James Blond"
            />
            <Story 
                image="https://media.istockphoto.com/photos/venetberg-austria-august-02-2017-single-hiker-in-the-early-morning-at-picture-id1054012932?k=6&m=1054012932&s=612x612&w=0&h=ZD-tIT-bRDyrRl5TXaxjNJ2r3eqWr1rYWdkFpieJjI8="
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTECGBwn9C9PU-ghGJm9tdDTY8nnppTMSQ7xA&usqp=CAU"
                title="Blake Raj"
            />
            <Story 
                image="https://media.istockphoto.com/photos/nicelooking-attractive-gorgeous-glamorous-elegant-stylish-cheerful-picture-id1165055006?k=6&m=1165055006&s=612x612&w=0&h=X_d75QPcjQ0Zx-X2tTD4npQOIjD6lKXdDPqxJHuovhc="
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOSIgSJN8Dh7IG_VNt3BLBkmKsVstK1Pc9xA&usqp=CAU"
                title="Shawn Paul"
            />
            <Story 
                image="https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1579721908869-BBVPUKLC4N38G2CY43C6/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/header5.jpg?format=2500w"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAbzDC_qDRkLpeQ074Ym8to__J-FfPRWhFlg&usqp=CAU"
                title="Felix Miles"
            />
            <Story 
                image="https://media.istockphoto.com/videos/sea-sky-beach-holiday-background-video-id1137495366?b=1&k=6&m=1137495366&s=640x640&h=YPbAfxndm1m_pp6lGpNn0bEZOFtdF8ju20NfnrdEwmY="
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1CTckpdQ7cgdIWZb4TkgMX9a8VReprbXlhQ&usqp=CAU"
                title="Ryan Higa"
            />
            {/* Story */}
        </div>
    )
}

export default StoryReel;
