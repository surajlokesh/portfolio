import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>

      {contact.phone && <p className='contact__info'>Phone: {contact.phone}</p>}

      {contact.email && (
        <p className='contact__info'> email: {contact.email}</p>
      )}
    </section>
  )
}

export default Contact
