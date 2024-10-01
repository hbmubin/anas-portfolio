import ContactForm from "./ContactForm";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  return (
    <section id="contact" className=" bg-bodyGray py-20 lg:px-0 px-4">
      <div className="defaultContainer">
        <div className="flex flex-col lg:flex-row ">
          <ContactLeft></ContactLeft>
          <ContactForm></ContactForm>
        </div>
      </div>
    </section>
  );
};

export default Contact;
