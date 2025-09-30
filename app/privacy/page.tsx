"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, Shield } from 'lucide-react';

export default function PrivacyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/Rythmiq-Logo.png"
                alt="Rythmiq Logo"
                width={589}
                height={423}
                className="h-10 w-auto"
                priority
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                Rythmiq
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/dockit" className="text-gray-300 hover:text-white transition-colors">DocKit</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
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
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: September 30, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-purple max-w-none">
            
            {/* Introduction */}
            <div className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
              <p className="text-gray-300 leading-relaxed">
                At Rythmiq, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our DocKit application and related services. Please read this 
                privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access 
                the application or services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">1.1 Personal Information</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Register for an account or express interest in obtaining information about us or our products</li>
                <li>Fill out a form (including name, email address, phone number)</li>
                <li>Use our document processing services</li>
                <li>Contact us for support or inquiries</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">1.2 Document Data</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                When you use DocKit, you may upload documents including photos, PDFs, and other files. We temporarily 
                process these documents to provide our validation and formatting services. All uploaded documents are 
                automatically deleted from our servers within 24 hours of upload.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">1.3 Automatically Collected Information</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We may automatically collect certain information when you use our services, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Device information (type, operating system, browser type)</li>
                <li>IP address and location data</li>
                <li>Usage data (features accessed, time spent, actions taken)</li>
                <li>Log data and error reports</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Process and validate your documents according to exam requirements</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service, updates, and marketing purposes</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Detect, prevent, and address technical issues or fraudulent activity</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">3. Data Storage and Security</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">3.1 Security Measures</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information, 
                including encryption, secure servers, and access controls. However, no method of transmission over the 
                Internet or electronic storage is 100% secure.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">3.2 Data Retention</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                Privacy Policy. Uploaded documents are automatically deleted within 24 hours. Account information is retained 
                until you request deletion or your account becomes inactive.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">4. Sharing Your Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in 
                the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services 
                on our behalf (e.g., hosting, analytics, customer support)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to 
                valid requests by public authorities</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition, 
                your information may be transferred</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">5. Your Rights and Choices</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Data Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where we rely on consent to process your information</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                To exercise these rights, please contact us at <a href="mailto:contact@rythmiq.in" className="text-purple-400 hover:text-purple-300">contact@rythmiq.in</a>
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We may use cookies and similar tracking technologies to track activity on our services and store certain 
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our services.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">7. Third-Party Links</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our services may contain links to third-party websites or services that are not owned or controlled by 
                Rythmiq. We have no control over and assume no responsibility for the content, privacy policies, or practices 
                of any third-party websites or services.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">8. Children's Privacy</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our services are intended for users who are at least 13 years old. We do not knowingly collect personal 
                information from children under 13. If you are a parent or guardian and believe your child has provided us 
                with personal information, please contact us.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">9. International Data Transfers</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of your state, province, 
                country, or other governmental jurisdiction where data protection laws may differ. We will take all steps 
                reasonably necessary to ensure that your data is treated securely.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
                Policy periodically for any changes.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">11. Contact Us</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="text-gray-300 mb-2"><strong>Email:</strong> <a href="mailto:contact@rythmiq.in" className="text-purple-400 hover:text-purple-300">contact@rythmiq.in</a></p>
                <p className="text-gray-300"><strong>Location:</strong> New Delhi, India</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mt-12">
              <p className="text-sm text-yellow-200 leading-relaxed">
                <strong>Legal Disclaimer:</strong> This is a standard template privacy policy. While we've customized it for 
                Rythmiq, you should have this reviewed by a legal professional before your official launch to ensure compliance 
                with applicable laws and regulations in your jurisdiction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/Rythmiq-Logo.png"
                  alt="Rythmiq Logo"
                  width={589}
                  height={423}
                  className="h-10 w-auto"
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
}
