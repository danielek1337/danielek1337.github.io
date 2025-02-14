import { useRef } from "react";
import Navbar from "../components/Navbar";
import StickyCursor from "../components/ui/StickyCursor";

type MainLayoutProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function MainLayout({ children }: MainLayoutProps) {
  const stickyElement = useRef([]);
  return (
    <div>
      <Navbar ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      {children}
    </div>
  );
}
