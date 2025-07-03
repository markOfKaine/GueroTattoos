// app/api/book/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, date, idea } = body;

  if (!email || !name || !phone || !date) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Tattoo Appointment Deposit",
              description: "Non-refundable deposit for booking",
            },
            unit_amount: 500, // $5 in cents
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/book/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/book/cancel`,
      metadata: { name, phone, date, idea },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: "Stripe error", details: error }, { status: 500 });
  }
}
