import React from 'react'

import './Index.css'
import Header from '../../Components/Header/Header'
import SuggestedCourse from '../../Components/SuggestedCourse/SuggestedCourse'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import About from '../../Components/About/About'
import TopProfessors from '../../Components/TopProfessors/TopProfessors'
import LastArticles from '../../Components/LastArticles/LastArticles'

export default function Index() {
  return (
    <div>
      <Header />
      <SuggestedCourse />
      <PopularCourses />
      <About />
      <TopProfessors />
      <LastArticles />
    </div>
  )
}
