import { Route, Routes } from "react-router-dom"
import { SystemRoutes } from "../sysAlumnos/routes/SystemRoutes"
import { GeneralLayout } from "../sysAlumnos/layouts/GeneralLayout"



export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={
        <GeneralLayout>
          <SystemRoutes />
        </GeneralLayout>
      } />
    </Routes>
  )
}
