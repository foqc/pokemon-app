import { useAuthStore } from "../../shared/libs/store";

export const useAuth = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  return { isAuthenticated, login, logout };
};
