import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
  // const handleForm = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const name = form.name.value;
  //   const message = form.message.value;
  //   console.log(email, name, message);
  // };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ebc0yi6", "template_8hnesig", form.current, {
        publicKey: "na751eZoc6R7VepZB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="lg:px-[70px] px-10 py-12 lg:py-0 flex-1 flex items-center justify-center bg-white">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-full flex-col gap-[30px]"
      >
        <span className="border-b-[3px] border-b-[#d0c7bd] p-3">
          <input
            name="from_name"
            className="w-full placeholder:text-lg outline-none"
            placeholder="Enter your Name"
            type="text"
            required
          />
        </span>
        <span className="border-b-[3px] border-b-[#d0c7bd] p-3">
          <input
            name="from_email"
            placeholder="Enter a valid email address"
            className="w-full placeholder:text-lg outline-none"
            type="email"
            required
          />
        </span>
        <span className="border-b-[3px] border-b-[#d0c7bd]  p-3">
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full placeholder:text-lg outline-none"
            rows="5"
            required
          ></textarea>
        </span>
        <input
          className="bg-[#8e7f6e] w-full inline-flex text-white uppercase py-4 text-lg tracking-wider font-medium hover:bg-bodyBlack cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
    </div>
  );
};

export default ContactForm;
