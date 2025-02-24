import uniqid from 'uniqid'
import { education } from '../../portfolio'
import EducationContainer from '../EducationContainer/EducationContainer'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>

      <div className='education__grid'>
        {education.map((edu) => (
          <EducationContainer key={uniqid()} education={edu} />
        ))}
      </div>
    </section>
  )
}

export default Education
