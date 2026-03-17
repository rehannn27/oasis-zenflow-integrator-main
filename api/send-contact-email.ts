import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure nodemailer with Gmail (reuse booking email config)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });


    const ownerEmail = process.env.OWNER_EMAIL;
    if (!ownerEmail) {
      return NextResponse.json({ error: "OWNER_EMAIL not configured" }, { status: 500 });
    }

    // Email to owner
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: ownerEmail,
      subject: `New Contact Form: ${subject}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #2d5a47; border-bottom: 2px solid #2d5a47; padding-bottom: 10px;">New Contact Form Submission</h2>
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <div style="background: white; padding: 15px; border-left: 4px solid #2d5a47; border-radius: 4px; margin-top: 10px;">
      ${message.replace(/\n/g, '<br>')}
    </div>
  </div>
  
  <p style="color: #666; font-size: 14px;">
    Reply to: ${email} | Sent from Oasis Zenflow website contact form.
  </p>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Contact email sent" });
  } catch (error) {
    console.error("Contact email failed:", error);
    return NextResponse.json({ error: "Failed to send contact email" }, { status: 500 });
  }
}

