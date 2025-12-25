import { createFileRoute, Link } from '@tanstack/react-router'
import { Wind, Moon, BarChart3, BookOpen, Timer, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  const features = [
    {
      icon: <Timer className="w-5 h-5" />,
      title: 'Timed Sessions',
      description: 'Customizable meditation timers with gentle ambient sounds',
    },
    {
      icon: <Moon className="w-5 h-5" />,
      title: 'Face-Down Detection',
      description: 'Simply flip your phone to begin. Technology that gets out of the way',
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Mindful Journaling',
      description: 'Capture your thoughts and reflections after each session',
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Progress Tracking',
      description: 'Visualize your meditation journey with beautiful statistics',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Subtle background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DBC188]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9CAF88]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8 flex justify-between items-center max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#DBC188]/30 rounded-sm flex items-center justify-center">
            <Wind className="w-4 h-4 text-[#DBC188]" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#ECECEC] font-medium">Moment</span>
        </div>
        <a 
          href="#download" 
          className="text-[10px] uppercase tracking-[0.2em] text-[#DBC188] hover:text-white transition-colors"
        >
          Get the App
        </a>
      </header>

      {/* Hero */}
      <main className="flex-1 relative z-10">
        <section className="px-6 pt-12 pb-24 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#DBC188] pl-3 border-l border-[#DBC188]">
                  Mindful Living
                </span>
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#ECECEC]">
                Stillness<br />
                <span className="text-[#8A8A8A] italic font-light" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  is the key
                </span><br />
                to clarity.
              </h1>

              <p className="text-[#8A8A8A] text-lg leading-relaxed max-w-md">
                A minimal meditation app designed for deep focus. 
                No subscriptions. No distractions. Just you and the present moment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#DBC188] text-[#121212] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#ECECEC] transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  Download Free
                </a>
                <a 
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#333333] text-[#ECECEC] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#DBC188]/50 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right: App Preview */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative animate-float">
                {/* Phone frame */}
                <div className="w-[280px] h-[580px] bg-[#161616] rounded-[40px] border border-[#333333] p-3 shadow-2xl shadow-black/50">
                  <div className="w-full h-full bg-[#121212] rounded-[32px] overflow-hidden relative">
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-center">
                      <div className="w-24 h-6 bg-[#161616] rounded-full" />
                    </div>
                    
                    {/* App content */}
                    <div className="pt-16 px-5 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex justify-between items-end mb-8">
                        <div>
                          <span className="text-[8px] uppercase tracking-[0.25em] text-[#8A8A8A] block">Thursday</span>
                          <span className="text-[10px] font-medium tracking-widest text-[#ECECEC]">DEC 25</span>
                        </div>
                        <span className="text-[8px] uppercase tracking-[0.2em] text-[#DBC188]">Profile</span>
                      </div>

                      {/* Daily insight */}
                      <div className="mb-6">
                        <span className="text-[8px] uppercase tracking-[0.3em] text-[#DBC188] pl-2 border-l border-[#DBC188]">
                          Daily Insight
                        </span>
                        <h2 className="font-heading text-2xl text-[#ECECEC] mt-3 leading-tight">
                          Breathe in<br />
                          <span className="text-[#8A8A8A] italic">peace,</span><br />
                          breathe out.
                        </h2>
                      </div>

                      {/* Timer card */}
                      <div className="bg-[#161616] border border-[#333333] rounded-sm p-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#DBC188]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                        <div className="flex justify-between items-center relative">
                          <div>
                            <span className="text-[7px] text-[#8A8A8A] tracking-wider block mb-1">SESSION</span>
                            <div className="text-3xl font-light tracking-tighter text-[#ECECEC]">
                              20<span className="text-[#333333] animate-pulse">:</span>00
                            </div>
                          </div>
                          <div className="w-10 h-10 border border-[#DBC188]/30 rounded-sm flex items-center justify-center">
                            <div className="w-0 h-0 border-l-[8px] border-l-[#DBC188] border-y-[5px] border-y-transparent ml-0.5" />
                          </div>
                        </div>
                        <div className="mt-4 w-full h-[2px] bg-[#262626]">
                          <div className="w-1/3 h-full bg-[#DBC188]" />
                        </div>
                      </div>

                      {/* Habits */}
                      <div className="mt-6 space-y-3">
                        <div className="bg-white/5 border border-white/10 rounded-sm p-3 flex items-center justify-between">
                          <div>
                            <span className="text-xs text-[#ECECEC] block">Morning Breathwork</span>
                            <span className="text-[7px] text-[#8A8A8A] tracking-widest">COMPLETED</span>
                          </div>
                          <div className="w-4 h-4 border border-[#9CAF88] bg-[#9CAF88]/20 flex items-center justify-center">
                            <span className="text-[#9CAF88] text-[8px]">✓</span>
                          </div>
                        </div>
                        <div className="bg-[#161616] border border-[#333333] rounded-sm p-3 flex items-center justify-between opacity-60">
                          <div>
                            <span className="text-xs text-[#ECECEC] block">Digital Detox</span>
                            <span className="text-[7px] text-[#8A8A8A] tracking-widest">9:00 PM</span>
                          </div>
                          <div className="w-4 h-4 border border-[#333333]" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#121212]/95 border-t border-[#333333] py-5 px-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[7px] uppercase tracking-[0.2em] text-[#DBC188]">Home</span>
                        <span className="text-[7px] uppercase tracking-[0.2em] text-[#8A8A8A]">Journal</span>
                        <span className="text-[7px] uppercase tracking-[0.2em] text-[#8A8A8A]">Stats</span>
                        <span className="text-[7px] uppercase tracking-[0.2em] text-[#8A8A8A]">Settings</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#333333] rounded-sm animate-pulse-soft" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-[#DBC188]/20 rounded-sm" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="px-6 py-24 border-t border-[#262626]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8A]">Features</span>
              <h2 className="font-heading text-4xl md:text-5xl text-[#ECECEC] mt-4">
                Designed for <span className="italic text-[#8A8A8A]">focus</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-[#161616] border border-[#333333] p-6 hover:border-[#DBC188]/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 border border-[#333333] flex items-center justify-center text-[#DBC188] mb-5 group-hover:border-[#DBC188]/50 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-lg text-[#ECECEC] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section id="download" className="px-6 py-24 border-t border-[#262626]">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9CAF88]">Available Now</span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#ECECEC] mt-4 mb-6">
              Begin your<br />
              <span className="italic text-[#8A8A8A]">journey</span> today
            </h2>
            <p className="text-[#8A8A8A] text-lg mb-10 max-w-md mx-auto">
              Download Moment for free and discover a simpler way to find peace in your daily life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* App Store button */}
              <a 
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-[#121212] hover:bg-[#ECECEC] transition-all group"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[8px] uppercase tracking-wider opacity-70">Download on the</div>
                  <div className="text-sm font-medium -mt-0.5">App Store</div>
                </div>
              </a>

              {/* Play Store button */}
              <a 
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-[#121212] hover:bg-[#ECECEC] transition-all group"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[8px] uppercase tracking-wider opacity-70">Get it on</div>
                  <div className="text-sm font-medium -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Wind className="w-4 h-4 text-[#DBC188]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">Moment © 2025</span>
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-[10px] uppercase tracking-[0.15em] text-[#8A8A8A] hover:text-[#ECECEC] transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[10px] uppercase tracking-[0.15em] text-[#8A8A8A] hover:text-[#ECECEC] transition-colors">Terms</Link>
            <Link to="/contact" className="text-[10px] uppercase tracking-[0.15em] text-[#8A8A8A] hover:text-[#ECECEC] transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
