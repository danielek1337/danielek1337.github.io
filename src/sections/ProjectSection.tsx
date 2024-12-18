import ProjectBox from "../components/projects/ProjectBox";
import SectionTitle from "../components/ui/SectionTitle";
import { projectsData } from "../data/projectsData";

export default function ProjectSection() {
  return (
    <section id="projects">
      <SectionTitle label="projects" />
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
