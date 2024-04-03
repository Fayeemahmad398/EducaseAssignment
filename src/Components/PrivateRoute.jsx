import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute() {
  let currUser = JSON.parse(localStorage.getItem("currUser"));
  return !currUser ? <Navigate to={"/signup"} /> : <Outlet />

}

export default PrivateRoute
