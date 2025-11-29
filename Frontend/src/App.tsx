import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Signup } from "./pages/signUp"
import Dashboard from "./pages/dashboard"
import { SignIn } from "./pages/signIn"
import LandingPage from "./pages/landingPage"

export default function App(){
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/share:shareid" element={<Dashboard/>}></Route>
    </Routes>
  </BrowserRouter>
}
