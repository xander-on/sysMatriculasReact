import { useAppSelector } from '../../store';

export const TableMatriculas = () => {
  const { matriculas } = useAppSelector((state) => state.systemAlumnos);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Carrera</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          matriculas.map((matricula) => (
            <tr key={matricula.id}>
              <td>{matricula.id}</td>
              <td>{ matricula.nombre } { matricula.apellidos }</td>
              <td>{ matricula.carrera.nombre }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

