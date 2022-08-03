import React from "react";
import emailjs from "emailjs-com";
import Button from "@mui/material/Button";
import SendIcon from "@material-ui/icons/Send";
import "../styles/ContactUs.css";

function ContactUs() {
  const SERVICE_ID = `${process.env.REACT_APP_SERVICE_ID}`;
  const TEMPLATE_ID = `${process.env.REACT_APP_TEMPLATE_ID}`;
  const USER_ID = `${process.env.REACT_APP_USER_ID}`;

  function handleSubmit(event) {
    event.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
      .then((result) => 
        alert("Message Sent Successfully")
      )
      .catch((error) => console.log())
    event.target.reset();
  }

  return (
    <div className="Contact">
      <form onSubmit={handleSubmit}>
        <div className="name-contact">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Name"
            required
          />
        </div>
        <div className="name-contact">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="from_email"
            placeholder="Email"
            required
          />
        </div>
        <div className="name-contact">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
          />
        </div>
        <div className="align">
          <Button
            className="button-send"
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            style={{
                borderRadius: "0px",
                background: "black"
            }}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
