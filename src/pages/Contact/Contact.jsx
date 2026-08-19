import ContactForm from "../../pages/Contact/ContactForm/ContactForm";
import "./contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-container">
        <div className="contact-header">
          <h1>CONTACT US</h1>

          <p>
            Have a question, a complaint, or want to join our team?
            <br />
            We are here to help.
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}

export default Contact;
