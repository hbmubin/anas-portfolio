import { BounceLoader } from "react-spinners";
import useGlobalData from "../hooks/useGlobalData";
import DashboardReviewCard from "./DashboardReviewCard";
import { Link } from "react-router-dom";

const DashboardReviews = () => {
    const {data, error, loading}= useGlobalData()
    // const reviews = data[0].reviews
    const reviews= data[0]?.reviews
    return (
      <div>
        <div className="mb-8 flex justify-between items-center">
                  <h1 id="works" className="title">
                    Clients Reviews
                  </h1>
                  <Link to='/admin-dashboard/reviews/add-review' className="bg-[#ac9e8f] text-white sm:px-10 px-5 sm:py-3 py-2 sm:text-lg text-sm border-2 border-textGray text-nowrap">Add New Review</Link>
                </div>
        <div className="grid items-center justify-center">
          {reviews?.length < 1 && error && <div className="my-10 text-xl">{error}</div>}
          {loading && <BounceLoader className="my-10" size={38} color="currentColor" />}
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 pt-10">
        {reviews?.map((review,idx)=><DashboardReviewCard
        key={idx}
        star={review.rating}
        review={review.description}
        name={review.reviewerName}
        country={review.reviewerCountry}
        flag={review.flag} 
        ></DashboardReviewCard>)}
        </div>
      </div>
    );
};

export default DashboardReviews;