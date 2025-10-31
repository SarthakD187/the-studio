import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth/useAuth";
import { TitleCard } from "./components/TitleCard";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Confirm } from "./routes/Confirm";         // <-- new
import { ProjectsBoard } from "./routes/ProjectsBoard";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/confirm" element={<Confirm/>} />
        <Route path="/title" element={<PrivateRoute><TitleCard/></PrivateRoute>} />
        <Route path="/" element={<PrivateRoute><ProjectsBoard/></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </BrowserRouter>
  );
}
