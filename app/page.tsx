import React from 'react'
import AboutMe from './components/about-me'
import ProfessionalExperience from './components/professional-experience'
import MyProjects from './components/my-projects'
import {aboutMe, skills, professionalData, projectsData} from '../data/page-data'
const page = () => {

  return (
    <div>
      <AboutMe data={aboutMe} skills={skills} />
      <ProfessionalExperience data={professionalData} />
      <MyProjects data={projectsData} />
    </div>
  )
}

export default page