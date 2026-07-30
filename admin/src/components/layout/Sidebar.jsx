import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  NewspaperIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    to: "/",
    label: "Dashboard",
    icon: HomeIcon,
  },
  {
    to: "/news",
    label: "News",
    icon: NewspaperIcon,
  },
  {
    to: "/uploads",
    label: "Uploads",
    icon: ArrowUpTrayIcon,
  },
  {
    to: "/analytics",
    label: "Analytics",
    icon: ChartBarIcon,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-auto w-64 flex-col border-r bg-white">

      <div className="border-b p-6">

        <h1 className="text-xl font-bold text-sky-700">
          SkyKidHero CMS
        </h1>

      </div>

      <nav className="flex-1 p-3">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `mb-1 flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-sky-100 text-sky-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Icon className="h-5 w-5" />

              {link.label}
            </NavLink>
          );
        })}

      </nav>

    </aside>
  );
}