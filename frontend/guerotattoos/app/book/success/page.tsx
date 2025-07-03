export default function BookingSuccessPage() {
  return (
    <main className="bg-[#0e0e0e] text-[#f3f0e7] min-h-screen flex items-center justify-center px-6 py-20">
      <section className="text-center max-w-lg mx-auto bg-[#111] border border-[#2a2a2a] shadow-xl rounded-xl p-10">
        <h1 className="text-4xl font-bold mb-4 tracking-wide">
          Booking Confirmed 🎉
        </h1>
        <p className="text-[#aaa] mb-6">
          Thanks for reserving your session! You’ll receive an email with the details shortly.
        </p>
      </section>
    </main>
  );
}

