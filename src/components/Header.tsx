import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const yPosition = useTransform(scrollY, [0, 300], [0, -150]);
  const arrowHeight = useTransform(scrollY, [0, 500], ["20px", "400px"]);
  const arrowOpacity = useTransform(scrollY, [400, 500], [1, 0]);
  const lineHeight = useTransform(scrollY, [500, 600], ["0px", "400px"]);

  return (
    <header className="lg:bg-hero bg-heroMobile h-screen bg-cover bg-center bg-no-repeat shadow-heroBoxShadow text-center relative overflow-hidden">
      <motion.div
        className="absolute m-auto top-1/3 left-0 right-0 w-fit backdrop-blur-sm p-4 rounded-3xl shadow-projectCardShadow"
        style={{ y: yPosition }}
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2,
          type: "spring",
        }}
      >
        <h2 className="text-shadow-lg xl:text-4xl text-2xl font-bold leading-loose">
          Welcome to my portfolio site.
        </h2>
        <h3 className="text-shadow-lg xl:text-2xl text-xl font-bold">
          I'm Daniel, frontend developer.
        </h3>
      </motion.div>

      <motion.div
        className="absolute top-[50%] left-1/2 transform -translate-x-1/2"
        style={{ height: arrowHeight }}
      >
        <motion.div
          className="bg-white w-1 m-auto"
          style={{
            height: "100%",
          }}
        />
        <motion.div
          className=" border-t-4 border-r-4 border-white w-4 h-4 transform rotate-[135deg]"
          style={{
            opacity: arrowOpacity,
          }}
        />
      </motion.div>
      <motion.div
        className="bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2 "
        style={{
          height: "2px",
          width: lineHeight,
        }}
      />
    </header>
  );
}
