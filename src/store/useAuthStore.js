import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email, password) => {
        // Mock authentication check
        if (email === "admin@koulchbatel.com" && password === "admin123") {
          const adminUser = {
            email,
            role: "admin",
            name: "System Administrator",
          };
          set({ user: adminUser, isAuthenticated: true });
          return { success: true, user: adminUser };
        } else if (email && password) {
          // Allow any login for regular users for standard flow testing
          const regularUser = {
            email,
            role: "user",
            name: email.split("@")[0],
          };
          set({ user: regularUser, isAuthenticated: true });
          return { success: true, user: regularUser };
        }
        return { success: false, message: "Invalid credentials" };
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);
