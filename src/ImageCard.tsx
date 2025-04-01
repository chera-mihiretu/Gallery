import React, { useState } from 'react'
import lynxLogo from './assets/lynx-logo.png'
import type { Pictures } from './Picture/Picture.jsx';
import dark from "./assets/dark.jpg";


const ImageCard = () => {
    
  return ( 

    <view className="picture-wrapper">

        <image 
        
        src={dark}
        >
        </image>
        
    </view>
  )
}

export default ImageCard
