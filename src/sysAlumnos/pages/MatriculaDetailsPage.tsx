import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../store";

export const MatriculaDetailsPage = () => {

  const { id } = useParams();
  const { matriculas } = useAppSelector((state) => state.systemAlumnos);
  const currentMatricula = matriculas.find((matricula) => matricula.id === id);
  console.log( currentMatricula );

  return (
    <div className="container my-3">

      <Link className="btn btn-outline-primary" to="/matriculas">Atras</Link>

      <div className="card my-3">
        <div className="card-header">
          <h5 className="card-title">Detalles de la matricula</h5>
        </div>
        <div className="card-body">

          <p className="card-text">
            <strong>Id: </strong> {currentMatricula?.id}
          </p>

          <p className="card-text">
            <strong>Nombre: </strong> {currentMatricula?.nombre} {currentMatricula?.apellidos}
          </p>

          <p className="card-text">
            <strong>Direccion: </strong> {currentMatricula?.direccion}
          </p>

          <p className="card-text">
            <strong>Telefono: </strong> {currentMatricula?.telefono}
          </p>

          <p className="card-text">
            <strong>Carrera: </strong> {currentMatricula?.carrera.nombre}
          </p>

          <p className="card-text">
            <strong>Materias: </strong>
          </p>

            <ul>
              
            </ul>

            <button className="btn btn-outline-success">Agregar Materias</button>
        </div>
      </div>
    </div>
  )
}
