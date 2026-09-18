import { projects } from '../portfolio'

const label = { running: 'In progress', complete: 'Complete' }

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section'>
      <div className='section__inner'>
        <h2 className='section__title'>Projects</h2>

        <div className='table'>
          <div className='table__head'>
            <span />
            <span>Status</span>
            <span>Project</span>
          </div>

          {projects.map((project, i) => (
            <article key={project.id} className='proj' style={{ '--i': i }}>
              <span className='rec__idx'>
                {String(i + 1).padStart(2, '0')}
              </span>

              <p className={`status status--${project.status}`}>
                <span className='status__dot' aria-hidden='true' />
                {label[project.status]}
              </p>

              <div className='proj__body'>
                <h3 className='proj__name'>{project.name}</h3>
                <p className='proj__desc'>{project.description}</p>
                <ul className='tags tags--lead'>
                  {project.stack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <p className='proj__links'>
                    {project.links.map((link) => (
                      <a key={link.url} className='link' href={link.url}>
                        {link.label}
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
