import uniqid from 'uniqid'
// import WorkIcon from '@material-ui/icons/Work' // Job Icon
import './ExperienceContainer.css'

const ExperienceContainer = ({ work }) => (
  <div className='experience__card'>
    <h3>{work.title}</h3>
    <h4 className='experience__company'>{work.company}</h4>
    <p className='experience__years'>{work.years}</p>

    {/* Tech Stack */}
    {work.mainTech.length > 0 && (
      <ul className='experience__stack'>
        {work.mainTech.map((tech) => (
          <li key={uniqid()} className='experience__stack-item'>
            {tech}
          </li>
        ))}
      </ul>
    )}

    {work.technologies.length > 0 && (
      <ul className='experience__stack'>
        {work.technologies.map((tech) => (
          <li key={uniqid()} className='experience__stack-item'>
            {tech}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default ExperienceContainer
