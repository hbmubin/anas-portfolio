const ContactLeft = () => {
  return (
    <div className="lg:w-[45%] bg-bodyBlack px-[34px] pt-16 pb-24 text-white">
      <h1 className="lg:text-5xl text-4xl leading-tight lg:mb-14 mb-10">
        Do you have any Project? Let’s Talk
      </h1>
      <div className="lg:mb-16 mb-10">
        <h3 className="text-xl mb-3">Message For</h3>
        <h2 className="lg:text-[26px] text-2xl">Email Marketing</h2>
      </div>
      <div className="lg:mb-16 mb-10">
        <h3 className="text-xl mb-3">Phone</h3>
        <span className="text-textGray hover:text-white lg:text-[26px] text-2xl">
          +8801778338986
        </span>
      </div>
      <div>
        <h3 className="text-xl mb-3">Drop your Message</h3>
        <span className="text-textGray hover:text-white text-xl group relative inline-flex leading-tight">
          anasbinhossain07@gmail.com
          <span className="bg-textGray w-full h-[1px]  -bottom-1 left-0 absolute group-hover:bg-white"></span>
        </span>
      </div>
    </div>
  );
};

export default ContactLeft;
