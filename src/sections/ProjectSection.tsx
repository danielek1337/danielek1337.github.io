import ProjectBox from "../components/projects/ProjectBox";
import { projectsData } from "../data/projectsData";

export default function ProjectSection() {
  return (
    <section id="projects">
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
