import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();

  const [isAtTop, setIsAtTop] = useState(true);

  const yPosition = useTransform(scrollY, [0, 300], [0, -150]);
  const arrowHeight = useTransform(scrollY, [0, 500], ["20px", "450px"]);
  const arrowOpacity = useTransform(scrollY, [400, 500], [1, 0]);
  const lineHeight = useTransform(scrollY, [500, 700], ["0px", "700px"]);
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsAtTop(latest === 0);
    });
    return () => unsubscribe();
  }, [scrollY]);
  return (
    <header className="lg:bg-hero bg-heroMobile h-screen sm:bg-cover bg-contain bg-center bg-no-repeat shadow-heroBoxShadow text-center relative overflow-hidden">
      <motion.div
        className="absolute m-auto top-1/3 left-0 right-0 w-fit rounded-3xl"
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
        <h2 className="text-shadow-lg lg:text-9xl text-7xl font-bold xl:pb-2 ">
          Welcome.
        </h2>
        <h3 className="text-shadow-lg lg:text-4xl text-xl font-bold">
          I'm Daniel, frontend developer.
        </h3>
      </motion.div>

      <motion.div
        className="absolute lg:top-[54%] top-[47%] left-1/2 transform -translate-x-1/2"
        style={{ height: arrowHeight }}
        animate={
          isAtTop
            ? {
                height: ["23px", "30px", "23px"],
              }
            : {}
        }
        transition={
          isAtTop
            ? {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : {}
        }
      >
        <motion.div
          className="bg-white lg:w-[6px] w-1 m-auto"
          style={{
            height: "100%",
          }}
        />
        <motion.div
          className="lg:border-t-[6px] lg:border-r-[6px] border-t-[4px] border-r-[4px] border-white lg:w-6 lg:h-6 w-4 h-4 transform rotate-[135deg]"
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
