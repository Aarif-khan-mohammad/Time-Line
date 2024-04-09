import React from 'react'
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard  = (props) => {
    const {details} = props
  const {courseTitle, description, duration, tagsList} = details
    
  return (
    <div className='main'>
      <div className="course-card">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-cont">
          <AiFillClockCircle className="clock" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="list-container">
        {tagsList.map(eachItem => (
          <p key={eachItem.id} className="list-item">
            {eachItem.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard 
