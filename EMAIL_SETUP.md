# Email Setup Guide

## Overview

Your portfolio contact form is configured to send emails using Gmail's SMTP service through Nodemailer.

## Current Configuration

### Environment Variables

The following variables are configured in `.env.local`:

- `EMAIL_USER`: Gmail account (nikhiljsx@gmail.com)
- `EMAIL_PASS`: Gmail App Password (already configured)

### Features

✅ Contact form with validation
✅ Real-time form state (idle, sending, success, error)
✅ Button changes to green on success
✅ "Engaging & Connecting..." text during send
✅ Form clears automatically after successful submission
✅ Beautiful HTML email template with gradient design
✅ Reply-to field set to sender's email

## How It Works

1. **User fills form** → Name, Email, Message
2. **Frontend validates** → Checks for required fields
3. **API endpoint processes** → `/api/send` receives data
4. **Email validation** → Checks email format
5. **Nodemailer sends** → Formatted email to nikhilprince973@gmail.com
6. **Success feedback** → Green button, "Message Sent Successfully!"

## Gmail App Password Setup

If you need to regenerate or create a new app password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication (required)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Create new app password for "Mail"
5. Copy the 16-character password
6. Update `EMAIL_PASS` in `.env.local`

## Testing the Contact Form

### Local Testing

```bash
npm run dev
```

Navigate to the footer section and fill out the form:

- **Name**: Your name
- **Email**: Your email (valid format)
- **Message**: Your message

### Expected Behavior

1. Click "Send Message"
2. Button shows "Engaging & Connecting..." with animated icon
3. On success: Button turns green, shows "Message Sent Successfully!"
4. Form clears automatically
5. You receive email at nikhilprince973@gmail.com

## Email Template

The sent email includes:

- Professional gradient header
- Sender's name and email
- Reply-to functionality (click email to reply)
- Formatted message with proper spacing
- Timestamp
- Responsive HTML design

## Troubleshooting

### Issue: Email not sending

**Check 1**: Verify environment variables

```bash
# Should show your credentials
cat .env.local
```

**Check 2**: Check Gmail settings

- 2FA must be enabled
- App password must be valid
- Less secure app access (if using regular password)

**Check 3**: Check console logs

- Open browser DevTools
- Look for errors in Console tab
- Check Network tab for API response

### Issue: "Failed to send message"

**Possible causes**:

- Invalid Gmail credentials
- Gmail blocked the login attempt
- Network connectivity issues
- Rate limiting (too many emails)

**Solution**:

1. Check [Gmail security alerts](https://myaccount.google.com/notifications)
2. Regenerate app password
3. Update `.env.local`
4. Restart development server

### Issue: Form not clearing after success

This is already handled in the code. The form clears after 3.5 seconds of showing success state.

## Security Best Practices

✅ **Implemented**:

- Environment variables for credentials
- Input validation (email format, required fields)
- Error handling with try-catch
- No sensitive data in client-side code

⚠️ **Important**:

- Never commit `.env.local` to Git
- `.env.local` is in `.gitignore`
- Regenerate app passwords if exposed
- Use rate limiting in production (consider Vercel's Edge Config)

## Production Deployment

### Vercel Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard:
    - Go to Project Settings → Environment Variables
    - Add `EMAIL_USER`
    - Add `EMAIL_PASS`
4. Redeploy

### Alternative Services

If you want to use a different email service:

**SendGrid**:

```typescript
// Use @sendgrid/mail
// Requires API key instead of SMTP
```

**AWS SES**:

```typescript
// Use nodemailer with AWS SES
// More reliable for high volume
```

**Resend**:

```typescript
// Modern email API
// Easy integration with Next.js
```

## API Endpoint Details

**Endpoint**: `POST /api/send`

**Request Body**:

```json
{
	"name": "John Doe",
	"email": "john@example.com",
	"message": "Hello, I'd like to discuss a project..."
}
```

**Success Response** (200):

```json
{
	"success": true,
	"message": "Message sent successfully"
}
```

**Error Response** (400/500):

```json
{
	"success": false,
	"error": "Error message here"
}
```

## Monitoring

### Logs to Check

- Browser Console: Frontend errors
- Server Console: `npm run dev` output
- Gmail Sent folder: Verify emails are sending

### Metrics to Track

- Form submission rate
- Success vs error rate
- Email delivery time
- Bounce rate (check Gmail)

## Support

If you encounter issues:

1. Check this documentation
2. Review console logs
3. Test with a simple message first
4. Verify Gmail account settings
5. Check Vercel deployment logs (production)

---

**Last Updated**: November 2025
**Author**: Nikhil Soni
**Contact**: nikhilprince973@gmail.com
