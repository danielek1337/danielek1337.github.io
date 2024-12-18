import { SetStateAction, useEffect, useState } from "react";

const navItems = [
  {
    label: "ABOUT",
    href: "about",
  },
  {
    label: "PROJECTS",
    href: "projects",
  },
  {
    label: "CONTACT",
    href: "contact",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.2,
    };

    const handleIntersection = (entries: any[]) => {
      entries.forEach(
        (entry: {
          isIntersecting: any;
          target: { id: SetStateAction<string> };
        }) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      );
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <nav className="xl:flex  justify-between py-2 px-4 items-center bg-transparent z-50 backdrop-blur mix-blend-difference shadow-projectCardShadow sticky top-0 text-center">
      <h1 className="text-2xl font-bold hidden xl:block">
        <a href="/">PORTFOLIO</a>
      </h1>
      <ul className="flex gap-6 justify-center">
        {navItems.map((item, index) => (
          <li key={index} className="relative list-none group">
            <a
              href={`#${item.href}`}
              className="text-lg font-medium text-white "
            >
              {item.label}
            </a>
            <span
              className={`absolute right-0 bottom-0 h-px bg-white transition-all duration-300 ease-in-out group-hover:w-1/2 ${
                activeSection === item.href ? "w-1/2" : "w-0"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
