"use client";
import Navbar from "../../components/Navbar";
import React, { useState } from "react";

const referralOptions = [
  "Word of Mouth/Referral",
  "Google Search",
  "Instagram",
  "Facebook",
  "TikTok",
  "YouTube",
  "Other",
];

export default function ContactPage() {
  const [heardFrom, setHeardFrom] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    phone: "",
    email: "",
    howCanWeHelp: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ type: "", message: "" });

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.howCanWeHelp.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message:
          "Please fill out your first name, last name, email, and message.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          title: formData.title,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          heardFrom,
          howCanWeHelp: formData.howCanWeHelp,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitStatus({
        type: "success",
        message:
          "Thanks for reaching out. We’ll get back to you within 24 hours.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        title: "",
        company: "",
        phone: "",
        email: "",
        howCanWeHelp: "",
      });
      setHeardFrom("");
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/contact/ai_generated_tampa_skyline.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <div className="relative z-20 min-h-screen px-6 md:px-10 lg:px-16 pt-40 md:pt-[208px] pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_640px] gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE CTA */}
          <div className="text-white max-w-xl pt-2">
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
              Serious About Growing Your Brand?
              <span className="text-lime-400"> Start Here.</span>
            </h1>

            <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed max-w-lg">
              Send us a message and let us know how we can help. We&apos;ll get
              back to you within 24 hours.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-3xl border border-white/10 bg-black/45 backdrop-blur-md shadow-2xl p-6 md:p-10 text-white">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* First / Last */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Title / Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Title"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                />
                <Input
                  label="Company / Organization"
                  name="company"
                  placeholder="Company / Organization"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              {/* Phone / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Phone Number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* How did you hear about us */}
              <div>
                <label className="block font-[family-name:var(--font-montserrat)] text-lime-400 text-lg font-semibold mb-4">
                  How did you hear about us?
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                  {referralOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer text-white/95"
                    >
                      <span className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          name="heardFrom"
                          value={option}
                          checked={heardFrom === option}
                          onChange={(e) => setHeardFrom(e.target.value)}
                          className="peer sr-only"
                        />
                        <span className="h-6 w-6 rounded-full border border-white/40 bg-transparent transition-colors peer-checked:border-lime-400 peer-checked:bg-lime-400/10" />
                        <span className="absolute h-3 w-3 rounded-full bg-lime-400 opacity-0 peer-checked:opacity-100" />
                      </span>
                      <span className="text-base md:text-lg">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* How can we help */}
              <div>
                <label
                  htmlFor="howCanWeHelp"
                  className="block font-[family-name:var(--font-montserrat)] text-lime-400 text-lg font-semibold mb-3"
                >
                  How can we help?
                </label>
                <textarea
                  id="howCanWeHelp"
                  name="howCanWeHelp"
                  rows={6}
                  value={formData.howCanWeHelp}
                  onChange={handleChange}
                  placeholder="Tell us a little about your business and the services you need..."
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white placeholder:text-white/50 outline-none transition focus:border-lime-400 focus:bg-white/8"
                />
              </div>

              {/* Status message */}
              {submitStatus.message && (
                <div
                  className={`rounded-2xl px-4 py-3 text-sm md:text-base ${
                    submitStatus.type === "success"
                      ? "bg-lime-400/15 text-lime-300 border border-lime-400/30"
                      : "bg-red-500/15 text-red-200 border border-red-400/30"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-lime-400 px-8 py-4 font-[family-name:var(--font-montserrat)] text-sm md:text-base font-bold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(163,230,53,0.35)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  type?: string;
};

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label className="block font-[family-name:var(--font-montserrat)] text-lime-400 text-lg font-semibold mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white placeholder:text-white/50 outline-none transition focus:border-lime-400 focus:bg-white/8"
      />
    </div>
  );
}
