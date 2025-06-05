import { useState } from "react";
import "./styles.css";

export const ContactForm = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (targetName, targetValue) => {
    setFormFields((prev) => ({ ...prev, [targetName]: targetValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formFields.name}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
