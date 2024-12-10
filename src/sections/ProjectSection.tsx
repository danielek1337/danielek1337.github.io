import { useRef } from "react";
import ProjectBox from "../components/projects/ProjectBox";
import { projectsData } from "../data/projectsData";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectSection() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="projects" ref={scrollRef}>
      {projectsData.map((item, index) => (
        <ProjectBox
          key={index}
          id={index}
          name={item.name}
          img={item.image}
          description={item.description}
          technologies={item.technologies}
          url={item.url}
        />
      ))}
    </section>
  );
}
