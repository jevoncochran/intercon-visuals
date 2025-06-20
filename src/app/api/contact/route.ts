import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const {
      clientName,
      email,
      phone,
      description,
      businessName,
      website,
      instagram,
      projectType,
      otherProjectType,
      date,
      location,
      targetAudience,
      platforms,
      otherPlatform,
      references,
      budget,
      heardAboutUsBy,
      heardAboutUsByOther,
    } = await req.json();

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "jevon.cochran@gmail.com",
      subject: "New Inquiry for Intercon Visuals",
      html: `
        <h3>New Inquiry</h3>
        <p><strong>Name:</strong> ${clientName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Description:</strong><br/>${description.replace(/\n/g, "<br/>")}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Instagram Handle:</strong> ${instagram}</p>
        <p><strong>Project Types:</strong> ${projectType}</p>
        <p><strong>Other Project Type:</strong> ${otherProjectType}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Target audience:</strong> ${targetAudience}</p>
        <p><strong>To Be Shared on the following platforms:</strong> ${platforms}</p>
        <p><strong>Other Platform:</strong> ${otherPlatform}</p>
        <p><strong>Reference Videos:</strong> ${references}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>How did they hear about us?:</strong> ${heardAboutUsBy}</p>
        <p><strong>Other Way they heard about us:</strong> ${heardAboutUsByOther}</p>

        `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
