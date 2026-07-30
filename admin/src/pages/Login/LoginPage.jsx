import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login as loginRequest }
  from "../../services/auth.service";

import { useAuth }
  from "../../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] =
    useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response =
        await loginRequest(form);

      login(response.data);

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Login failed."
      );
    }
  }

  return (
    <div>
      <h1>Admin Login</h1>

      {error && (
        <p>{error}</p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) =>
            setForm({
              ...form,
              username:
                e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password:
                e.target.value,
            })
          }
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}