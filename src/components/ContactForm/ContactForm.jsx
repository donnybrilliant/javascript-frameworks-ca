import { useState } from "react";
import Button from "../Button";
import BackLink from "../BackLink";
import { StyledForm } from "./ContactForm.styled";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(formData);
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      {isSubmitted ? (
        <div>
          <p>Thank you for your submission! We'll get back to you soon.</p>
          <div>
            <BackLink>Go Home</BackLink>
          </div>
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>
          <div>
            <label htmlFor="body">Message</label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
              minLength="3"
              rows="10"
            />
          </div>
          <Button type="submit" $proceed>
            Submit
          </Button>
        </>
      )}
    </StyledForm>
  );
};

export default ContactForm;