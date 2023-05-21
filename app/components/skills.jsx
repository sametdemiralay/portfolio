import React, {useState} from 'react'

const Skills = () => {
    const [activeTab, setActiveTab] = useState('soft')

  return (
      <div className='flex'>
          <button type='button' className='btn'>Soft Skills</button>
          <button type='button' className='btn'>Hard Skills</button>
      </div>
  )
}

export default Skills