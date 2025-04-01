import { root } from '@lynx-js/react'
import ImageCard from './ImageCard.jsx';
import "./index.css"
import type { Pictures } from './Picture/Picture.jsx';


function FirstImageCard () {
  return (
    <view className='gallery-wrapper single-card'>
      <ImageCard/>
    </view>
  );

}


root.render(<FirstImageCard />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
