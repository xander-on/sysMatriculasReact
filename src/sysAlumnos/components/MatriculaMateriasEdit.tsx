import { useAppSelector } from "../../store";



export const MatriculaMateriasEdit = () => {

  const { materias } = useAppSelector((state) => state.systemAlumnos);

  return (
    <div className="my-3 col-6">

      <div className="card">
        <div className="card-header">
          
          <div className="d-flex justify-content-between">
            <h5 className="card-title">Materias</h5>
          </div>

        </div>
        
        <div className="card-body">
          <table className="table">
          
            <tbody>
              {  materias.map((materia) => (
                <tr key={materia.id}>
                  <td>{ materia.nombre }</td>

                  <td>
                    <input
                      type="checkbox"
                      name={materia.id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
    </div>
  )
}
