import { configureStore } from '@reduxjs/toolkit'
import { systemAlumnos } from './systemAlumnos/systemAlumnosSlice'

export const store = configureStore({
  reducer: {
    systemAlumnos: systemAlumnos.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch