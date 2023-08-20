import React from 'react'

import './Index.css'
import Header from '../../Components/Header/Header'
import SuggestedCourse from '../../Components/SuggestedCourse/SuggestedCourse'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'

export default function Index() {
  return (
    <div>
      <Header />
      <SuggestedCourse />
      <PopularCourses />
    </div>
  )
}
