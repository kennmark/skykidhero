import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  AuthProvider,
} from "./context/AuthContext";

import ProtectedRoute
  from "./routes/ProtectedRoute";

import LoginPage
  from "./pages/Login/LoginPage";

import DashboardPage
  from "./pages/Dashboard/DashboardPage";

import NewsListPage 
  from "./pages/News/NewsListPage";
import NewsCreatePage from "./pages/News/NewsCreatePage";
import NewsEditPage from "./pages/News/NewsEditPage.jsx";
import MapListPage from "./pages/Maps/MapListPage.jsx";
import MapEditPage from "./pages/Maps/MapEditPage.jsx";
import SpiritEditPage from "./pages/Spirits/SpiritEditPage.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/news"
            element={
              <ProtectedRoute>
                <NewsListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/news/create"
            element={
              <ProtectedRoute>
                <NewsCreatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/maps"
            element={
              <ProtectedRoute>
                <MapListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/maps/:id/edit"
            element={
              <ProtectedRoute>
                <MapEditPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/spirits/:id/edit"
            element={
              <ProtectedRoute>
                <SpiritEditPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/news/:id/edit"
            element={
              <ProtectedRoute>
                <NewsEditPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}