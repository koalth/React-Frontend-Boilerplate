import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function BlockLayout(props: LayoutProps) {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4">{props.children}</div>
      </div>
    </div>
  );
}
