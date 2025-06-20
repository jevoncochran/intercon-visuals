import React from "react";
import QuickContactForm from "@/components/QuickContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center px-6">
      <div className="flex flex-col items-center md:w-[50%]">
        <h2 className="mb-6">Contact Us</h2>
        <p className="mb-4">
          Send us a message. Tell us about your project and we will get back to
          you in 24 hours or less.
        </p>
        <QuickContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
