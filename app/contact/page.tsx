"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, MessageCircle, Send, Twitter, Youtube } from 'lucide-react';

const RythmiqContactPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Contact form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "For general inquiries and support",
      contact: "contact@rythmiq.in",
      action: "mailto:contact@rythmiq.in"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      description: "Based in the heart of India",
      contact: "New Delhi, India",
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      description: "We typically respond within",
      contact: "24 hours",
      action: null
    }
  ];

  const departments = [
    {
      title: "General Support",
      email: "contact@rythmiq.in",
      description: "Questions about DocKit, account issues, or general inquiries"
    },
    {
      title: "Business & Partnerships",
      email: "contact@rythmiq.in",
      description: "Collaboration opportunities, institutional partnerships"
    },
    {
      title: "Careers",
      email: "contact@rythmiq.in",
      description: "Join our team and help millions of students"
    },
    {
      title: "Press & Media",
      email: "contact@rythmiq.in",
      description: "Media inquiries, interviews, and press releases"
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "https://twitter.com/rythmiq" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "https://linkedin.com/company/rythmiq" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "https://instagram.com/rythmiq" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "https://facebook.com/rythmiq" },
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube", url: "https://youtube.com/@rythmiq" }
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
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/dockit" className="text-gray-300 hover:text-white transition-colors">DocKit</Link>
              <Link href="/contact" className="text-white font-medium">Contact</Link>
              <Link 
                href="/"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium"
              >
                Get Started
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/dockit" className="block text-gray-300 hover:text-white transition-colors">DocKit</Link>
              <Link href="/contact" className="block text-white font-medium">Contact</Link>
              <Link 
                href="/"
                className="block w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Have questions? Need support? Want to partner with us? We're here to help. 
            Reach out and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{method.description}</p>
                {method.action ? (
                  <a 
                    href={method.action}
                    className="text-purple-300 font-medium hover:text-purple-200 transition-colors"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <p className="text-purple-300 font-medium">{method.contact}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-1">Live Chat Coming Soon!</h4>
                    <p className="text-sm text-gray-400">We're launching real-time chat support for instant help. Stay tuned!</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Looking for something specific? Reach out to the right department directly.
              </p>

              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all"
                  >
                    <h3 className="text-lg font-semibold mb-2">{dept.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{dept.description}</p>
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-purple-300 text-sm font-medium hover:text-purple-200 transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Follow Our Journey</h2>
          <p className="text-xl text-gray-400 mb-8">
            Stay updated with the latest news, tips, and product updates
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all group"
              >
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                  {social.icon}
                </div>
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Note: Social media links are placeholders. Follow us for updates when we launch!
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-400/10 border border-purple-500/30 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Looking for Quick Answers?</h3>
            <p className="text-gray-300 mb-6">
              Check out our FAQ section for instant answers to common questions about DocKit and Rythmiq.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/dockit"
                className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-500 transition-all font-medium"
              >
                View DocKit FAQ
              </Link>
              <Link 
                href="/"
                className="px-6 py-3 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all font-medium"
              >
                General FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="https://forms.google.com/your-form-url" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Careers</a></li>
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

export default RythmiqContactPage;