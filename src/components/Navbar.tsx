import { motion } from "framer-motion";
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
          <motion.li
            key={index}
            className="relative list-none"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 1000 }}
          >
            <a
              href={`#${item.href}`}
              className="text-lg font-medium text-white"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-black"></span>
            </a>
            <span
              className={`absolute right-0 bottom-0 h-px bg-white transition-all duration-300 ease-in-out ${
                activeSection === item.href ? "w-1/2" : "w-0"
              } hover:w-full`}
            ></span>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
