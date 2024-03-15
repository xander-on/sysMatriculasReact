import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Materia } from "../interfaces";
import { getMaterias } from "../../store/systemAlumnos";


export const MatriculaMateriasEdit = () => {

  const { materias, matriculaMaterias } = useAppSelector((state) => state.systemAlumnos);
  const dispatch = useAppDispatch();

  if( materias.length === 0 ) dispatch( getMaterias() );

  const [ materiasSelected, setMateriasSelected ] = useState([...matriculaMaterias.materias]);

  const [ otherMaterias, setOtherMaterias ] = useState<Materia[]>(
    materias.filter( (materia) => !matriculaMaterias.materias.find( (m) => m.id === materia.id ) )
  );


  const onAddMaterias = ( id:string ) => {
    const newAddMateria = otherMaterias.find( (m) => m.id === id );
    if( !newAddMateria ) return;
    setMateriasSelected([...materiasSelected, newAddMateria]);
    setOtherMaterias( otherMaterias.filter( (m) => m.id !== id ) );
  }

  const onRemoveMaterias = ( id:string ) => {
    const newRemoveMateria = materiasSelected.find( (m) => m.id === id );
    if( !newRemoveMateria ) return;
    setOtherMaterias([...otherMaterias, newRemoveMateria]);
    setMateriasSelected( materiasSelected.filter( (m) => m.id !== id ) );
  }


  return (
    <div className="my-3 col-6">
      <div className="card">

        <div className="card-header">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">Editar Materias</h5>
          </div>
        </div>
        
        <div className="card-body">
          <h6 className="mb-3">Mis materias:</h6>
          { materiasSelected.length === 0 &&
            <p className="mb-3 text-warning">
              No has agregado ninguna materia!
            </p>
          }

          <table className="table">
            <tbody>
              { materiasSelected.map((materia) => (
                <tr key={materia.id}>
                  <td>{ materia.nombre }</td>
                  <td>
                    <button 
                      className="btn btn-outline-danger"
                      onClick={ () => onRemoveMaterias( materia.id ) }
                    >Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {
            otherMaterias &&
            <h6 className="mb-3"> Agregar materias </h6>
          }
          <table className="table">
            <tbody>
              { otherMaterias.map((materia) => (
                <tr key={materia.id}>
                  <td>{ materia.nombre }</td>
                  <td>
                    <button 
                      className="btn btn-outline-primary"
                      onClick={ () => onAddMaterias( materia.id ) }
                    >Agregar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>    

          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-secondary mx-3">
              Cancelar
              </button>

            <button
              className="btn btn-success"
            >Guardar</button>

          </div>
        </div>
      </div>

      
    </div>
  )
}
