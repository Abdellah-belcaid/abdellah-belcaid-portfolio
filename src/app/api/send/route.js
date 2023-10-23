import EmailTemplate from "@/components/EmailTemplate ";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL;

export async function POST(req) {
  const body = await req.json();

  const { name, email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: "Contact from <onboardin@resend.dev>",
      to: ["belcaid.abdellah2001@gmail.com", email],
      subject: subject,
      react: <EmailTemplate name={name} subject={subject} message={message} />,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Server-side error:", error);
    return NextResponse.json({ error });
  }
}
