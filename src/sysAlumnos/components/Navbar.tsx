import { Link } from "react-router-dom"



export const Navbar = () => {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link  to="/" className="nav-item nav-link navbar-brand">🏫 System</Link>
          <Link to="/matriculas" className="nav-item nav-link">Matriculas</Link>
          <Link to="/materias" className="nav-item nav-link" >Materias</Link>
        </div>
      </div>
    </nav>
  )
}
