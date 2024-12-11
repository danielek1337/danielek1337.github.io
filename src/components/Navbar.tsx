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
    <nav className="xl:flex  justify-between py-2 px-4 items-center bg-transparent z-50 backdrop-blur mix-blend-difference shadow-projectCardShadow sticky top-0 text-center">
      <h1 className="text-2xl font-bold hidden xl:block">
        <a href="/">PORTFOLIO</a>
      </h1>
      <ul className="flex gap-6 justify-center">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className="relative list-none "
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 1000 }}
          >
            <a
              href={`#${item.href}`}
              className="text-lg font-medium text-white "
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-black"></span>
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
