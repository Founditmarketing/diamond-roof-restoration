import dotenv from 'dotenv';
import path from 'path';

// Load .env.local first (Vite convention), then fall back to .env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
import express, { Request, Response } from 'express';
import { Resend } from 'resend';

const app = express();
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const PORT = process.env.API_PORT || 3001;

// ─── POST /api/contact ────────────────────────────────────────────────────────
app.post('/api/contact', async (req: Request, res: Response) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Basic server-side validation
  if (!firstName || !lastName || !email || !message) {
    res.status(400).json({ error: 'Missing required fields.' });
    return;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Diamond Roof Restoration <hello@diamondroofs.net>',
      to: ['jason@founditmarketing.com'],
      replyTo: email,
      subject: `New Contact Form Submission — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
          <div style="background: linear-gradient(135deg, #0a0f2e 0%, #1a2a4a 100%); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #4091b1; font-size: 24px; margin: 0;">New Contact Form Submission</h1>
            <p style="color: #a0aec0; margin: 8px 0 0;">Diamond Roof Restoration</p>
          </div>

          <div style="background: #f7fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 35%; color: #4a5568;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #2d3748;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #2d3748;">
                  <a href="mailto:${email}" style="color: #4091b1;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #2d3748;">${phone}</td>
              </tr>` : ''}
              <tr>
                <td colspan="2" style="padding: 16px 0 4px; font-weight: bold; color: #4a5568;">Message</td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 12px 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; color: #2d3748; line-height: 1.6; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>

            <p style="margin: 24px 0 0; font-size: 12px; color: #a0aec0; text-align: center;">
              Reply directly to this email to respond to ${firstName}. This message was sent via the contact form at diamondroofs.net.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('[Resend error]', error);
      res.status(500).json({ error: 'Failed to send email. Please try again.' });
      return;
    }

    console.log('[Resend] Email sent, id:', data?.id);
    res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('[Server error]', err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API server running on http://localhost:${PORT}`);
});
