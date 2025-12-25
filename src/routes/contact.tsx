import { createFileRoute, Link } from '@tanstack/react-router'
import { Wind, ArrowLeft, Mail, MessageCircle, Github } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#DBC188]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#9CAF88]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
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
        <div className="mb-12 text-center">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#DBC188] pl-3 border-l border-[#DBC188]">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-[#ECECEC] mt-4">
            Contact Us
          </h1>
          <p className="text-[#8A8A8A] mt-4 max-w-md mx-auto">
            Have questions, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Email */}
          <a 
            href="mailto:hello@moment-app.com"
            className="group bg-[#161616] border border-[#333333] p-8 text-center hover:border-[#DBC188]/30 transition-all duration-300"
          >
            <div className="w-12 h-12 border border-[#333333] flex items-center justify-center mx-auto mb-5 group-hover:border-[#DBC188]/50 transition-colors">
              <Mail className="w-5 h-5 text-[#DBC188]" />
            </div>
            <h3 className="font-heading text-lg text-[#ECECEC] mb-2">Email</h3>
            <p className="text-sm text-[#8A8A8A]">hello@moment-app.com</p>
          </a>

          {/* Support */}
          <a 
            href="mailto:support@moment-app.com"
            className="group bg-[#161616] border border-[#333333] p-8 text-center hover:border-[#DBC188]/30 transition-all duration-300"
          >
            <div className="w-12 h-12 border border-[#333333] flex items-center justify-center mx-auto mb-5 group-hover:border-[#DBC188]/50 transition-colors">
              <MessageCircle className="w-5 h-5 text-[#DBC188]" />
            </div>
            <h3 className="font-heading text-lg text-[#ECECEC] mb-2">Support</h3>
            <p className="text-sm text-[#8A8A8A]">support@moment-app.com</p>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#161616] border border-[#333333] p-8 text-center hover:border-[#DBC188]/30 transition-all duration-300"
          >
            <div className="w-12 h-12 border border-[#333333] flex items-center justify-center mx-auto mb-5 group-hover:border-[#DBC188]/50 transition-colors">
              <Github className="w-5 h-5 text-[#DBC188]" />
            </div>
            <h3 className="font-heading text-lg text-[#ECECEC] mb-2">GitHub</h3>
            <p className="text-sm text-[#8A8A8A]">View our projects</p>
          </a>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-[#161616] border border-[#333333] p-8 max-w-xl mx-auto">
            <h2 className="font-heading text-2xl text-[#ECECEC] mb-4">
              Response Time
            </h2>
            <p className="text-[#8A8A8A] leading-relaxed">
              We aim to respond to all inquiries within <span className="text-[#DBC188]">24-48 hours</span>. 
              For urgent support issues, please include "URGENT" in your email subject line.
            </p>
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="mt-12 text-center">
          <p className="text-[#8A8A8A] text-sm">
            Looking for quick answers?{' '}
            <span className="text-[#DBC188]">FAQ coming soon</span>
          </p>
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

