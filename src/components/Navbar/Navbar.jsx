import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar-root">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">~/elvis</a>
        <div className="navbar-links">
          <a href="#about" className="navbar-link">{'// sobre mí'}</a>
          <a href="#proyectos" className="navbar-link">{'// proyectos'}</a>
          <a href="#skills" className="navbar-link">{'// herramientas'}</a>
        </div>
      </div>
    </nav>
  )
}
