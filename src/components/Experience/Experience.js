import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__grid'>
        {experience.map((work) => (
          <ExperienceContainer key={uniqid()} work={work} />
        ))}
      </div>
    </section>
  )
}

export default Experience
