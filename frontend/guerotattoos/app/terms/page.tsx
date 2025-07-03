export default function TermsPage() {
  return (
    <main className="bg-[#0e0e0e] text-[#f3f0e7] min-h-screen px-6 py-20">
      <section className="max-w-3xl mx-auto bg-[#111] border border-[#2a2a2a] shadow-xl rounded-xl p-8 sm:p-10 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-wide mb-2">Terms of Service</h1>
          <p className="text-[#aaa] text-sm">
            By using Guero Tattoo Studio's website or services, you agree to the following terms.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-[#d6d3c9]">
          <div>
            <h2 className="text-xl font-semibold text-[#f3f0e7] mb-2">1. Booking & Deposits</h2>
            <p>
              Appointments must be booked online. Deposits may be required to secure a time slot and are non-refundable unless canceled at least 48 hours in advance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f3f0e7] mb-2">2. Age Requirements</h2>
            <p>
              Clients must be 18+ years old to receive a tattoo. A valid government-issued ID is required at the appointment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f3f0e7] mb-2">3. Health & Safety</h2>
            <p>
              We maintain high standards of hygiene and sterilization. Inform us of any allergies, skin sensitivities, or health concerns prior to your session.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f3f0e7] mb-2">4. Refunds</h2>
            <p>
              All sales are final. Deposits are non-refundable unless the appointment is canceled with 48 hours’ notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f3f0e7] mb-2">5. Artwork & Copyright</h2>
            <p>
              All artwork is original and protected. Reproduction without permission is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f3f0e7] mb-2">6. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of our site or services implies acceptance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#f3f0e7] mb-2">7. Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:guero@guerrotattoos.ink" className="underline hover:text-white">
                guero@guerrotattoos.ink
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
