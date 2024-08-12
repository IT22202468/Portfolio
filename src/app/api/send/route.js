import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  
  if (!fromEmail) {
    return NextResponse.json({ error: "FROM_EMAIL environment variable not set" });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "RESEND_API_KEY environment variable not set" });
  }

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>Test Email</h1>
          <p>This is a test email to verify the email sending service.</p>
        </>
      ),
    });
    console.log(email, subject, message);
    return Response.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: error.message });
  }
}
