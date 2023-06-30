import Container from "../components/UIelements/Container";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields");
    }

    const params = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send("service_9texmlj", "template_yunr4zh", params, "K6OhDY2Z3GnXyxoVv")
      .then((response) => {
        console.log(response, response.status, response.text);
        alert("Message Sent");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => console.log(err));
  }

  return (
    <React.Fragment>
      <Container>
        <section className=" flex w-full h-96">
          <p>image</p>
        </section>
        <section className=" flex flex-col justify-center items-center w-full h-96">
          <form className=" flex flex-col" onSubmit={sendEmail}>
            <input
              type="text"
              className=""
              placeholder="Your Name or Company Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <hr />
            <input
              type="email"
              className=""
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr />
            <textarea
              type="text"
              className=""
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className="">
              <button type="submit">Contact Me</button>
            </span>
          </form>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Contacts;
