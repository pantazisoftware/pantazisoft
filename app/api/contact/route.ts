import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message, service, token } = await req.json();

    if (!name || !email || !message || !token) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 400 }
      );
    }

    // `service` is optional — set when the inquiry comes from a service page
    const serviceLabel =
      typeof service === "string" && service.trim() ? service.trim() : null;

    // Send email via Resend
    await resend.emails.send({
      from: "PantaziSoft <noreply@pantazisoft.com>",
      to: process.env.CONTACT_EMAIL!,
      subject: serviceLabel
        ? `New ${serviceLabel} inquiry from ${name}`
        : `New inquiry from ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        serviceLabel ? `Service: ${serviceLabel}` : null,
        "",
        "Message:",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
