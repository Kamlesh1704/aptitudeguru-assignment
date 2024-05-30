import React from 'react'
import search from '../img/search.png'
import man from '../img/man.png'
import progress from '../img/progress.png'
import './Features.css'

export default function Features() {
  return (
    <div className='feature-container'>
      <h1 className='featureheading'>Unveiling Our Website's Best Features</h1>
      <p className='featurepara'>Experience firsthand the thoughtfulness and ingenuity woven into
        <br/> every aspect of our feature-rich platform.</p>
      <div className='featurecardcontainer'>
        <div className='featurecard card1'>
          <img src={search} alt="feature" />
          <h1>Interactive Learning Modules</h1>
          <p> Explore topics at your own pace and reinforce<br/> your learning with hands-on activities.</p>
          <button>Know More</button>
        </div>
        <div className='featurecard card2'>
          <img src={man} alt="feature" />
          <h1>Collaborative Learning Spaces</h1>
          <p>Share ideas, exchange knowledge, and learn<br/> from each other in a dynamic and supportive community.</p>
          <button>Know More</button>
        </div>
        <div className='featurecard card3'>
          <img src={progress} alt="feature" />
          <h1>Real-time Progress Tracking</h1>
          <p>Stay on top of your progress with real-time<br/> tracking and analytics.</p>
          <button>Know More</button>
        </div>
      </div>
    </div>
  )
}
