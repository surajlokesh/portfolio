import { about } from '../portfolio'
import { GitHubIcon, LinkedInIcon } from './icons'

const Footer = () => (
  <footer className='footer'>
    <p>Built by Suraj Lokesh.</p>
    <div className='footer__links'>
      <a className='link' href={about.social.github}>
        <GitHubIcon /> GitHub
      </a>
      <a className='link' href={about.social.linkedin}>
        <LinkedInIcon /> LinkedIn
      </a>
    </div>
  </footer>
)

export default Footer
