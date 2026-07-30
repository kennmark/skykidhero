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