import Link from "next/link";

import { Button } from "../ui/button";
import Image from "next/image";
import { signOut } from "@/auth";

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
            <Image
              src="/img/abccontrol_logo_desktop.webp"
              alt="Logo"
              width={60}
              height={60}
            />
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              href="#"
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
          </nav>
          <div className="flex items-center gap-4">
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button variant="outline" size="sm" onS>
                Deconecteaza-te
              </Button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
