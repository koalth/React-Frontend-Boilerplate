import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: LayoutProps) {
  return (
    <div className="max-w flex flex-col mx-auto size-full">
      <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
        <Navbar />
      </header>
      <main id="content">{props.children}</main>
    </div>
  );
}
