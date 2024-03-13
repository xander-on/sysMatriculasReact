import { useAppSelector } from "../../store";

export const TableMaterias = () => {

  const { materias } = useAppSelector((state) => state.systemAlumnos);

  return (
    
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          {/* <th>Acciones</th> */}
        </tr>
      </thead>
      <tbody>
        {
          materias.map((materia) => (
            <tr key={materia.id}>
              <td>{materia.id}</td>
              <td>{ materia.nombre }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
