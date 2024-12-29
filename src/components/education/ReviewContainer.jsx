import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard'
import usa from "./../../assets/pngegg (1).png";
import uk from "./../../assets/pngegg (2).png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
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
        <SwiperSlide>
          <ReviewCard
            star="5"
            review="My order was completed almost 3 days early. For the few days he worked on my order, he set up my email flows and stayed in communication even with the time difference, I wasn't waiting hrs for a reply. He went back and did revisions for me, and I am grateful. Will definitely hire again next month for more flows."
            name="tekabootreasure"
            country="United States"
            flag={usa}
          ></ReviewCard>
          </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            star="4.5"
            review="Highly recommend Anas! Really helpful, fast, professional, responsive and very patiently answered all my questions and helped make changes. His work took the stress out from a small business owner like myself. Really appreciated, exactly what I am looking for!"
            name="shannonswelt"
            country="United Kingdom"
            flag={uk}
          ></ReviewCard>
          </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            star="4"
            review="Anas was great and took a look at what I needed him to do for my Shopify and Klayvio integration. Quick communication/responses. Thanks again Anas, I will be ordering again in the future!"
            name="jes_bad"
            country="United States"
            flag={usa}
          ></ReviewCard>
          </SwiperSlide>
          <SwiperSlide>
          <ReviewCard
            star="5"
            review="My order was completed almost 3 days early. For the few days he worked on my order, he set up my email flows and stayed in communication even with the time difference, I wasn't waiting hrs for a reply. He went back and did revisions for me, and I am grateful. Will definitely hire again next month for more flows."
            name="tekabootreasure"
            country="United States"
            flag={usa}
          ></ReviewCard>
          </SwiperSlide>
      </Swiper>
    </>
  );
}
