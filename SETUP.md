# 🎮 BMCS CHALLENGER SERIES 2025 - Setup Guide

## 📧 Email Configuration Setup

To enable the registration form email functionality, follow these steps:

### 1. Gmail App Password Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Enter a name like "BMCS Registration Form"
   - Copy the generated 16-character password

### 2. Environment Variables

Update your `.env.local` file with your actual credentials:

```bash
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Important**: Never commit your `.env.local` file to version control!

### 3. Test the Registration Form

1. Start your development server: `npm run dev`
2. Click the "Register Now" button
3. Fill out the form with test data
4. Submit and check your email

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid login" error**: Make sure you're using an App Password, not your regular Gmail password
2. **"Less secure app access" error**: Enable 2FA and use App Passwords instead
3. **Form not submitting**: Check browser console for errors and ensure API route is working

### Email Not Receiving?

- Check spam folder
- Verify email address in `.env.local`
- Check server logs for errors
- Ensure Gmail allows "less secure app access" or use App Passwords

## 🚀 Production Deployment

For production deployment:

1. **Use a professional email service** like SendGrid, Mailgun, or AWS SES
2. **Update environment variables** on your hosting platform
3. **Test thoroughly** before going live
4. **Monitor email delivery** and bounce rates

## 📱 Features

- ✅ **Team Information**: Name, leader, roll number, batch
- ✅ **Member Details**: Up to 5 team members with ID numbers and roll numbers
- ✅ **Form Validation**: Required field validation with error messages
- ✅ **Email Notifications**: Automatic email alerts for new registrations
- ✅ **Responsive Design**: Works on all devices
- ✅ **Modern UI**: Premium dark theme with golden accents

## 🎯 Next Steps

1. **Customize email template** in `app/api/register/route.ts`
2. **Add database storage** for registrations
3. **Implement admin panel** to view submissions
4. **Add email confirmations** to registrants
5. **Set up analytics** to track form submissions

---

**Need help?** Check the console logs or contact your development team!
