import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

const RythmiqTermsOfService: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="/dockit" className="text-gray-300 hover:text-white transition-colors">DocKit</a>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
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
              <a href="/" className="block text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="/dockit" className="block text-gray-300 hover:text-white transition-colors">DocKit</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
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
                Welcome to Rythmiq! These Terms of Service govern your use of our DocKit application and related services. 
                By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of 
                these terms, you may not access our services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                By creating an account, accessing, or using Rythmiq's services including DocKit, you acknowledge that you 
                have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. These terms 
                apply to all users of the services, including without limitation users who are browsers, vendors, customers, 
                merchants, and contributors of content.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">2. Description of Services</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Rythmiq provides DocKit, an AI-powered document validation and processing platform designed to help users 
                prepare documents for exam applications and form submissions. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Document format validation against exam requirements</li>
                <li>Automatic file conversion and optimization</li>
                <li>Document organization and packaging</li>
                <li>AI-powered quality checks</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">3. User Accounts and Registration</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">3.1 Account Creation</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                To use certain features of our services, you must register for an account. You agree to provide accurate, 
                current, and complete information during registration and to update such information to keep it accurate, 
                current, and complete.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">3.2 Account Security</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities 
                that occur under your account. You agree to immediately notify us of any unauthorized use of your account.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">3.3 Age Requirement</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You must be at least 13 years old to use our services. If you are under 18, you represent that you have 
                your parent or guardian's permission to use the services.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">4. Acceptable Use Policy</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You agree not to use our services to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Create false identities or impersonate others</li>
                <li>Collect or harvest information about other users without their consent</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Attempt to reverse engineer, decompile, or disassemble any part of our services</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">5. User Content and Documents</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">5.1 Your Responsibility</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You retain all ownership rights to the documents and content you upload to our services. You are solely 
                responsible for ensuring that your uploaded content does not violate any laws or third-party rights.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.2 License to Process</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                By uploading documents to DocKit, you grant us a limited, non-exclusive license to process, analyze, and 
                transform your documents solely for the purpose of providing our services to you. This license terminates 
                when your documents are deleted from our servers (within 24 hours of upload).
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">5.3 Prohibited Content</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You may not upload content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, 
                obscene, or otherwise objectionable.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">6. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">6.1 Our Property</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The services, including all content, features, functionality, software, and technology, are owned by Rythmiq 
                and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, 
                distribute, sell, or lease any part of our services without our explicit written permission.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">6.2 Trademarks</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Rythmiq, DocKit, and related logos are trademarks of Rythmiq. You may not use these trademarks without our 
                prior written consent.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">7. Payment and Fees</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Certain features of our services may be offered for a fee. If you choose to use paid features, you agree to 
                pay all applicable fees as described at the time of purchase. All fees are non-refundable unless otherwise 
                stated or required by law.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We reserve the right to change our pricing at any time. If we change prices for services you are currently 
                using, we will provide reasonable notice before the change takes effect.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">8. Service Limitations and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">8.1 No Guarantee of Acceptance</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                While DocKit validates and processes documents to meet exam requirements, we do not guarantee that your 
                application will be accepted by any exam authority. The final decision rests with the respective exam 
                authorities, and Rythmiq bears no responsibility for application rejections.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">8.2 Service Availability</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We strive to provide uninterrupted service, but we do not guarantee that our services will be available at 
                all times. Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our 
                control.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">8.3 Accuracy of Information</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We make every effort to ensure that exam requirements and validation rules are accurate and up-to-date. 
                However, exam requirements may change, and you are responsible for verifying requirements with official 
                exam authorities before submission.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">9. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, RYTHMIQ SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR 
                INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Your access to or use of or inability to access or use the services</li>
                <li>Any conduct or content of any third party on the services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Application rejections or failures due to document formatting</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content</li>
              </ul>
              <p className="text-gray-300 mb-4 leading-relaxed">
                IN NO EVENT SHALL RYTHMIQ'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED THE 
                AMOUNT YOU HAVE PAID TO RYTHMIQ IN THE LAST TWELVE (12) MONTHS, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">10. Indemnification</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Rythmiq and its officers, directors, employees, and agents 
                from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, 
                arising out of or in any way connected with:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Your access to or use of the services</li>
                <li>Your violation of these Terms of Service</li>
                <li>Your violation of any third-party right, including any intellectual property, privacy, or proprietary right</li>
                <li>Any content you upload or submit through the services</li>
              </ul>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">11. Termination</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">11.1 By You</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You may terminate your account at any time by contacting us at contact@rythmiq.in or through your account 
                settings. Upon termination, your right to use the services will immediately cease.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">11.2 By Us</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We may terminate or suspend your account and access to the services immediately, without prior notice or 
                liability, for any reason, including if you breach these Terms of Service. All provisions of these terms 
                which by their nature should survive termination shall survive, including ownership provisions, warranty 
                disclaimers, and limitations of liability.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">12. Dispute Resolution and Governing Law</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">12.1 Governing Law</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India, without 
                regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">12.2 Jurisdiction</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Any disputes arising from these terms or your use of the services shall be subject to the exclusive 
                jurisdiction of the courts in New Delhi, India.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">12.3 Informal Resolution</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Before filing a claim, you agree to try to resolve the dispute informally by contacting us at 
                contact@rythmiq.in. We'll try to resolve the dispute informally by reaching out to you via email.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">13. Changes to Terms</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We reserve the right to modify or replace these Terms of Service at any time at our sole discretion. If a 
                revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What 
                constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                By continuing to access or use our services after those revisions become effective, you agree to be bound 
                by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the services.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">14. Severability and Waiver</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">14.1 Severability</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                If any provision of these Terms of Service is held to be unenforceable or invalid, such provision will be 
                changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under 
                applicable law, and the remaining provisions will continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">14.2 Waiver</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                No waiver by Rythmiq of any term or condition set forth in these terms shall be deemed a further or continuing 
                waiver of such term or condition or a waiver of any other term or condition.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">15. Entire Agreement</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                These Terms of Service, together with our Privacy Policy and any other legal notices published by us on the 
                services, constitute the entire agreement between you and Rythmiq concerning the services and supersede all 
                prior agreements and understandings, whether written or oral.
              </p>
            </div>

            {/* Section 16 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">16. Contact Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="text-gray-300 mb-2"><strong>Email:</strong> <a href="mailto:contact@rythmiq.in" className="text-purple-400 hover:text-purple-300">contact@rythmiq.in</a></p>
                <p className="text-gray-300"><strong>Location:</strong> New Delhi, India</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mt-12">
              <p className="text-sm text-yellow-200 leading-relaxed">
                <strong>Legal Disclaimer:</strong> This is a standard template for Terms of Service. While we've customized it 
                for Rythmiq, you should have this reviewed by a legal professional before your official launch to ensure 
                compliance with applicable laws and regulations in your jurisdiction, especially regarding liability limitations, 
                dispute resolution, and consumer protection laws in India.
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
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/dockit" className="hover:text-white transition-colors">DocKit</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
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

export default RythmiqTermsOfService;