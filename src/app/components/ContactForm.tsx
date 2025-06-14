import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setInquiry({ ...inquiry, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
      });

      if (res.ok) {
        alert("Inquiry sent!");
        setInquiry({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    console.log(inquiry);
  }, [inquiry]);
  return (
    <form className="w-full space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={inquiry.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></input>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={inquiry.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></input>
      <input
        className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        value={inquiry.phone}
        onChange={handleChange}
      />
      <textarea
        className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="message"
        placeholder="Your Message"
        value={inquiry.message}
        onChange={handleChange}
        rows={10}
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-500 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
