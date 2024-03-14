import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { getMatriculas } from "../../store/systemAlumnos";
import { TableMatriculas } from "../components";
import { Link } from "react-router-dom";


export const MatriculasListPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch( getMatriculas() );
  }, [])

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between mx-3">
            <h2>Listado de Alumnos Matriculados</h2>
            <Link 
              className="btn btn-success"
              to={"/matriculas/add"}
            >
                Agregar Alumno
            </Link>
          </div>
        </div>
        <div className="card-body">
          <TableMatriculas />
        </div>
      </div>
    </div>
  );
}



