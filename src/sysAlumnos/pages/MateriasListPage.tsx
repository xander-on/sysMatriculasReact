import { useEffect } from "react"
import { useAppDispatch } from "../../store";
import { getMaterias } from "../../store/systemAlumnos";
import { MateriaAddForm, TableMaterias } from "../components";



export const MateriasListPage = () => {

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch( getMaterias() );
  }, [])
  return (
    <div className="container mt-3">

      <MateriaAddForm />


      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between mx-3">
            <h2>Listado de Materias</h2>
          </div>
        </div>
        <div className="card-body">
          <TableMaterias />
        </div>
      </div>
    </div>
  )
}
