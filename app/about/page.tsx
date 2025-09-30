"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { ArrowRight, Globe, Heart, Menu, Shield, Sparkles, Target, Users, Zap } from 'lucide-react';

const RythmiqAboutPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Student-First Always",
      description: "Every decision we make starts with one question: Does this help students? Customer service isn't just our priority—it's in our DNA as Indians."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Through AI",
      description: "We're taking a leap of faith with artificial intelligence to create an unparalleled experience at the least cost possible, with a very lean team."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Accessibility for All",
      description: "No student should be left behind due to technical barriers. We're building tools that anyone can use, anywhere, anytime."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Transparency",
      description: "Your documents, your data, your future—we treat them with the respect and security they deserve."
    }
  ];

  const journey = [
    {
      year: "September 2025",
      title: "Rythmiq is Born",
      description: "Founded with a mission to end the cyber cafe queues and bring form-filling power to every student's fingertips."
    },
    {
      year: "Present",
      title: "Building DocKit",
      description: "Launching our first product—an AI-powered document validation tool that ensures your applications are perfect, every time."
    },
    {
      year: "2030 Vision",
      title: "The Go-To Platform",
      description: "Becoming India's trusted platform for form automation, document encryption, storage, and validation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                <div className="text-2xl font-bold">R</div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                Rythmiq
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-white font-medium">About</Link>
              <Link href="/dockit" className="text-gray-300 hover:text-white transition-colors">DocKit</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <a 
                href="https://forms.google.com/your-form-url"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium"
              >
                Join Our Team
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="block text-white font-medium">About</Link>
              <Link href="/dockit" className="block text-gray-300 hover:text-white transition-colors">DocKit</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
              <a 
                href="https://forms.google.com/your-form-url"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium text-center"
              >
                Join Our Team
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm text-purple-200">Our Story</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Built by a Student,{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              For Students
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Every great solution starts with a problem you've lived through. This is mine.
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Why I Started Rythmiq</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I remember standing in line outside a cyber cafe, clutching a folder of documents, watching the clock tick away. Not once, not twice, but multiple times throughout my student life. Each exam application, each form submission—the same anxiety, the same helplessness.
              </p>
              
              <p>
                The worst part? It wasn't just about me. I watched my family members struggle with the same nightmare. Documents that needed to be "exactly 3.5cm × 4.5cm at 200 DPI." File sizes that had to be "between 100KB and 200KB." PDF versions that were "case-sensitive" in ways that made no sense.
              </p>
              
              <p className="text-xl font-semibold text-purple-300">
                One wrong pixel, one extra kilobyte—and your application gets rejected.
              </p>
              
              <p>
                I started Rythmiq because I understand this pain intimately. Not from research reports or user surveys, but from lived experience. From helping my parents navigate confusing portals. From seeing friends miss deadlines because cyber cafes were closed. From knowing that somewhere right now, a talented student is more worried about file formats than their actual preparation.
              </p>
              
              <p>
                There is no leniency when it comes to document requirements. These forms are unforgiving, technical, and designed for a world where everyone has access to expensive software and technical expertise.
              </p>
              
              <p className="text-xl font-semibold text-white">
                But what if technology could level the playing field? What if AI could handle the technical complexity, so students could focus on what actually matters—their dreams?
              </p>
              
              <p>
                That's why Rythmiq exists. Not to build another app, but to end an era where students queue up outside cyber cafes just to fill a form. To create a future where every student—regardless of their technical background or location—can confidently handle their own applications.
              </p>
              
              <p className="text-gray-400 italic border-l-4 border-purple-500 pl-6 mt-8">
                "No one should have to choose between their preparation time and navigating document requirements. Technology should empower, not exclude."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              To create unparalleled access and convenience for students filling exam forms, application forms, 
              and any other forms they might encounter in their lifetime—so that no one has to queue up outside 
              cyber cafes when wanting to fill a form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
              <Target className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Today's Goal</h3>
              <p className="text-gray-300 leading-relaxed">
                Launch DocKit and empower the first wave of students to take control of their document submissions. 
                Prove that form-filling doesn't need to be a technical nightmare.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
              <Globe className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">2030 Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                Become the go-to platform for form automation, document encryption, storage, and validation. 
                Make Rythmiq synonymous with hassle-free form filling across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What Drives Us</h2>
            <p className="text-xl text-gray-400">The principles that guide every decision we make</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-400">From idea to impact</p>
          </div>

          <div className="space-y-8">
            {journey.map((milestone, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center font-bold shadow-lg shadow-purple-500/50">
                    {index === 0 && '🚀'}
                    {index === 1 && '⚡'}
                    {index === 2 && '🎯'}
                  </div>
                </div>
                <div className="flex-1 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                  <div className="text-sm text-purple-400 font-semibold mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join The Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-purple-400/10 border border-purple-500/30 backdrop-blur-sm text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're building something that matters. If you're passionate about using technology to solve real problems 
              and want to make a difference in millions of students' lives, we want to hear from you.
            </p>
            
            <div className="mb-8">
              <p className="text-gray-400 mb-4">We're looking for passionate individuals across all roles:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-sm">Engineers</span>
                <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-sm">Designers</span>
                <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-sm">Product</span>
                <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-sm">Marketing</span>
                <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-sm">Operations</span>
              </div>
            </div>

            <a 
              href="https://forms.google.com/your-form-url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium text-lg shadow-lg shadow-purple-500/30"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="text-sm text-gray-400 mt-6">
              Building with a lean team, powered by AI, driven by impact.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                  <div className="text-2xl font-bold">R</div>
                </div>
                <span className="text-xl font-bold">Rythmiq</span>
              </div>
              <p className="text-gray-400 text-sm">Empowering students to fill forms independently</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/dockit" className="hover:text-white transition-colors">DocKit</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><a href="https://forms.google.com/your-form-url" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Careers</a></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-purple-500/20 text-center text-gray-400 text-sm">
            <p>© 2025 Rythmiq. All rights reserved. Making form filling accessible for every student.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RythmiqAboutPage;