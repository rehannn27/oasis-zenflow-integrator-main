import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      location,
      accommodation,
      checkIn,
      checkOut,
      guests,
      specialRequests,
    } = data;

    // ✅ Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // ✅ Email content for owner
    const ownerMailOptions = {
      from: `"Retreat Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL, // your personal email
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Booking Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Accommodation:</strong> ${accommodation}</p>
        <p><strong>Check-In:</strong> ${checkIn}</p>
        <p><strong>Check-Out:</strong> ${checkOut}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Special Requests:</strong> ${specialRequests || "None"}</p>
      `,
    };

    // ✅ Email content for customer confirmation
    const customerMailOptions = {
      from: `"Oasis Calm Holistic Center" <${process.env.EMAIL_USER}>`,
      to: email, // customer's email
      subject: `Booking Confirmation - ${name}`,
      html: `
        <h2>Thank you for your booking request, ${name}!</h2>
        <p>We have received your booking details and will contact you shortly to confirm availability and process payment.</p>

        <h3>Your Booking Details:</h3>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Accommodation:</strong> ${accommodation}</p>
        <p><strong>Check-In:</strong> ${checkIn}</p>
        <p><strong>Check-Out:</strong> ${checkOut}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Special Requests:</strong> ${specialRequests || "None"}</p>

        <p>If you have any questions, please contact us at ${process.env.OWNER_EMAIL} or call us at St. Lucia: 758.451.7375</p>

        <p>Best regards,<br>Oasis Calm Holistic Center Team</p>
      `,
    };

    // ✅ Send emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}