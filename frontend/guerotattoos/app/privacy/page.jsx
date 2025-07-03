export default function PrivacyPolicy() {
  return (
    <main className="bg-[#0e0e0e] text-[#f3f0e7] min-h-screen px-6 py-20">
      <section className="max-w-3xl mx-auto bg-[#111] border border-[#2a2a2a] shadow-xl rounded-xl p-8 sm:p-10 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-wide mb-2">Privacy Policy</h1>
          <p className="text-[#aaa] text-sm">
            Updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>
        </header>

        <p className="text-[#d6d3c9] leading-relaxed">
          Guero Tattoo Studio respects your privacy. This policy outlines how we collect, use, and protect your personal
          information when you interact with our site or book a session.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-[#f3f0e7] mb-2">What We Collect</h2>
          <p className="text-[#d6d3c9] leading-relaxed">
            When you submit a booking or form, we may collect your name, email, phone number, and the message you provide.
            This helps us communicate and provide the service you’re asking for.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#f3f0e7] mb-2">What We Don’t Do</h2>
          <p className="text-[#d6d3c9] leading-relaxed">
            We never sell your data. We don’t spam. Your information is never shared with third parties unless required
            by law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#f3f0e7] mb-2">Security</h2>
          <p className="text-[#d6d3c9] leading-relaxed">
            All personal data is handled securely and stored with care. We limit data retention to only what’s needed for your appointment and communication.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#f3f0e7] mb-2">Contact</h2>
          <p className="text-[#d6d3c9] leading-relaxed">
            Got questions? Reach out to us at{" "}
            <a
              href="mailto:guero@guerotattoos.ink"
              className="underline hover:text-white"
            >
              guero@guerotattoos.ink
            </a>{" "}
            and we’ll get back to you.
          </p>
        </div>
      </section>
    </main>
  );
}
