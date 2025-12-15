// app/actions.ts
'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      // IMPORTANT: Until you verify your domain in Resend, use 'onboarding@resend.dev'
      // Once verified, use something like: 'Unveiled Echo <noreply@unveiledecho.com>'
      from: 'Unveiled Echo <noreply@unveiledecho.com>', 
      
      // Where you want to receive the intakes
      to: 'intakes@unveiledecho.com',
      
      // This allows you to hit "Reply" in your inbox and email the client directly
      reply_to: email, 
      
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; font-size: 16px; line-height: 1.5;">
          <h2>New Intake Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <hr/>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Resend Error:', error);
    return { success: false };
  }
}