import { Link } from "react-router-dom"


export const HomePage = () => {
  return (

    <div className="">
      <Link to={"/matriculas"} className="text-decoration-none">
        <div className="card text-white bg-success mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">
            <span style={{fontSize: '3rem'}}>📋</span>
          </div>
          <div className="card-body">
            <h4 className="card-title">Matriculas</h4>
          </div>
        </div>
      </Link>

      <Link to={"/materias"} className="text-decoration-none">
        <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">
            <span style={{fontSize: '3rem'}}>📚</span>
          </div>
          <div className="card-body">
            <h4 className="card-title">Materias</h4>
          </div>
        </div>
      </Link>
      
    </div>
  )
}
