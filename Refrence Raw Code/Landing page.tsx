import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Upload, Zap, Shield, Download, X, Menu, Star, Sparkles, Target, Rocket } from 'lucide-react';

const RythmiqHomepage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    exam: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '', exam: '' });
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Validation",
      description: "Advanced machine learning validates every document against exam requirements with 99.9% accuracy."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Format Compliance",
      description: "Automatically converts and processes files to meet exact schema requirements for any exam."
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "One-Click Upload",
      description: "Get a perfectly organized, ready-to-submit ZIP file. No manual sorting or formatting needed."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Multi-Exam Support",
      description: "Whether it's UPSC, JEE, NEET, or any other exam - we've got you covered with one platform."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Upload Documents",
      description: "Simply upload your documents through our mobile app - photos, PDFs, or scans."
    },
    {
      step: "02",
      title: "AI Validation",
      description: "Our intelligent system validates and processes each document against exam requirements."
    },
    {
      step: "03",
      title: "Download & Submit",
      description: "Get a ready-to-upload ZIP file, perfectly organized and formatted for your application."
    }
  ];

  const visionProducts = [
    {
      name: "DocKit",
      status: "Available Now",
      description: "AI-powered document validation and processing for exam applications",
      available: true
    },
    {
      name: "FormAssist",
      status: "Coming Soon",
      description: "Intelligent form auto-fill with real-time error detection",
      available: false
    },
    {
      name: "SmartVerify",
      status: "Coming Soon",
      description: "Instant document verification and eligibility checking",
      available: false
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      exam: "UPSC Aspirant",
      content: "DocKit saved me hours of frustration. My documents were perfectly formatted and my application was accepted on the first try!",
      rating: 5
    },
    {
      name: "Rahul Verma",
      exam: "JEE Student",
      content: "I was worried about document rejection. DocKit's validation gave me complete confidence. Highly recommended!",
      rating: 5
    },
    {
      name: "Anjali Patel",
      exam: "NEET Candidate",
      content: "The best tool for exam applications. Simple, fast, and accurate. Worth every penny!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Which exams does DocKit support?",
      answer: "DocKit currently supports major exams including UPSC, JEE, NEET, CAT, GATE, and many more. We're constantly adding new exam formats based on user demand."
    },
    {
      question: "How accurate is the AI validation?",
      answer: "Our machine learning models achieve 99.9% accuracy in document validation and format compliance, ensuring your applications meet all requirements."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-grade encryption and never store your documents permanently. Your privacy and security are our top priorities."
    },
    {
      question: "What file formats are supported?",
      answer: "We support all common formats including JPG, PNG, PDF, and scanned documents. Our AI can process and convert files as needed."
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
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#vision" className="text-gray-300 hover:text-white transition-colors">Our Vision</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium"
              >
                Get Early Access
              </button>
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
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#vision" className="block text-gray-300 hover:text-white transition-colors">Our Vision</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              <button 
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium"
              >
                Get Early Access
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Problem-First with Image */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>
          {/* Placeholder for real photo */}
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="text-center p-8 max-w-2xl">
              <div className="text-gray-500 text-sm mb-2">[PLACEHOLDER IMAGE]</div>
              <p className="text-gray-400 text-sm">
                Photo: Students crowded outside cyber cafe, waiting in line to get exam forms filled.<br/>
                Mood: Frustration, chaos, confusion. Shot during peak admission season.<br/>
                Style: Documentary, authentic Indian street scene with cyber cafe signboard visible.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto pt-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span className="text-sm text-purple-200">Introducing DocKit by Rythmiq</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Still Paying Cyber Cafes{' '}
              <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                To Fill Your Forms?
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Take control with AI-powered document validation. Fill forms yourself, confidently from your phone.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium text-lg flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
              >
                Join the Independent Generation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all font-medium text-lg backdrop-blur-sm">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>No technical skills needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>Works from your phone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>100% accurate validation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-purple-800/20 border-y border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">5,000+</div>
              <div className="text-sm text-gray-400">Students on Waitlist</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-sm text-gray-400">Exams Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Validation Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">₹0</div>
              <div className="text-sm text-gray-400">Cyber Cafe Fees Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Sound Familiar?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-semibold mb-3 text-red-300">Application Rejected</h3>
              <p className="text-gray-400">Wrong file format, incorrect dimensions, or file size issues causing form rejection.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-300">Hours Wasted</h3>
              <p className="text-gray-400">Spent entire day converting PDFs, resizing images, only to fail at submission.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20">
              <div className="text-4xl mb-4">🤯</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">Technical Confusion</h3>
              <p className="text-gray-400">"Image must be 3.5cm × 4.5cm at 200 DPI in JPEG format" - What does that even mean?</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl text-gray-300 mb-6">
              You're not alone. <span className="text-purple-400 font-semibold">Millions of students</span> face this every year.
            </p>
            <p className="text-xl text-gray-400">
              But it doesn't have to be this way anymore.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Meet{' '}
              <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                DocKit
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your personal document assistant that understands every exam's requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Three Simple Steps</h2>
            <p className="text-xl text-gray-400">From chaos to confidence in minutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-6 text-3xl font-bold shadow-lg shadow-purple-500/50">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2 text-green-300">You're Done!</h3>
              <p className="text-gray-300">Submit with complete confidence. No more anxiety, no more rejections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rythmiq Vision Section */}
      <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/30 via-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Target className="w-4 h-4 text-purple-300" />
              <span className="text-sm text-purple-200">The Rythmiq Mission</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              One Platform for{' '}
              <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                All Form-Filling Needs
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              DocKit is just the beginning. We're building the complete ecosystem to make online form filling 
              accessible, simple, and stress-free for every Indian student.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {visionProducts.map((product, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border backdrop-blur-sm transition-all ${
                  product.available 
                    ? 'bg-gradient-to-br from-purple-500/20 to-transparent border-purple-500/40 shadow-lg shadow-purple-500/20' 
                    : 'bg-gradient-to-br from-slate-800/30 to-transparent border-slate-700/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.available 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-slate-700/50 text-slate-300 border border-slate-600/30'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">{product.description}</p>
                {product.available && (
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-6 w-full px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition-all font-medium flex items-center justify-center gap-2"
                  >
                    Get Access <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-300 max-w-2xl leading-relaxed">
                To become India's most trusted platform for form filling - where technology empowers every student 
                to handle their applications independently, confidently, and successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">Join thousands who've taken control of their applications</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.exam}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
              >
                <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-purple-400 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-purple-400/10 border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Take Control?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 5,000+ students who are filling forms independently, confidently, and successfully.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium text-lg flex items-center justify-center gap-2 mx-auto shadow-lg shadow-purple-500/30"
            >
              Get Early Access to DocKit
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-400 mt-4">No credit card required • Launch: October 2025</p>
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
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#vision" className="hover:text-white transition-colors">Our Vision</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#vision" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-purple-500/20 text-center text-gray-400 text-sm">
            <p>© 2025 Rythmiq. All rights reserved. Making form filling accessible for every student.</p>
          </div>
        </div>
      </footer>

      {/* Early Access Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-slate-900 rounded-2xl border border-purple-500/30 max-w-md w-full p-8 relative animate-in">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-3xl font-bold mb-2">Get Early Access</h3>
            <p className="text-gray-400 mb-6">Join 5,000+ students on the waitlist. Be among the first to experience DocKit when we launch.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Target Exam (Optional)</label>
                <input 
                  type="text"
                  value={formData.exam}
                  onChange={(e) => setFormData({...formData, exam: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="e.g., UPSC, JEE, NEET"
                />
              </div>
              
              <button 
                onClick={handleSubmit}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium shadow-lg shadow-purple-500/30"
              >
                Join Waitlist
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                We'll notify you as soon as DocKit launches. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RythmiqHomepage;