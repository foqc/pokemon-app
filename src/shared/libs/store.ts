import { create } from "zustand";
import { authService } from "../../auth/services/authService";

interface AuthState {
  isAuthenticated: boolean;
  login: (u: string, p: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: authService.isAuthenticated(),
  login: async (u, p) => {
    await authService.login(u, p);
    set({ isAuthenticated: true });
  },
  logout: () => {
    authService.logout();
    set({ isAuthenticated: false });
    location.assign("/login");
  },
}));
