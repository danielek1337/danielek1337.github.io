import EmailIcon from "../components/icons/EmailIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import MagneticContent from "../components/ui/MagneticContent";
import SectionTitle from "../components/ui/SectionTitle";

export default function ContactSection() {
  return (
    <section id="contact" className="h-[50vh]">
      <SectionTitle label="contact" />
      <div className="flex justify-center items-center h-full">
        <div className="md:p-14 flex justify-between align-middle gap-4 md:gap-8 bg-[#0f2027] rounded-2xl shadow-projectCardShadow shadow-[#436979]">
          <MagneticContent>
            <a href="mailto:urban.daniel64@gmail.com" className="icon-color">
              <EmailIcon />
            </a>
          </MagneticContent>
          <MagneticContent>
            <a
              href="https://www.linkedin.com/in/daniel-urb/"
              className="icon-color"
            >
              <LinkedinIcon />
            </a>
          </MagneticContent>
          <MagneticContent>
            <a href="https://github.com/danielek1337" className="icon-color">
              <GithubIcon />
            </a>
          </MagneticContent>
        </div>
      </div>
    </section>
  );
}
