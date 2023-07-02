import Container from "../components/UIelements/Container";
import Frame from "../../src/assets/vector/Frame";
import { SecondaryButton } from "../../src/components/UIelements/Buttons";
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
        <section className="w-full">
          <form
            className="flex flex-col justify-evenly h-full xl:pl-12 lg:pl-12 md:pl-12 sm:p-12 min-[315px]:p-6"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="bg-transparent text-lg text-left outline-none my-3"
              placeholder="Personal Name or Company Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />ya
            <hr className="h-1 bg-[#191e29]" />
            <input
              type="email"
              className="bg-transparent text-lg text-left outline-none my-3"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr className="h-1 bg-[#191e29]" />
            <label className="text-lg text-gray-400 my-3">Message for me</label>
            <textarea
              type="text"
              className="shadow-inner text-lg text-left outline-none h-40 "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className="mt-5 xl:text-left lg:text-left md:text-left sm:text-center min-[315px]:text-center">
              <SecondaryButton type="submit">Contact Me</SecondaryButton>
            </span>
          </form>
        </section>
        <section className="w-full flex justify-center p-3 ">
          <Frame />
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Contacts;
