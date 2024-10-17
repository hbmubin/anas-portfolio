import emailjs from "@emailjs/browser";
import { Spinner } from "@material-tailwind/react";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();

  const [checkSubmit, setCheckSubmit] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setCheckSubmit(true);
    emailjs
      .sendForm("service_ebc0yi6", "template_8hnesig", form.current, {
        publicKey: "na751eZoc6R7VepZB",
      })
      .then(
        () => {
          setCheckSubmit(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email sent",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          setCheckSubmit(false);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Error",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <div className="sm:px-[70px] px-7 py-12 lg:py-0 flex-1 flex items-center justify-center bg-white">
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
        <button
          className="bg-[#8e7f6e] w-full text-white uppercase py-4 text-lg tracking-wider font-medium hover:bg-bodyBlack cursor-pointer flex items-center justify-center"
          type="submit"
        >
          {checkSubmit == true ? <Spinner></Spinner> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
