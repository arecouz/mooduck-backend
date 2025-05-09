import postmark from 'postmark';

// Create Postmark client using your server token (from Postmark dashboard)
const client = new postmark.ServerClient(
  '5fa9a364-0fee-4f6d-b0bf-b81994768426'
);

client
  .sendEmail({
    From: 'reply@mooduck.xyz',
    To: 'admin@mooduck.xyz',
    Subject: 'How are you feeling today?',
    TextBody:
      'Just reply to this email with a few words about your mood today :)',
    MessageStream: 'outbound', // default stream
  })
  .then(() => {
    console.log('Email sent!');
  })
  .catch((err) => {
    console.error('Error sending email:', err);
  });
