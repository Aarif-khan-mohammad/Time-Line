import React from 'react'
import { AiFillCalendar } from "react-icons/ai";
import './index.css'

const ProjectTimelineCard = (props) => {
    const {projectDetails} = props
    const {
        projectTitle,
        description,
        imageUrl,
        duration,
        projectUrl,
      } = projectDetails
    
  return (
    <div className='project-card'>
      <img src={imageUrl} alt='project' className='p-image'/>
      <div className='content-container'>
        <h5 className='project-title'>{projectTitle}</h5>
        <div className='duration-cont'>
            <AiFillCalendar className="calender"/> 
            <p className="duration">{duration}</p>
        </div>
      </div>
      <p className='project-description'>{description}</p>
      <a href={projectUrl} target="__blank" className='project-link'> Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
