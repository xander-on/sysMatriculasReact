import { Carrera } from ".";


export interface Matricula {
  id: string;
  nombre: string;
  apellidos: string;
  direccion:string;
  telefono: string;
  carrera: Carrera;
}


export interface MatriculaForm{
  id: string;
  nombre: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  idCarrera:string;
}

