import React, { useEffect, useState } from "react";
import { IconButton, Drawer } from "@material-tailwind/react";
import { ChevronDoubleRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import SideBar from "./SideBar";

export function SideBarContainer() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;

      setIsDesktop(desktop);

      if (desktop) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";

        window.scrollTo(0, scrollY);
      };
    }

    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (isDesktop) {
    return <SideBar />;
  }

  return (
    <>
      {/* Open Button */}
      {!open && (
        <IconButton
          ripple={false}
          onClick={openDrawer}
          color="amber"
          size="lg"
          className="fixed bottom-6 left-0 z-50 rounded-r-full"
        >
          <ChevronDoubleRightIcon className="h-6 w-6" />
        </IconButton>
      )}

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeDrawer}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-80
          bg-blue-gray-50
          shadow-2xl
          transition-transform duration-300 ease-in-out
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Close button */}
        <Drawer
          open={open}
          onClose={closeDrawer}
          size={320}
        >
          <SideBar closeDrawer={closeDrawer} />
        </Drawer>
      </aside>
    </>
  )
}