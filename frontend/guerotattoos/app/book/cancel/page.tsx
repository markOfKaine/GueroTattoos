export default function BookingCancelPage() {
  return (
    <main className="bg-[#0e0e0e] text-[#f3f0e7] min-h-screen flex items-center justify-center px-6 py-20">
      <section className="text-center max-w-lg mx-auto bg-[#111] border border-[#2a2a2a] shadow-xl rounded-xl p-10">
        <h1 className="text-4xl font-bold mb-4 tracking-wide">
          Booking Cancelled ❌
        </h1>
        <p className="text-[#aaa] mb-6">
          Your appointment reservation was not completed. You can try again anytime.
        </p>
        <a
          href="/book"
          className="inline-block mt-4 px-6 py-3 bg-[#f3f0e7] text-black rounded-full border border-[#f3f0e7] hover:bg-black hover:text-[#f3f0e7] transition duration-300"
        >
          Try Again
        </a>
      </section>
    </main>
  );
}
