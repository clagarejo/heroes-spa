import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"

import { HeroesRouter } from "../heroes/routes/HeroesRouter"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>


        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={<HeroesRouter />} /> */}


        <Route path="login/*" element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          </PublicRoute>
        } />



        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRouter />
          </PrivateRoute>
        } />

      </Routes>
    </>
  )
}
