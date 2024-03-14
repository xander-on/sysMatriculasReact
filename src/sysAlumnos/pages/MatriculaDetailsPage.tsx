import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { MatriculaMateriasEdit } from "../components";
import { useEffect, useState } from "react";
import { getMatriculaMaterias } from "../../store/systemAlumnos";

export const MatriculaDetailsPage = () => {

  const { id } = useParams();
  const { matriculas, matriculaMaterias } = useAppSelector((state) => state.systemAlumnos);
  const dispatch = useAppDispatch();
  
  const currentMatricula = matriculas?.find((matricula) => matricula.id === id);

  const [openEditMaterias, setOpenEditMaterias] = useState(false);

  useEffect( () => {
    if( !id ) return;
    dispatch( getMatriculaMaterias( id ) );
  }, []);


  return (
    <div className="container my-3">

      <Link className="btn btn-outline-primary" to="/matriculas">Atras</Link>

      <div className="row">
        <div className="card my-3 col-6">
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

            <hr />

            <div className="">
              <div className="d-flex justify-content-between">
                <h5>Materias: </h5> 
                <button 
                  className="btn btn-outline-success mx-4"
                  onClick={ () => setOpenEditMaterias(!openEditMaterias) }
                >
                  Editar Materias
                </button>
              </div>
              <ul>
                {
                  matriculaMaterias.materias.map( 
                    (materia) => <li key={materia.id}>{materia.nombre}</li> 
                  )
                }
              </ul>
            </div>

          </div>
        </div>

        { openEditMaterias && <MatriculaMateriasEdit /> }
      </div>

    </div>
  )
}
