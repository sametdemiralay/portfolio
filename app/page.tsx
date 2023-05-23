import React from 'react'
import AboutMe from './components/about-me'
import {aboutMe, skills} from '../data/page-data'

const page = () => {
  return (
    <div>
      <AboutMe data={aboutMe} skills={skills} />
    </div>
  )
}

export default page