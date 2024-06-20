import Link from "next/link";

import Image from "next/image";

import LogoutButton from "./LogoutButton";
import { getSession } from "@/lib/getSession";

const NavBar = async () => {
  const session = await getSession();

  const role = session?.user?.role;

  return (
    <nav className="relative inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="/" className="flex items-center" prefetch={false}>
            <Image
              src="/img/abccontrol_logo_desktop.webp"
              alt="Logo"
              width={60}
              height={60}
            />
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              href="/"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Acasa
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Access Site
            </Link>
            {role === "admin" && (
              <Link
                href="/admin"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Admin
              </Link>
            )}
          </nav>
          <div className="flex items-center gap-4">
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
