import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import stripe, { Stripe } from 'stripe';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  console.log("Received webhook request");
  const sig = req.headers.get('stripe-signature')!;
  const rawBody = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    console.log("Checkout session completed:", event.data.object);
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email;
    const name = session.metadata?.name;

    try {
      console.log("Sending confirmation email to:", email);
      console.log("User's name is:", name);
      await resend.emails.send({
        from: process.env.FROM_EMAIL!,
        to: email!,
        subject: 'Your Tattoo Appointment is Confirmed',
        html: `
          <div style="font-family: sans-serif; padding: 1rem;">
            <h2>Thanks, ${name}!</h2>
            <p>Your tattoo appointment is booked. We’ll reach out soon with any more details you need.</p>
            <p>– Guero Tattoo Studio</p>
          </div>
        `,
      });
    } catch (emailErr: any) {
      console.error("Email send error:", emailErr);
    }
  }

  return NextResponse.json({ received: true });
}
