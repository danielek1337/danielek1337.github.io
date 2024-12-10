import { motion } from "framer-motion";
import { slideInFromTop } from "../../utils/motion";

type ProjectBoxProps = {
  id: number;
  name?: string;
  description?: string;
  technologies?: string[];
  img?: string;
  url?: string;
};

export default function ProjectBox({
  id,
  name,
  description,
  technologies,
  img,
}: ProjectBoxProps) {
  const isEven = id % 2 === 0;
  const alignmentClass = isEven ? "mr-auto" : "ml-auto";
  const flexOrder = isEven ? "flex-row" : "flex-row-reverse";

  const variants = {
    hidden: {
      x: isEven ? -200 : 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const descriptionVariant = {
    hidden: {
      x: isEven ? -200 : 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const bgVariant = {
    hidden: {
      x: !isEven ? -200 : 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  return (
    <motion.div
      className={`py-2 xl:pb-10 my-10 w-full shadow-projectCardShadow xl:flex xl:gap-9 ${flexOrder} ${alignmentClass}`}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.2 }}
      variants={variants}
    >
      <div className="border px-2 pb-2 backdrop-blur-sm rounded-2xl flex-shrink-0 ">
        <h3 className="text-2xl font-bold text-center py-2">{name}</h3>
        <img
          src={img}
          alt={`Project ${id} image`}
          className="w-auto max-h-[500px] rounded-2xl"
        />
      </div>
      <div className="text-lg flex flex-col items-center justify-center relative">
        <p className="font-bold text-justify z-10 mt-auto xl:py-0 pt-5 pb-4">
          {description}
        </p>
        <p className="xl:pt-10 z-10">Technologies used: </p>
        <motion.ul
          className="flex xl:gap-10 gap-x-10 flex-wrap my-auto z-10 justify-center font-bold"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={descriptionVariant}
        >
          {technologies?.map((item, index) => (
            <li key={index} className="text-shadow-lg">
              {item}
            </li>
          ))}
        </motion.ul>
        <motion.div
          className="tech-box absolute -z-0 top-2/4 w-[400px] xl:h-1/2 opacity-60"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={bgVariant}
          transition={{ ease: "easeOut", duration: 2 }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
