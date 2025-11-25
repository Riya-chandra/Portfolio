# Email Service API

This folder contains the email service API route for the Next.js application.

## Setup Instructions

### 1. Install Dependencies

The required packages are already installed:

- `nodemailer` - for sending emails
- `@types/nodemailer` - TypeScript type definitions

### 2. Configure Environment Variables

Create a `.env.local` file in the root of your project (already created) and add:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 3. Generate Gmail App Password

To use Gmail with nodemailer, you need to generate an App Password:

1. Go to your Google Account: https://myaccount.google.com
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App passwords**: https://myaccount.google.com/apppasswords
5. Select **Mail** and **Other (Custom name)**
6. Name it "Portfolio Contact Form" or similar
7. Copy the 16-character password
8. Paste it into your `.env.local` file as `EMAIL_PASS`

### 4. Update Recipient Email

In `app/api/send/route.ts`, update the recipient email:

```typescript
to: 'your-email@gmail.com', // Change to your receiving email
```

## API Endpoint

### POST /api/send

Sends an email with the contact form data.

**Request Body:**

```json
{
	"name": "John Doe",
	"email": "john@example.com",
	"message": "Hello, this is a test message"
}
```

**Success Response (200):**

```json
{
	"message": "Email sent successfully"
}
```

**Error Response (400/500):**

```json
{
	"message": "Error message here"
}
```

## Using the Contact Form Component

Import and use the `ContactForm` component in any page:

```tsx
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
	return (
		<div>
			<ContactForm />
		</div>
	);
}
```

## Testing

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Navigate to the page with the contact form

3. Fill out the form and submit

4. Check your email inbox for the message

## Troubleshooting

### Email not sending

- Verify your `EMAIL_USER` and `EMAIL_PASS` are correct in `.env.local`
- Make sure you're using an App Password, not your regular Gmail password
- Check if 2-Step Verification is enabled on your Google account
- Restart your development server after changing `.env.local`

### CORS errors

- The API route is on the same domain as your frontend, so CORS should not be an issue
- If deploying to production, ensure environment variables are set in your hosting platform

## Security Notes

- Never commit `.env.local` to version control (it's in `.gitignore` by default)
- Use environment variables for sensitive data
- Consider adding rate limiting for production use
- Validate and sanitize all user inputs

## Alternative Email Services

If you prefer not to use Gmail, you can use other services:

- **SendGrid** - Popular transactional email service
- **Mailgun** - Email automation service
- **Amazon SES** - AWS Simple Email Service
- **Resend** - Modern email API

Update the transporter configuration in `route.ts` accordingly.
