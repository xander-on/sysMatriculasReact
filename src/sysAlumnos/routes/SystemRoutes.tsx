import { Route, Routes } from "react-router-dom"
import { HomePage, MatriculasAddPage, MatriculasListPage } from "../pages"

export const SystemRoutes = () => {
  return (
    
    <Routes>
      <Route path=""               element={<HomePage />} />
      <Route path="matriculas"     element={<MatriculasListPage />} />
      <Route path="matriculas/add" element={<MatriculasAddPage />} />
    </Routes>
  )
}
