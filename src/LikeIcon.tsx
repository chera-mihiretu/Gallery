import React, { useState } from 'react'
import red_heart from "./assets/red_heart.png";
import white_heart from "./assets/white_heart.png";
const LikeIcon = () => {
    const [isLiked, setIsLiked] = useState(false);
    function likeIt(){
        setIsLiked(!isLiked);
    }
  return (
    <view className='like-icon'>
        {isLiked && <view className='circle'></view>}
        {isLiked && <view className='circle circleAfter'></view>}
        <image bindtap={likeIt}
        src={isLiked ? red_heart : white_heart}
        />
    </view>
  )
}

export default LikeIcon
