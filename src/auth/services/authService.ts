const TOKEN_KEY = "auth_token";

export const authService = {
  login: async (username: string, password: string) => {
    await new Promise((r) => setTimeout(r, 400)); // simulate latency
    if (username === "admin" && password === "admin") {
      localStorage.setItem(TOKEN_KEY, "ok");
      return true;
    }
    throw new Error("Invalid credentials");
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
  isAuthenticated: () => !!localStorage.getItem(TOKEN_KEY),
};
