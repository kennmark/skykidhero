import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex h-19 items-center justify-between border-b bg-white px-8">

      <div>
        <p className="text-sm text-gray-500">
          Welcome back
        </p>

        <p className="font-semibold">
          {user?.username}
        </p>
      </div>

      <button
        onClick={logout}
        className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Logout
      </button>

    </header>
  );
}