import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth/useAuth";
import { TitleCard } from "./components/TitleCard";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Confirm } from "./routes/Confirm";
import { ProjectsBoard } from "./routes/ProjectsBoard";
import AmplifyGate from "./AmplifyGate";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const location = useLocation();
  return user ? children : <Navigate to="/login" replace state={{ from: location }} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirm />} />

        {/* Sandbox for Amplify smoke tests */}
        <Route path="/sandbox" element={<AmplifyGate />} />

        {/* Private */}
        <Route
          path="/title"
          element={
            <PrivateRoute>
              <TitleCard />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <ProjectsBoard />
            </PrivateRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
