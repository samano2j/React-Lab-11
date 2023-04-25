import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";

// pages
import { Home, Create, Update, Login, Register } from "../pages"

const PrivateRoute = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}

function AppRoute() {
  const user = useSelector(state => state.user.user)

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Update />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoute;


//PrivateRoute or ProtectedRoute --- authenticated users
//RestrictedRoute --- routes for public users that an authenticated user cannot access (login/register)
//PublicRoute --- for public users