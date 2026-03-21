import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      title,
      company,
      phone,
      email,
      heardFrom,
      howCanWeHelp,
    } = await req.json();

    const safeFirstName = firstName?.trim() || "";
    const safeLastName = lastName?.trim() || "";
    const safeTitle = title?.trim() || "Not provided";
    const safeCompany = company?.trim() || "Not provided";
    const safePhone = phone?.trim() || "Not provided";
    const safeEmail = email?.trim() || "Not provided";
    const safeHeardFrom = heardFrom?.trim() || "Not provided";
    const safeHowCanWeHelp =
      howCanWeHelp?.trim()?.replace(/\n/g, "<br />") || "Not provided";

    const fullName =
      `${safeFirstName} ${safeLastName}`.trim() || "Not provided";

    await resend.emails.send({
      from: "Intercon Visuals Contact Form <onboarding@resend.dev>",
      to: "jevon.cochran@gmail.com",
      subject: "New Contact Form Submission - Intercon Visuals",
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Title:</strong> ${safeTitle}</p>
        <p><strong>Company / Organization:</strong> ${safeCompany}</p>
        <p><strong>Phone Number:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>How did they hear about us?</strong> ${safeHeardFrom}</p>
        <p><strong>How can we help?</strong><br />${safeHowCanWeHelp}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Resend API error:", err);

    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
