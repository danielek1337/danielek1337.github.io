import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const yPosition = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <header className="lg:bg-hero bg-heroMobile h-screen bg-cover bg-center bg-no-repeat shadow-heroBoxShadow text-center relative">
      <motion.div
        className="absolute m-auto top-1/3 left-0 right-0 backdrop-blur-sm w-fit p-4 rounded-3xl shadow-projectCardShadow"
        style={{ y: yPosition }}
      >
        <h2 className="text-shadow-lg xl:text-4xl text-2xl font-bold leading-loose">
          Welcome to my portfolio site.
        </h2>
        <h3 className="text-shadow-lg xl:text-2xl text-xl font-bold">
          I'm Daniel, frontend developer.
        </h3>
      </motion.div>
    </header>
  );
}
