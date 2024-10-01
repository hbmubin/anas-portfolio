const Strengths = () => {
  return (
    <section className="bg-bodyBlack lg:px-0 px-4">
      <div className="defaultContainer pt-[78px] pb-[108px]">
        <div>
          <h2 className="grayTitle">My Strengths</h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 mt-14 gap-10">
          <div>
            <h2 className="subTitle text-white mb-8">Ambition</h2>
            <p className="text-white text-[16px]  lg:text-base lg:font-normal font-light">
              I am driven to continuously grow and succeed, always seeking new
              challenges and opportunities. My ambition fuels my desire to
              deliver high-quality work and exceed client expectations.
            </p>
          </div>
          <div>
            <h2 className="subTitle text-white mb-8">Precision</h2>
            <p className="text-white text-[16px]  lg:text-base lg:font-normal font-light lg:text-balance">
              I pay close attention to detail, ensuring that every aspect of my
              work is accurate and meets the highest standards. This precision
              allows me to solve complex problems efficiently and deliver
              seamless results.
            </p>
          </div>
          <div>
            <h2 className="subTitle text-white mb-8">Assertive</h2>
            <p className="text-white text-[16px]  lg:text-base lg:font-normal font-light lg:text-balance">
              I communicate confidently with clients, setting realistic
              expectations and advocating for the best solutions. My
              assertiveness helps build strong client relationships and ensures
              successful project outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;
