const WorkCard = ({ img, title }) => {
  return (
    <article className="border-2 border-[#d8bf93]">
      <div className="relative group overflow-hidden">
        <img
          className="max-w-full group-hover:scale-[1.02] duration-300"
          src={img}
        />
        <span className="bg-bodyGray absolute h-full w-full top-0 left-0 opacity-30 group-hover:opacity-0 duration-300"></span>
        <span className="bg-[#00000077] absolute lg:h-24 h-20 w-full bottom-0 left-0 p-4 group-hover:bg-[#00000085] duration-300 transition-colors">
          <h2 className="text-white lg:subTitle text-2xl z-50 ">{title}</h2>
          <span className="text-white lg:text-lg text-base">
            made on Fiverr
          </span>
        </span>
      </div>
    </article>
  );
};

export default WorkCard;
