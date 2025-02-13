interface SectionTitleProps {
  label: string;
}

export default function SectionTitle({ label }: SectionTitleProps) {
  return (
    <div className="relative w-fit">
      <h2 className="lg:text-6xl text-3xl uppercase">{label}</h2>
      <span className="absolute right-0 bottom-0 h-[2px] bg-white w-2/3"></span>
    </div>
  );
}
