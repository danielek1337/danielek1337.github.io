import { motion } from "framer-motion";

const navItems = [
  {
    label: "PROJECTS",
    href: "projects",
  },
  {
    label: "ABOUT",
    href: "about",
  },
  {
    label: "CONTACT",
    href: "contact",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 items-center z-10 backdrop-blur shadow-projectCardShadow">
      <motion.h1
        className="text-2xl font-bold"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <a href="/">PORTFOLIO</a>
      </motion.h1>
      {/* <ul className="flex gap-6">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className="relative list-none"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href={`#${item.href}`} className="text-lg font-medium relative">
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-black"></span>
            </a>
          </motion.li>
        ))}
      </ul> */}
    </nav>
  );
}
