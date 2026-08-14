import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { login as loginRequest } from "../../services/auth.service";
import useAuth from "../../hooks/useAuth.js"
import CmsLogo from "../../components/brand/CmsLogo.jsx";

const INITIAL_FORM = {
  username: "",
  password: "",
};

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const username = form.username.trim();
    const password = form.password;

    if (!username || !password) {
      setError(
        "Please enter your username and password."
      );
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await loginRequest({
        username,
        password,
      });

      /*
      * Supports:
      *
      * 1. Full Axios response:
      *    response.data.data = { token, user }
      *
      * 2. Unwrapped API response:
      *    response.data = { token, user }
      *
      * 3. Already normalized response:
      *    response = { token, user }
      */

      const payload =
        response?.data ?? response;

      const authData =
        payload?.data ?? payload;

      if (
        !authData?.token ||
        !authData?.user
      ) {
        throw new Error(
          payload?.message ||
            "The server returned an invalid login response."
        );
      }

      login(authData);

      navigate("/", {
        replace: true,
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Unable to sign in. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute -left-30 -top-30 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-35 -right-25 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
      />

      <section className="relative z-10 w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          <header className="mb-8 text-center">
            <div className="mb-8 flex justify-center">
              <CmsLogo />
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Sign in to manage your website content.
            </p>
          </header>

          {error && (
            <div
              role="alert"
              aria-live="polite"
              className="mb-5 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          <form
            className="space-y-5"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Username
              </label>

              <div className="relative">
                <UserIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="username"
                  name="username"
                  type="text"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  autoComplete="username"
                  autoCapitalize="none"
                  spellCheck="false"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-xl border border-white/10 bg-slate-900/70 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Password
              </label>

              <div className="relative">
                <LockClosedIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-xl border border-white/10 bg-slate-900/70 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (currentValue) =>
                        !currentValue
                    )
                  }
                  disabled={isSubmitting}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  aria-pressed={showPassword}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:cursor-not-allowed"
                >
                  {showPassword ? (
                    <EyeSlashIcon
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  ) : (
                    <EyeIcon
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-indigo-500 px-4 text-sm font-semibold text-white shadow-lg shadow-sky-950/30 transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-sky-400/20 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting && (
                <span
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                />
              )}

              {isSubmitting
                ? "Signing in..."
                : "Sign in to CMS"}
            </button>
          </form>

          <footer className="mt-8 border-t border-white/10 pt-5 text-center">
            <p className="text-xs text-slate-500">
              Authorized administrators only
            </p>
          </footer>
        </div>

        <p className="mt-5 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} SkykidHero
        </p>
      </section>
    </main>
  );
}