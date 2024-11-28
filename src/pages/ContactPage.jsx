import React, { useState } from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Full Name : ${name} \n Email : ${contact} \n Password : ${message}`);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  onChange={(e) => setContact(e.target.value)}
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button class="my-2 px-4 mx-auto btn btn-dark" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
