'use client';

import { useState } from 'react';

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { name, email, phone, date } = formData;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    // Validate phone number (basic US-style)
    const phoneRegex = /^\(?([0-9]{3})\)?[-.●\s]?([0-9]{3})[-.●\s]?([0-9]{4})$/;
    if (!phoneRegex.test(phone)) {
      setError('Please enter a valid phone number.');
      setLoading(false);
      return;
    }

    // Validate future date
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setError('Please select a valid future date.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Booking submission failed");

      const data = await res.json();
      if (!data.url) throw new Error("Failed to create checkout session");

      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0e0e0e] text-[#f3f0e7] min-h-screen px-6 py-20">
      <section className="max-w-xl mx-auto bg-[#111] border border-[#2a2a2a] shadow-xl rounded-xl p-8 sm:p-10">
        <h1 className="text-4xl font-bold text-center mb-2 tracking-wider">
          Book Your Tattoo
        </h1>
        <p className="text-center text-[#aaa] mb-6">
          Reserve your spot with a $5 deposit
        </p>
        <div className="border-t border-[#333] mb-8" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            onChange={handleChange}
            className="w-full bg-[#0e0e0e] border border-[#d6d3c9] text-[#f3f0e7] placeholder-[#777] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3f0e7] transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
            className="w-full bg-[#0e0e0e] border border-[#d6d3c9] text-[#f3f0e7] placeholder-[#777] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3f0e7] transition"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full bg-[#0e0e0e] border border-[#d6d3c9] text-[#f3f0e7] placeholder-[#777] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3f0e7] transition"
          />
          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
            className="w-full bg-[#0e0e0e] border border-[#d6d3c9] text-[#f3f0e7] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3f0e7] transition"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Describe your tattoo idea..."
            onChange={handleChange}
            className="w-full bg-[#0e0e0e] border border-[#d6d3c9] text-[#f3f0e7] placeholder-[#777] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3f0e7] transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#f3f0e7] text-black border border-[#f3f0e7] px-6 py-3 rounded-full hover:bg-black hover:text-[#f3f0e7] transition duration-300 w-full tracking-wide font-medium"
          >
            {loading ? 'Processing...' : 'Submit & Pay $5 Deposit'}
          </button>
          {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
        </form>
      </section>
    </main>
  );
}
