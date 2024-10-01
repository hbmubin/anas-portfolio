const ContactForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const message = form.message.value;
    console.log(email, name, message);
  };
  return (
    <div className="lg:px-[70px] px-10 py-12 lg:py-0 flex-1 flex items-center justify-center bg-white">
      <form onSubmit={handleForm} className="flex w-full flex-col gap-[30px]">
        <span className="border-b-[3px] border-b-[#d0c7bd] p-3">
          <input
            name="name"
            className="w-full placeholder:text-lg outline-none"
            placeholder="Enter your Name"
            type="text"
            required
          />
        </span>
        <span className="border-b-[3px] border-b-[#d0c7bd] p-3">
          <input
            name="email"
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
    </div>
  );
};

export default ContactForm;
