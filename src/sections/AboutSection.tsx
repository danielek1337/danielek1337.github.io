import { motion, useTransform, useScroll } from "framer-motion";
import { techStack } from "../data/techstackData";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const { scrollY } = useScroll();

  const [scrollRange, setScrollRange] = useState([0, 2000]);

  useEffect(() => {
    const height = document.body.scrollHeight - window.innerHeight;

    setScrollRange([0, Math.max(height, 2000)]);
  }, []);

  const maskPosition = useTransform(scrollY, scrollRange, ["100%", "0%"]);
  return (
    <section id="about" className="lg:h-[75vh] flex flex-col relative">
      <div className="z-10 text-shadow-lg">
        <div className="flex relative w-fit">
          <h3 className="lg:text-6xl text-3xl">About</h3>
          <span className="absolute right-0 bottom-0 h-px bg-white w-2/3"></span>
        </div>
        <p className="max-w-2xl pt-6">
          Nice to meet you! <br /> I'm Daniel, graduate with an engineering
          degree in Computer Science and a frontend developer based in Poland.
        </p>
        <p className="max-w-2xl pt-6 font-thin">My tech stack:</p>
        <ol className="pt-6 flex-wrap gap-9 list-image-listMarker list-inside	w-fit m-auto lg:ml-5">
          {techStack.map((item) => (
            <li key={item.id} className="xl:text-xl pb-2">
              {item.name}
            </li>
          ))}
        </ol>
      </div>
      <div className="absolute -z-0 top-1/5 right-0 flex justify-center items-center bg-gradient rounded-full">
        <motion.div
          style={{
            WebkitMaskPosition: maskPosition,
            maskPosition: maskPosition,
          }}
          className="responsive-circle rounded-full"
        ></motion.div>
      </div>
    </section>
  );
}
