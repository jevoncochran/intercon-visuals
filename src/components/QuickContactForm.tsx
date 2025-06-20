"use client";
import { useProject, initialProjectInfo } from "@/context/ProjectContext";
import { useRouter } from "next/navigation";
import FormLayout from "./FormLayout";
import LabeledInput from "./LabeledInput";

const ContactForm = () => {
  const { projectInfo, setProjectInfo } = useProject();
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formAction = (e.nativeEvent as SubmitEvent).submitter?.getAttribute(
      "value"
    );

    if (formAction === "send") {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(projectInfo),
        });

        if (res.ok) {
          alert("Inquiry sent!");
          setProjectInfo(initialProjectInfo);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (err) {
        console.log(err);
        alert("An error occurred. Please try again.");
      }
    }

    if (formAction === "expand") {
      router.push("/project-details");
    }
  };

  return (
    <FormLayout onSubmit={handleSubmit}>
      <LabeledInput
        label="Your Name"
        placeholder="Your Name"
        name="clientName"
        value={projectInfo.clientName}
        onChange={handleChange}
        required
      />
      <LabeledInput
        label="Your Email"
        placeholder="Your Email"
        name="email"
        value={projectInfo.email}
        onChange={handleChange}
        type="email"
        required
      />
      <LabeledInput
        label="Phone Number"
        placeholder="Your Phone Number"
        name="phone"
        value={projectInfo.phone}
        onChange={handleChange}
        type="tel"
        required
      />
      <LabeledInput
        label="Project Description"
        placeholder="How can we help you?"
        name="description"
        value={projectInfo.description}
        onChange={handleChange}
        isTextArea
        required
      />
      <div className="flex space-x-4">
        <button
          type="submit"
          name="action"
          value="send"
          className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-500 transition"
        >
          QUICK SEND
        </button>
        <button
          type="submit"
          name="action"
          value="expand"
          className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-500 transition"
        >
          TELL US MORE
        </button>
      </div>
    </FormLayout>
  );
};

export default ContactForm;
