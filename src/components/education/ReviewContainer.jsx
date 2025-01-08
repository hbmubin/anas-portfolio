import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App({reviews}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          // When the window is >= 640px
          640: {
            slidesPerView: 1, // 1 slide for small screens
          },
          // When the window is >= 768px
          768: {
            slidesPerView: 2, // 2 slides for medium screens
          },
          // When the window is >= 1024px
          1024: {
            slidesPerView: 3, // 3 slides for larger screens
          },
        }}
      >
        {reviews?.map((review,idx)=>(<SwiperSlide key={idx}>
          <ReviewCard
            star={review.rating}
            review={review.description}
            name={review.reviewerName}
            country={review.reviewerCountry}
            flag={review.flag}
          ></ReviewCard>
        </SwiperSlide>))}
      </Swiper>
    </>
  );
}
