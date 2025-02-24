import uniqid from 'uniqid'
// import SchoolIcon from '@material-ui/icons/School' // Education Icon
import './EducationContainer.css'

const EducationContainer = ({ education }) => (
  <div className='education__card'>
    <h3>{education.degree}</h3>
    <h4 className='education__institution'>{education.school}</h4>
    <p className='education__years'>{education.years}</p>

    {/* Courses/Subjects (Optional) */}
    {education.courses && education.courses.length > 0 && (
      <ul className='education__courses'>
        {education.courses.map((course) => (
          <li key={uniqid()} className='education__courses-item'>
            {course}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default EducationContainer
