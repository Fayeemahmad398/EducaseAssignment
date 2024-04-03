import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./Components/PrivateRoute"
import Profile from "./Pages/Profile"
import UnknownPage from "./Pages/UnknownPage"
import LandingPage from "./Pages/LandingPage"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route path="/*" element={<UnknownPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
