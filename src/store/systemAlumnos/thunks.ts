import { Dispatch } from "@reduxjs/toolkit";
import { addMateria, addMatricula, setCarreras, setMaterias, setMatriculas } from ".";
import { Materia, MatriculaForm } from "../../sysAlumnos/interfaces";


export const getCarreras = () => {
  return async ( dispatch:Dispatch ) => {
    const response = await fetch('http://localhost:8080/carreras');
    const data = await response.json();
    dispatch(setCarreras(data));
  }
}

export const getMatriculas = () => {
  return async ( dispatch:Dispatch ) => {
    const response = await fetch('http://localhost:8080/matriculas');
    const data = await response.json();
    dispatch(setMatriculas(data));
  }
}


export const getMaterias = () => {
  return async ( dispatch:Dispatch ) => {
    const response = await fetch('http://localhost:8080/materias');
    const data = await response.json();
    dispatch( setMaterias(data) );  
  }
}


export const postMatricula = ( matricula:MatriculaForm ) => {
  return async ( dispatch:Dispatch ) => {
    const response = await fetch('http://localhost:8080/matriculas', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(matricula)
    });
    const newMatricula = await response.json();
    dispatch( addMatricula( newMatricula ) );
  }
}


export const postMateria = ( materia:Materia ) => {
  return async ( dispatch:Dispatch ) => {
    const response = await fetch('http://localhost:8080/materias', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(materia)
    });
    const newMateria = await response.json();
    dispatch( addMateria( newMateria ) );
  }
}


// export const postAlumnoMatricula = (alumno:Alumno, matricula:Matricula) => {

//   return async ( dispatch:Dispatch ) => {
//     const response = await fetch('http://localhost:8080/alumnos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(alumno)
//     });
//     const newAlumno:Alumno = await response.json();


//     matricula.idAlumno =  newAlumno.id
//     const bodyMatricula = {
//       "alumno": { "id": matricula.idAlumno },
//       "carrera": { "id": matricula.idCarrera }
//     }
//     const response2 = await fetch('http://localhost:8080/matriculas', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(bodyMatricula)
//     });
//     const newMatricula:Matricula = await response2.json();
//     dispatch( addAlumno( newAlumno ) );
//     dispatch( addMatricula( newMatricula ) );
//   }
// }