import React from 'react'

import './Index.css'
import Header from '../../Components/Header/Header'
import SuggestedCourse from '../../Components/SuggestedCourse/SuggestedCourse'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import About from '../../Components/About/About'
import TopProfessors from '../../Components/TopProfessors/TopProfessors'
import LastArticles from '../../Components/LastArticles/LastArticles'
import JoinInNews from '../../Components/JoinInNews/JoinInNews'
import Footer from '../../Components/Footer/Footer'

export default function Index() {
  return (
    <div>
      <Header />
      <SuggestedCourse />
      <PopularCourses />
      <About />
      <TopProfessors />
      <LastArticles />
      <JoinInNews />
      <Footer />
    </div>
  )
}
