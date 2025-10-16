"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Clock, FileCheck, Globe, Menu, Shield, Smartphone, X, Zap } from 'lucide-react';

const DockitProductPage: React.FC = () => {
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
    alert('Thank you for your interest! We\'ll send you access details shortly.');
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '', exam: '' });
  };

  const detailedFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Validation",
      description: "Our machine learning algorithms analyze your documents against official exam requirements in real-time.",
      benefits: [
        "99.9% accuracy in format detection",
        "Instant feedback on compliance issues",
        "Learns from official exam portals",
        "Validates dimensions, size, and format"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Automatic Format Conversion",
      description: "No more manual resizing or converting. DocKit handles all the technical complexity automatically.",
      benefits: [
        "Converts to required dimensions (cm/pixels)",
        "Optimizes file size within limits",
        "Maintains image quality",
        "Supports all major formats (JPG, PNG, PDF)"
      ]
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Smart Organization",
      description: "Get a perfectly organized ZIP file with all documents named and arranged exactly as required.",
      benefits: [
        "Auto-naming per exam schema",
        "Folder structure creation",
        "Ready-to-upload packaging",
        "No manual sorting needed"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Lightning Fast Processing",
      description: "What takes hours at cyber cafes takes minutes with DocKit. Process entire applications in one go.",
      benefits: [
        "Batch processing supported",
        "Average 2-3 minutes per application",
        "Cloud-based processing",
        "Works on any device"
      ]
    }
  ];

  const examCategories = [
    {
      category: "Civil Services",
      exams: ["UPSC CSE", "UPSC CDS", "State PSCs", "SSC CGL", "SSC CHSL"]
    },
    {
      category: "Engineering",
      exams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "State CETs"]
    },
    {
      category: "Medical",
      exams: ["NEET UG", "NEET PG", "AIIMS", "JIPMER", "State METs"]
    },
    {
      category: "Management",
      exams: ["CAT", "XAT", "SNAP", "NMAT", "CMAT"]
    },
    {
      category: "Graduate Aptitude",
      exams: ["GATE", "NET/JRF", "CSIR NET", "ICAR NET"]
    },
    {
      category: "Banking & Finance",
      exams: ["IBPS PO", "IBPS Clerk", "SBI PO", "RBI Grade B"]
    }
  ];

  const useCases = [
    {
      exam: "UPSC CSE",
      problem: "Photo must be 3.5cm × 4.5cm, 200 DPI, 20-50KB in JPEG format",
      solution: "Upload any photo → DocKit automatically resizes, converts, and optimizes to exact requirements",
      icon: "🎯"
    },
    {
      exam: "JEE Main",
      problem: "Signature size 3cm × 1cm, black ink on white paper, 10-20KB",
      solution: "Scan or photo of signature → DocKit crops, enhances contrast, and sets perfect dimensions",
      icon: "✍️"
    },
    {
      exam: "NEET UG",
      problem: "Category certificate must be PDF, max 200KB, specific naming convention",
      solution: "Upload certificate → DocKit converts to PDF, compresses, and names it correctly",
      icon: "📄"
    }
  ];

  const technicalSpecs = [
    {
      category: "Supported Formats",
      specs: ["Input: JPG, JPEG, PNG, PDF, HEIC", "Output: JPG, PNG, PDF as required", "Handles scanned documents", "Camera photos supported"]
    },
    {
      category: "File Processing",
      specs: ["Max input size: 10MB per file", "Batch processing: Up to 20 files", "Processing time: 10-30 seconds", "Cloud storage: Temporary (24 hours)"]
    },
    {
      category: "Security",
      specs: ["End-to-end encryption", "Auto-deletion after 24 hours", "No permanent storage", "GDPR compliant"]
    },
    {
      category: "Compatibility",
      specs: ["Web app (all browsers)", "iOS app (Coming Soon)", "Android app (Coming Soon)", "Works offline (limited features)"]
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Select Your Exam",
      description: "Choose from 50+ supported exams. DocKit loads the exact requirements for that specific form.",
      screenshot: "Screenshot: Exam selection screen with search bar, showing popular exams like UPSC, JEE, NEET with logos. Clean card-based layout."
    },
    {
      step: 2,
      title: "Upload Documents",
      description: "Drag & drop or click to upload. Take photos directly or select from gallery. Upload multiple files at once.",
      screenshot: "Screenshot: Upload interface with drag-drop zone, camera button, gallery button. Progress indicators for multiple files. Clean, intuitive UI."
    },
    {
      step: 3,
      title: "AI Validation",
      description: "Watch as DocKit analyzes each document. Get real-time feedback on issues and see automatic corrections happen live.",
      screenshot: "Screenshot: Validation screen showing document thumbnails with checkmarks/warnings. Side panel with detailed feedback: 'File size optimized: 156KB → 45KB', 'Dimensions corrected: 1200×1600 → 1050×1350 (3.5×4.5cm at 300 DPI)'. Progress animations."
    },
    {
      step: 4,
      title: "Review & Download",
      description: "Review all processed documents. See before/after comparisons. Download perfectly organized ZIP file ready for submission.",
      screenshot: "Screenshot: Review screen with before/after sliders for each document. Summary card showing '✓ All documents validated', '✓ Format requirements met', '✓ Ready to submit'. Large 'Download ZIP' button. Option to re-process individual files."
    }
  ];

  const faqs = [
    {
      question: "Which platforms is DocKit available on?",
      answer: "DocKit is currently available as a web app accessible from any browser on desktop or mobile. We're launching iOS and Android native apps soon! Sign up for early access to be notified when the mobile apps are available."
    },
    {
      question: "How does DocKit know the requirements for each exam?",
      answer: "Our team continuously updates exam requirements from official portals. Our AI is trained on thousands of successful applications and official documentation to ensure 99.9% accuracy."
    },
    {
      question: "Is my data safe? Do you store my documents?",
      answer: "Absolutely safe! We use bank-grade encryption for all uploads. Documents are automatically deleted after 24 hours. We never permanently store your files or share them with anyone."
    },
    {
      question: "What if my exam isn't listed?",
      answer: "We support 50+ major Indian exams and are constantly adding more. If your exam isn't listed, request it through the app and we'll prioritize adding it based on demand."
    },
    {
      question: "Can I use DocKit offline?",
      answer: "Limited features work offline in the mobile apps (coming soon). Document processing requires internet as our AI runs on cloud servers for maximum accuracy and speed."
    },
    {
      question: "What file formats do you support?",
      answer: "We support all common formats: JPG, JPEG, PNG, PDF, and HEIC (iPhone photos). We can also process scanned documents and camera photos directly."
    },
    {
      question: "How long does processing take?",
      answer: "Most documents process in 10-30 seconds. A complete exam application with 5-10 documents typically takes 2-3 minutes total."
    },
    {
      question: "What happens if validation fails?",
      answer: "DocKit will tell you exactly what's wrong and attempt to fix it automatically. If manual intervention is needed, you'll get clear guidance on what to correct."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/Rythmiq-logo-light.png"
                alt="Rythmiq Logo"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                Rythmiq
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/dockit" className="text-white font-medium">DocKit</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link 
                href="https://dockit.rythmiq.in/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium"
              >
                Get Access
              </Link>
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
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/dockit" className="block text-white font-medium">DocKit</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link 
                href="https://dockit.rythmiq.in/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium text-center"
              >
                Get Access
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">Now Available</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Meet{' '}
                <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                  DocKit
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your AI-powered document assistant that validates, processes, and organizes exam application documents with 99.9% accuracy. Never worry about format requirements again.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="https://dockit.rythmiq.in/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium text-lg flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
                >
                  <Globe className="w-5 h-5" />
                  Launch Web App
                </Link>
                <button 
                  className="px-8 py-4 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all font-medium text-lg"
                >
                  Watch Demo
                </button>
              </div>

              {/* Platform Availability */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Globe className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Web App: <span className="text-white font-medium">Available Now</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Smartphone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">iOS & Android Apps: <span className="text-purple-300 font-medium">Coming Soon</span></span>
                </div>
              </div>
            </div>

            {/* Right - App Mockup */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/Dockit-mockup.png"
                  alt="DocKit App Interface Mockup"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                  priority
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-purple-600/20 via-transparent to-purple-400/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Exams Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Supports All Major Indian Exams</h2>
            <p className="text-xl text-gray-400">From civil services to engineering—we've got you covered</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examCategories.map((category, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-300">{category.category}</h3>
                <ul className="space-y-2">
                  {category.exams.map((exam, examIndex) => (
                    <li key={examIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{exam}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Don't see your exam?</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all font-medium"
            >
              Request New Exam Support
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Features, Simple Experience</h2>
            <p className="text-xl text-gray-400">Everything you need for perfect applications</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {detailedFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Visual Walkthrough */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How DocKit Works</h2>
            <p className="text-xl text-gray-400">Four simple steps to perfect applications</p>
          </div>

          <div className="space-y-12">
            {howItWorksSteps.map((step, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 text-xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{step.description}</p>
                  
                  <div className="flex items-center gap-3 text-sm text-purple-300">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span>
                      {step.step === 1 && "Choose from 50+ supported exams"}
                      {step.step === 2 && "Multiple upload methods available"}
                      {step.step === 3 && "Real-time validation & feedback"}
                      {step.step === 4 && "Ready-to-submit ZIP package"}
                    </span>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 backdrop-blur-sm">
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-400/20 border border-purple-500/30">
                        {step.step === 1 && <Globe className="w-10 h-10 text-purple-300" />}
                        {step.step === 2 && <FileCheck className="w-10 h-10 text-purple-300" />}
                        {step.step === 3 && <Zap className="w-10 h-10 text-purple-300" />}
                        {step.step === 4 && <CheckCircle2 className="w-10 h-10 text-purple-300" />}
                      </div>
                      <div className="text-lg font-semibold text-purple-300">
                        {step.step === 1 && "Select & Configure"}
                        {step.step === 2 && "Upload & Organize"}
                        {step.step === 3 && "AI Processing"}
                        {step.step === 4 && "Download Ready"}
                      </div>
                      <div className="text-sm text-gray-400 max-w-sm mx-auto">
                        {step.step === 1 && "Smart exam detection with automatic requirement loading"}
                        {step.step === 2 && "Drag & drop interface with bulk upload support"}
                        {step.step === 3 && "Advanced AI validates and optimizes your documents"}
                        {step.step === 4 && "Perfectly organized files ready for submission"}
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-purple-400 opacity-60"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-purple-300 opacity-40"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases / Real Examples */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Real Problems, Real Solutions</h2>
            <p className="text-xl text-gray-400">See how DocKit solves actual exam requirements</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-3">{useCase.exam}</h3>
                
                <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <div className="flex items-start gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-red-300">The Problem:</span>
                  </div>
                  <p className="text-sm text-gray-300">{useCase.problem}</p>
                </div>

                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-green-300">DocKit Solution:</span>
                  </div>
                  <p className="text-sm text-gray-300">{useCase.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-400">Everything you need to know about DocKit's capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-300">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-300">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about DocKit</p>
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

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-purple-400/10 border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Never Worry About Documents Again?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who are submitting perfect applications with DocKit.
            </p>
            <Link 
              href="https://dockit.rythmiq.in/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium text-lg flex items-center justify-center gap-2 mx-auto shadow-lg shadow-purple-500/30"
            >
              <Globe className="w-5 h-5" />
              Launch Web App Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-400 mt-4">No installation required • Works on any device • Free to try</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/Rythmiq-logo-dark.png"
                  alt="Rythmiq Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
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
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
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

      {/* Access Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-slate-900 rounded-2xl border border-purple-500/30 max-w-md w-full p-8 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-3xl font-bold mb-2">Get Access to DocKit</h3>
            <p className="text-gray-400 mb-6">Start using DocKit now. We'll send you access details and keep you updated on mobile app launch.</p>
            
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
                Get Access Now
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Web app access is instant. We'll notify you when mobile apps launch.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DockitProductPage;
