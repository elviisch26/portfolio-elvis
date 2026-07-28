import { PROFILE } from '../../constants/profile'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Elvis Chávez</span>
        <div className="footer-social">
          <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>•</span>
          <a href={`mailto:${PROFILE.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
