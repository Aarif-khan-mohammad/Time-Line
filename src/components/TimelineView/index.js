import {Chrono} from 'react-chrono';
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import React from 'react'
import './index.css'

const TimelineView = (props) => {
    const {timelineItemsList} = props
  return (
    <div className='main-container'>
      <h1 className='head'> My Journey </h1>
      <h3 className='head'> Full Stack Developer </h3>
      <div className='chrono-container'>
        <Chrono
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            cardHeight="auto"
            readMore = "true"
            toolbarPosition = "bottom"
            theme ={{
                primary: '#0967d2',
                secondary: '#ffffff',
                cardBgColor: '#ffffff',
                cardForeColor: 'violet',
                titleColor: '#0967d2',}}
    
            >
                {
                    timelineItemsList.map(eachItem=> 
                        eachItem.categoryId === "COURSE" ? (
                            <CourseTimelineCard details={eachItem} key={eachItem.id} className="left" />
                        ) : (
                            <ProjectTimelineCard projectDetails={eachItem} key={eachItem.id} />

                        )
                    )
                }

            </Chrono>

      </div>
      
    </div>
  )
}




export default TimelineView