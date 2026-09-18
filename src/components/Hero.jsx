import { about } from '../portfolio'
import { GitHubIcon, LinkedInIcon } from './icons'

const Hero = () => {
  const { name, predicate, social } = about
  const resume = import.meta.env.BASE_URL + about.resume

  return (
    <section className='hero' id='top'>
      <div className='hero__inner'>
        <h1 className='hero__name'>{name}</h1>
        <p className='hero__predicate'>{predicate}</p>

        <dl className='readout'>
          <div className='readout__cell'>
            <dt>Location</dt>
            <dd>{about.location}</dd>
          </div>
          <div className='readout__cell'>
            <dt>Currently at</dt>
            <dd>{about.current}</dd>
          </div>
          <div className='readout__cell'>
            <dt>Availability</dt>
            <dd className='readout__live'>
              <span className='pulse' aria-hidden='true' />
              {about.availability}
            </dd>
          </div>
          <div className='readout__cell'>
            <dt>Focus</dt>
            <dd>{about.focus}</dd>
          </div>
        </dl>

        <div className='hero__actions'>
          <a className='btn' href={resume} download='Suraj_Lokesh.pdf'>
            Download résumé
          </a>
          <a className='link' href={social.github}>
            <GitHubIcon /> GitHub
          </a>
          <a className='link' href={social.linkedin}>
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
