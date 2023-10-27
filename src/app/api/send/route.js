import EmailTemplate from "@/components/EmailTemplate ";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const { name, email, subject, message } = body;

  try {
    const emailContent = (
      <EmailTemplate name={name} subject={subject} message={message} />
    );

    const data = await resend.emails.send({
      from: "Contact from <onboardin@resend.dev>",
      to: ["belcaid.abdellah2001@gmail.com", email],
      subject: `Re: ${subject}`,
      react: emailContent,
    });

    console.log("Email sent successfully:", data);

    return NextResponse.json(data);
  } catch (error) {
    const headers = {
      "X-Error-Message": `Error sending the email: ${error.message}`,
      "X-Error-Code": "500",
    };

    return new NextResponse(`Error sending the email: ${error.message}`, {
      status: 500,
      headers,
    });
  }
}
