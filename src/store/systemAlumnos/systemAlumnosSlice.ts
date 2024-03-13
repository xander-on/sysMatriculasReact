import { createSlice } from '@reduxjs/toolkit';
import {  Carrera, Materia, Matricula } 
  from '../../sysAlumnos/interfaces/';

interface typeState {
  materias:Materia[],
  carreras:Carrera[],
  matriculas:Matricula[],
}

const initialState:typeState = {
  materias: [],
  carreras: [],
  matriculas: [],
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

    addMatricula(state, action) {
      state.matriculas.push(action.payload);
    },

    
  }
});

export const { 
  setCarreras,
  setMatriculas,
  addMatricula,
} = systemAlumnos.actions;