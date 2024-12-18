import { motion } from "framer-motion";

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
      transition: { duration: 0.4, type: "spring" },
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
      transition: { duration: 0.4, type: "spring" },
    },
  };

  return (
    <motion.div
      className={`py-2 xl:pb-10 my-10 w-full shadow-projectCardShadow lg:flex lg:gap-9 ${flexOrder} ${alignmentClass}`}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <div className="border px-2 pb-2 backdrop-blur-sm rounded-2xl flex-[0.6] ">
        <h3 className="xl:text-2xl text-xl font-bold text-center py-2">
          {name}
        </h3>
        <img
          src={img}
          alt={`Project ${id} image`}
          className="w-[100%] rounded-xl"
        />
      </div>
      <div className="lg:text-lg text-sm flex flex-col items-center justify-center relative flex-[0.4]">
        <p className="font-medium text-justify z-10 mt-auto xl:py-0 pt-5 pb-4">
          {description}
        </p>
        <p className="xl:pt-10 z-10 font-thin">Technologies used: </p>
        <motion.ul
          className="flex xl:gap-10 gap-x-10 flex-wrap my-auto z-10 justify-center font-bold"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: true, amount: 0.3 }}
          variants={descriptionVariant}
        >
          {technologies?.map((item, index) => (
            <li key={index} className="text-shadow-lg">
              {item}
            </li>
          ))}
        </motion.ul>
        <motion.div
          className="tech-box absolute -z-0 top-2/4 w-[350px] lg:h-1/2 "
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={bgVariant}
          viewport={{ once: true, amount: 0.3 }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
