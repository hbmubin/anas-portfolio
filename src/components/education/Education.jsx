import EduList from "./EduList";
import ReviewContainer from "./ReviewContainer";

const Education = ({reviews}) => {
  return (
    <section
      id="education"
      className="bg-bodyBlack pt-[92px] pb-[460px] relative"
    >
      <div className="defaultContainer">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
            <div>
              <h2 className="grayTitle">Education</h2>
              <div className="flex flex-col lg:mt-[74px] mt-14 lg:gap-20 gap-10">
                <EduList
                  title="University of Dhaka"
                  des="B.S.S in public administration
Graduated 2022"
                ></EduList>
                <EduList
                  title="Jhalokathi N. S. Kamil madrasah"
                  des="Certificate degree. higher secondary certificate
Graduated 2016"
                ></EduList>
                <EduList
                  title="Dhaka Alia Madrasah"
                  des="B.I.T.S
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
      <div className="container max-w-[1094px] mx-auto absolute lg:top-2/3 top-3/4 left-1/2 -translate-x-1/2">
        <div>
          <h1 className="title text-white mb-8">What clients say </h1>
        </div>
        <ReviewContainer reviews={reviews}></ReviewContainer>
      </div>
    </section>
  );
};

export default Education;
