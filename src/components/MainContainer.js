import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='w-full bg-slate-950 '>
      <ButtonList></ButtonList>
      <VideoContainer pageType="homepage"></VideoContainer>
    </div>
  )
}

export default MainContainer