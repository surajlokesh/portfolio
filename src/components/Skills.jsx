import { skills } from '../portfolio'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section id='skills' className='section'>
      <div className='section__inner'>
        <h2 className='section__title'>Setup</h2>

        <dl className='setup'>
          {skills.map((group) => (
            <div key={group.group} className='setup__row'>
              <dt className='setup__group'>{group.group}</dt>
              <dd>
                <ul className='tags tags--lead'>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Skills
