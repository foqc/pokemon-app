import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { useAuth } from "../auth/hooks/useAuth";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const RedirectIfAuthed = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" replace /> : <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthed>
        <LoginPage />
      </RedirectIfAuthed>
    ),
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <HomePage />
      </RequireAuth>
    ),
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
