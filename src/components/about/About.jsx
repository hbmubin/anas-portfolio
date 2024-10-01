import SkillCard from "./SkillCard";
import mailchimp from "./../../assets/pngwing.com (4).png";
import klaviyo from "./../../assets/idRlQDy2Ux_1727497197405.png";
import shopify from "./../../assets/shopify-seeklogo.svg";
import sms from "./../../assets/Screenshot 2024-09-28 102338-Photoroom.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="bg-bodyGray pt-24 pb-20 lg:px-0 px-4">
      <div className="defaultContainer">
        <article>
          <h2 className="grayTitle">A bit about me</h2>
          <h1 className="title mt-4 mb-5">Who Am I?</h1>
          <p className="text-stone-700">
            Hi, I’m Anas Munir, an innovative and self-motivated full-stack
            freelancer specializing in Email & SMS Marketing (MailChimp,
            Klaviyo, smsBump), Sales Funnels, Automation Flows, and Campaigns. I
            also offer Shopify dropshipping website development, theme
            customization, and product uploads. With experience helping over
            200+ e-commerce businesses succeed, I’m here to optimize your email
            and SMS marketing strategies. Feel free to reach out for insights or
            to review my previous project results
          </p>
        </article>
        <div className="my-20 grid lg:grid-cols-4 grid-cols-1 gap-8">
          <SkillCard img={mailchimp} title="Mailchimp"></SkillCard>
          <SkillCard img={klaviyo} title="klaviyo"></SkillCard>
          <SkillCard img={shopify} title="shopify"></SkillCard>
          <SkillCard img={sms} title="sms bump"></SkillCard>
        </div>
        <article className="bg-bodyBlack px-8 py-[34px]">
          <h1 className="text-white lg:text-[46px] text-3xl tracking-wide leading-tight">
            I am happy to know you that 500+ projects done sucessfully!
          </h1>
          <button className="">
            <Link
              className="px-12  py-4 tracking-wider text-base hover:text-bodyBlack mt-4 hover:bg-white text-white border-2 border-white inline-flex"
              to="works"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Learn More
            </Link>
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
