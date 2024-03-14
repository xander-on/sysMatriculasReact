import { Navbar } from "../components"



export const GeneralLayout = ({children}:{ children: JSX.Element }) => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        {children}
      </div>
    </div>
  )
}
