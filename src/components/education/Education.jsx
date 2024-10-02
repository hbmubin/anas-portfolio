import EduList from "./EduList";
import ReviewCard from "./ReviewCard";
import usa from "./../../assets/pngegg (1).png";
import uk from "./../../assets/pngegg (2).png";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-bodyBlack pt-[92px] pb-[530px] relative"
    >
      <div className="defaultContainer">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
            <div>
              <h2 className="grayTitle">Education</h2>
              <div className="flex flex-col lg:mt-[74px] mt-14 lg:gap-20 gap-10">
                <EduList
                  title="University of Dhaka"
                  des="B.A. degree. public administration
Graduated 2022"
                ></EduList>
                <EduList
                  title="Jhalokathi N. S. Kamil madrasah"
                  des="Certificate degree. higher secondary certificate
Graduated 2016"
                ></EduList>
                <EduList
                  title="Dhaka Alia Madrasah"
                  des="B.A. degree. theological studies
Graduated 2023"
                ></EduList>
              </div>
            </div>
            <div>
              <h2 className="grayTitle">Certification</h2>

              <div className="flex flex-col lg:mt-[74px] mt-14 lg:gap-20 gap-10">
                <EduList
                  title="Professional Email Marketing on MailChimp"
                  des="Graduated 2020"
                ></EduList>
                <EduList
                  title="Klaviyo Advanced Email Marketing"
                  des="Codeman BD Graduated 2020"
                ></EduList>
                <EduList
                  title="Shopify ecommerce website Development"
                  des="Codeman BD Graduated 2020"
                ></EduList>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1034px] mx-auto absolute lg:top-2/3 top-3/4 left-1/2 -translate-x-1/2">
        <div>
          <h1 className="title text-white mb-8">What clients say </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <ReviewCard
            star="5"
            review="My order was completed almost 3 days early. For the few days he worked on my order, he set up my email flows and stayed in communication even with the time difference, I wasn't waiting hrs for a reply. He went back and did revisions for me, and I am grateful. Will definitely hire again next month for more flows."
            name="tekabootreasure"
            country="United States"
            flag={usa}
          ></ReviewCard>
          <ReviewCard
            star="5"
            review="Highly recommend Anas! Really helpful, fast, professional, responsive and very patiently answered all my questions and helped make changes. His work took the stress out from a small business owner like myself. Really appreciated, exactly what I am looking for!"
            name="shannonswelt"
            country="United Kingdom"
            flag={uk}
          ></ReviewCard>
          <ReviewCard
            star="5"
            review="Anas was great and took a look at what I needed him to do for my Shopify and Klayvio integration. Quick communication/responses. Thanks again Anas, I will be ordering again in the future!"
            name="jes_bad"
            country="United States"
            flag={usa}
          ></ReviewCard>
        </div>
      </div>
    </section>
  );
};

export default Education;
