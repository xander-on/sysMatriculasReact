import { createSlice } from '@reduxjs/toolkit';
import {  Carrera, Materia, Matricula, MatriculaMaterias } 
  from '../../sysAlumnos/interfaces/';

interface typeState {
  materias:Materia[],
  carreras:Carrera[],
  matriculas:Matricula[],
  matriculaMaterias:MatriculaMaterias
}

const initialState:typeState = {
  materias: [],
  carreras: [],
  matriculas: [],
  matriculaMaterias:{ idMatricula: '', materias: [] }
};

export const systemAlumnos = createSlice({
  name: 'SystemAlumnos',
  initialState,
  reducers: {
    
    setCarreras(state, action) {
      state.carreras = action.payload;
    },

    setMatriculas(state, action) {
      state.matriculas = action.payload;
    },

    setMaterias(state, action) {
      state.materias = action.payload;
    },

    setMatriculaMaterias( state, action ) {
      state.matriculaMaterias = action.payload;
    },

    addMatricula(state, action) {
      state.matriculas.push(action.payload);
    },

    addMateria(state, action) {
      state.materias.push(action.payload);
    },

    
  }
});

export const { 
  setCarreras,
  setMatriculas,
  setMaterias,
  addMatricula,
  addMateria,
  setMatriculaMaterias
} = systemAlumnos.actions;