import { root } from '@lynx-js/react'
import "./index.css"


function FirstImageCard () {
  return (
    <view className='gallery-wrapper single-card'>
    </view>
  );

}


root.render(<FirstImageCard />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
