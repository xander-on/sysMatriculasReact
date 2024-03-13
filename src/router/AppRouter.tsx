import { Route, Routes } from "react-router-dom"
import { SystemRoutes } from "../sysAlumnos/routes/SystemRoutes"



export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<SystemRoutes />} />
    </Routes>
  )
}
