import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function BlockLayout(props: LayoutProps) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="grid 2xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}
