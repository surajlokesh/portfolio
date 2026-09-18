import { about, contact } from '../portfolio'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section id='contact' className='section section--contact'>
      <div className='section__inner'>
        <div className='panel'>
          <h2 className='panel__title'>Hiring? Start here.</h2>

          <a className='panel__email' href={`mailto:${contact.email}`}>
            {contact.email}
          </a>

          <dl className='readout readout--panel'>
            <div className='readout__cell'>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div className='readout__cell'>
              <dt>Based in</dt>
              <dd>{about.location}</dd>
            </div>
            <div className='readout__cell'>
              <dt>Availability</dt>
              <dd className='readout__live'>
                <span className='pulse' aria-hidden='true' />
                {about.availability}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Contact
