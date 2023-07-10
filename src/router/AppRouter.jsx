import { LoginPage } from "../auth/pages/LoginPage"
import { MainRoutes } from "../main/routes/MainRoutes"

import { Route, Routes } from "react-router-dom"


export const AppRouter = () => {
  return (

    <>
      
    <Routes>

        <Route path="/login" element={<LoginPage />} />

        <Route path="/*" element={<MainRoutes />} />
        
    </Routes>
</>
    

  )
}
