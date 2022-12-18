import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom"
import Home from "../pages/home"
import { countrys } from "./path"




const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} element={<Navigate to={countrys.home} />} />
        <Route path={countrys.home} element={<Home />} />
        <Route path={countrys.home} element={<Home />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;