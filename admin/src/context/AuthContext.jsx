import { useState } from "react";

import AuthContext from "./auth-context.js";

function getStoredUser() {
  const storedUser =
    localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    localStorage.removeItem("user");
    return null;
  }
}

export function AuthProvider({
  children,
}) {
  const [token, setToken] =
    useState(() =>
      localStorage.getItem("token")
    );

  const [user, setUser] =
    useState(getStoredUser);

  function login(authData) {
    if (
      !authData ||
      !authData.token ||
      !authData.user
    ) {
      throw new Error(
        "Authentication data is incomplete."
      );
    }

    localStorage.setItem(
      "token",
      authData.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(authData.user)
    );

    setToken(authData.token);
    setUser(authData.user);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        isAuthenticated:
          Boolean(token && user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}