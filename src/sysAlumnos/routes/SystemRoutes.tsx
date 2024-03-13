import { Route, Routes } from "react-router-dom"
import { 
  HomePage, 
  // MateriasAddPage, 
  MateriasListPage, 
  MatriculaDetailsPage, 
  MatriculasAddPage, 
  MatriculasListPage 
} from "../pages"

export const SystemRoutes = () => {
  return (
    
    <Routes>
      <Route path=""               element={<HomePage />} />
      <Route path="matriculas"     element={<MatriculasListPage />} />
      <Route path="matriculas/add" element={<MatriculasAddPage />} />
      <Route path="matriculas/:id" element={<MatriculaDetailsPage />} />

      <Route path="materias"     element={<MateriasListPage />} />
      {/* <Route path="materias/add" element={<MateriasAddPage />} /> */}
    </Routes>
  )
}
