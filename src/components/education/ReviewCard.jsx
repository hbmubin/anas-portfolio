import { BiSolidQuoteAltLeft } from "react-icons/bi";

const ReviewCard = ({ review, name, star, flag, country }) => {
  return (
    <article className="bg-white p-7 rounded-xl flex flex-col">
      <span>
        <BiSolidQuoteAltLeft size={58} color="#60574c" />
      </span>
      <p className="text-textGray lg:text-lg text-base my-5 flex-1">{review}</p>
      <h2 className="text-[#60574c] font-bold text-2xl">{name}</h2>
      <div className="flex items-center gap-2 mt-2">
        <span>
          <img className="max-w-6 rounded-sm" src={flag} alt="flag" />
        </span>
        <span className="">{country}</span>
      </div>
    </article>
  );
};

export default ReviewCard;
