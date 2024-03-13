import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { getCarreras, postMatricula, } from "../../store/systemAlumnos";
import { MatriculaForm } from "../interfaces";
import { useNavigate } from "react-router-dom";


const initialFormValue:MatriculaForm = {
  id:'',
  nombre: '',
  apellidos: '',
  direccion: '',
  telefono: '',
  idCarrera: '',
}

export const MatriculasAddPage = () => {

  const { carreras } = useAppSelector((state) => state.systemAlumnos);
  const dispatch = useAppDispatch();
  const [matriculaForm, setAlumnoForm] = useState( initialFormValue );

  const navigate = useNavigate();

  const isValidForm = () => {
    // const {dni} = matriculaForm;
    // if (dni === '' || dni.length !== 10 || !dni.match(/^[0-9]+$/)) return false;

    const { nombre, apellidos, idCarrera } = matriculaForm;
    if (nombre === '' || apellidos === '') return false;
    if (idCarrera === '') return false;

    return true;
  }

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = isValidForm();
    if (!isValid) return;

    dispatch( postMatricula( matriculaForm ) );
    setAlumnoForm( initialFormValue );
  }

  const onCancel = () => {
    setAlumnoForm( initialFormValue );
    navigate('/matriculas');
  }

  useEffect(() => {
    dispatch( getCarreras() );
  }, [])

  return (
    <div className="container col-6 mb-4">
      <h4>Agregar Alumno</h4>
      <form onSubmit={ onSubmit }>

        <div className="form-group mt-3">
          <label htmlFor="" className="form-label">Nombre:</label>
          <input 
            className="form-control" 
            type="text" 
            value={ matriculaForm.nombre }
            onChange={ (e) => setAlumnoForm({ ...matriculaForm, nombre: e.target.value }) }
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="" className="form-label">Apellidos:</label>
          <input 
            className="form-control" 
            type="text"
            value={ matriculaForm.apellidos }
            onChange={ (e) => setAlumnoForm({ ...matriculaForm, apellidos: e.target.value }) }
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="" className="form-label">Direccion:</label>
          <input 
            className="form-control" 
            type="text"
            value={ matriculaForm.direccion }
            onChange={ (e) => setAlumnoForm({ ...matriculaForm, direccion: e.target.value }) }
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="" className="form-label">Telefono:</label>
          <input 
            className="form-control" 
            type="text" 
            value={ matriculaForm.telefono }
            onChange={ (e) => setAlumnoForm({ ...matriculaForm, telefono: e.target.value }) }
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="" className="form-label">Carrera:</label>
          <select
            className="form-control"
            value={matriculaForm.idCarrera}
            onChange={ (e) => setAlumnoForm({ ...matriculaForm, idCarrera: e.target.value }) }
          >
            <option value="" disabled>-- Seleccione --</option>
            {
              carreras.map( (carrera) => (
                <option key={carrera.id} value={carrera.id}>{carrera.nombre}</option>
              ))
            }
          </select>
        </div>

        <div className="d-flex justify-content-between form-group mt-5">
          <button onClick={ onCancel } className="btn btn-danger"> Cancelar</button>
          <button disabled={!isValidForm()} className="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  )
}
