import { BiSolidQuoteAltLeft } from "react-icons/bi";
import StarRating from "../components/education/StarRating";
import { Link } from "react-router-dom";



const DashboardReviewCard = ({ review, name, star, flag, country }) => {
  return (
    <Link to={`/admin-dashboard/reviews/${name}`} className="bg-white rounded-xl flex flex-col h-full border p-4">
      <span>
        <BiSolidQuoteAltLeft size={58} color="#60574c" />
      </span>
      <div><StarRating rating={star}></StarRating></div>
      <p className="text-textGray lg:text-lg text-base mb-5 mt-2 flex-1">{review}</p>
      <h2 className="text-[#60574c] font-bold text-2xl">{name}</h2>
      <div className="flex items-center gap-2 mt-2">
        <span>
          <img className="max-w-6 rounded-sm" src={flag} alt="" />
        </span>
        <span>{country}</span>
      </div>
    </Link>
  );
};

export default DashboardReviewCard;
