import { ChangeEvent, FormEvent, useState } from "react";
import { Materia } from "../interfaces";
import { useAppDispatch } from "../../store";
import { postMateria } from "../../store/systemAlumnos";

const initialFormValue:Materia = {
  id: '',
  nombre: '',
}

export const MateriaAddForm = () => {

  const [ materiaForm , setMateriaForm ] = useState( initialFormValue );

  const dispatch = useAppDispatch();

  const onChange = ( e:ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;
    setMateriaForm({
      ...materiaForm,
      [ name ]: value
    })
  }

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (materiaForm.nombre === '') return;

    setMateriaForm( initialFormValue );
    dispatch( postMateria( materiaForm ) );
  }

  return (
    <div className="col-6">
      <h4>Agregar Materia</h4>
      <form 
        className="mb-5"
        onSubmit={ onSubmit }
      >
        <div className="form-group mb-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Nombre de la materia"
            onChange={ onChange }
            name="nombre"
            value={ materiaForm.nombre }
          />
        </div>
        <button 
          className="btn btn-primary" 
        >
          Agregar
        </button>
      </form>
    </div>
  )
}
