import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout({
  children,
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}