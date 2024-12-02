import React from 'react'
import "./Info.css"
import { studentIcon, VideoIcon, bgElement2} from '../../assets'

const Info = () => {
  return (
    <section id='info' className='dark-gray'>
      <div className='wrapper'>
        <div className='content-container'>
          <div className='info-content'>
            <img src={studentIcon}/>
            <div className='amount'>23,000+</div>
            <div className='type'>Student</div>
          </div>

          <div className='info-content'>
            <img src={VideoIcon}/>
            <div className='amount'>26Hrs</div>
            <div className='type'>Video Content</div>
          </div>

        </div>

        <img className="bg-element-2" src={bgElement2} alt=''/>
      </div>
    </section>
  )
}

export default Info
