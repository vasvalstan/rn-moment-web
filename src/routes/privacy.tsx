import { createFileRoute, Link } from '@tanstack/react-router'
import { Wind, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#DBC188]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8 flex justify-between items-center max-w-4xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-[#DBC188]/30 rounded-sm flex items-center justify-center group-hover:border-[#DBC188]/60 transition-colors">
            <Wind className="w-4 h-4 text-[#DBC188]" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#ECECEC] font-medium">Moment</span>
        </Link>
        <Link 
          to="/"
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] hover:text-[#DBC188] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 relative z-10 px-6 py-12 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#DBC188] pl-3 border-l border-[#DBC188]">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-[#ECECEC] mt-4">
            Privacy Policy
          </h1>
          <p className="text-[#8A8A8A] mt-4">Last updated: December 2024</p>
        </div>

        <div className="space-y-10 text-[#ECECEC]/90 leading-relaxed">
          <section>
            <h2 className="font-heading text-2xl text-[#ECECEC] mb-4">Overview</h2>
            <p className="text-[#8A8A8A]">
              Moment ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our meditation application.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[#ECECEC] mb-4">Information We Collect</h2>
            <div className="space-y-4 text-[#8A8A8A]">
              <p><strong className="text-[#ECECEC]">Account Information:</strong> When you create an account, we collect your email address and authentication data through our secure authentication provider (Clerk).</p>
              <p><strong className="text-[#ECECEC]">Meditation Data:</strong> We store your meditation session history, including duration, timestamps, and any notes you choose to add to your journal entries.</p>
              <p><strong className="text-[#ECECEC]">Device Information:</strong> We may collect device identifiers and sensor data (such as device orientation for face-down detection) solely to provide app functionality.</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[#ECECEC] mb-4">How We Use Your Information</h2>
            <ul className="space-y-2 text-[#8A8A8A] list-none">
              <li className="flex items-start gap-3">
                <span className="text-[#DBC188] mt-1.5">•</span>
                <span>To provide and maintain the meditation service</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DBC188] mt-1.5">•</span>
                <span>To sync your meditation data across devices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DBC188] mt-1.5">•</span>
                <span>To display your personal statistics and progress</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DBC188] mt-1.5">•</span>
                <span>To improve our app and user experience</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[#ECECEC] mb-4">Data Storage & Security</h2>
            <p className="text-[#8A8A8A]">
              Your data is securely stored using Convex, a modern backend platform with built-in encryption. Authentication is handled by Clerk, an industry-leading authentication service. We do not sell, trade, or otherwise transfer your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[#ECECEC] mb-4">Your Rights</h2>
            <p className="text-[#8A8A8A]">
              You have the right to access, update, or delete your personal data at any time. You can export your meditation history or request complete account deletion by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-[#ECECEC] mb-4">Contact</h2>
            <p className="text-[#8A8A8A]">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@moment-app.com" className="text-[#DBC188] hover:underline">
                privacy@moment-app.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-[#262626]">
        <div className="max-w-4xl mx-auto flex justify-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">Moment © 2025</span>
        </div>
      </footer>
    </div>
  )
}
