import { motion } from "framer-motion";

const DashboardWorkCard = ({ img, title, madeOn, id }) => {
  return (
    <motion.a
    href={`/admin-dashboard/works/${id}`}
      initial={{ opacity: 0.2 }}
      animate={{
        opacity: 1,
        width: "auto",
        height: "auto",
        transition: { duration: 1 },
      }}
      className="border-2 border-[#d8bf93] w-fit"
    >
      <div className="relative group overflow-hidden ">
        <img
          className="max-w-full group-hover:scale-[1.02] duration-300"
          src={img}
          alt={title}
        />
        <span className="bg-bodyGray absolute h-full w-full top-0 left-0 opacity-30 group-hover:opacity-0 duration-300"></span>
        <span className="bg-[#00000077] absolute lg:h-24 h-20 w-full bottom-0 left-0 p-4 group-hover:bg-[#00000085] duration-300 transition-colors">
          <h2 className="text-white lg:subTitle text-2xl z-50 ">{title}</h2>
          <span className="text-white lg:text-lg text-base">
            made on{madeOn}
          </span>
        </span>
      </div>
    </motion.a>
  );
};

export default DashboardWorkCard;
