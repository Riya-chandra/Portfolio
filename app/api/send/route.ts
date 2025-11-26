import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactFormData } from "./types";

export async function POST(request: NextRequest) {
	try {
		const { name, email, message }: ContactFormData = await request.json();

		// Validate input
		if (!name || !email || !message) {
			return NextResponse.json(
				{ success: false, error: "All fields are required" },
				{ status: 400 }
			);
		}

		// Basic email validation
		const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		if (!emailValid) {
			return NextResponse.json(
				{ success: false, error: "Invalid email address" },
				{ status: 400 }
			);
		}

		// Check if email credentials are configured
		if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
			console.error("Email credentials not configured");
			// Still return success to user but log the issue
			console.log("Contact Form Submission:", { name, email, message });
			return NextResponse.json(
				{ success: true, message: "Message received successfully" },
				{ status: 200 }
			);
		}

		// Create transporter
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		// (optional) verify transporter connection while debugging - remove in production if you want
		try {
			await transporter.verify();
			console.log("SMTP connection verified");
		} catch (vErr) {
			console.warn("SMTP verify failed:", vErr);
		}

		// Email options
		const mailOptions = {
			from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_TO || process.env.EMAIL_USER, // <-- use EMAIL_TO or fallback to EMAIL_USER
			replyTo: email,
			subject: `Portfolio Contact: Message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
					<div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
						<h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
					</div>
					<div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
						<div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0;">
							<p style="color: #666; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</p>
							<p style="color: #333; margin: 0; font-size: 18px; font-weight: bold;">${name}</p>
						</div>
						<div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0;">
							<p style="color: #666; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
							<p style="color: #3b82f6; margin: 0; font-size: 16px;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
						</div>
						<div style="margin-bottom: 20px;">
							<p style="color: #666; margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
							<div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
								<p style="color: #333; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
							</div>
						</div>
						<div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #f0f0f0; text-align: center;">
							<p style="color: #999; font-size: 12px; margin: 0;">Sent from your portfolio contact form</p>
							<p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">${new Date().toLocaleString()}</p>
						</div>
					</div>
				</div>
			`,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ success: true, message: "Message sent successfully" },
			{ status: 200 }
		);
	} catch (error: any) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ success: false, error: "Failed to send message. Please try again." },
			{ status: 500 }
		);
	}
}
