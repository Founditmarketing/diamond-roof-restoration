import { motion } from 'motion/react';

export function PrivacyPage() {
  return (
    <main className="min-h-screen bg-navy relative pt-56 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 uppercase tracking-tight">
            Privacy <span className="text-cyan">Policy</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-cyan max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight"
        >
          <div className="bg-transparent mt-12">
            <h2 className="text-2xl text-white mb-4">Diamond Roof Restorations</h2>
            <p className="text-ghost/80 mb-8 leading-relaxed">
              At Diamond Roof Restorations, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information, particularly regarding our A2P 10DLC messaging service and website usage.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">1. Information We Collect</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              We may collect personal information that you provide to us directly through forms on our website, verbally during consultations, or through written contracts. This information typically includes your name, email address, physical address, and phone number.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">2. How We Use Your Information</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              Your information is used primarily to provide and improve our services to you. With your explicit consent, we also use your phone number to send alerts, reminders, promotional offers, and updates via SMS. We do not use your information for any purposes other than those explicitly stated at the time of collection.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">3. No Sale of Personal Data</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed border-l-2 border-cyan pl-4 py-2 bg-white/5 rounded-r">
              <strong>Crucially, we do not sell, rent, or lease your personal data or mobile information to any third parties for promotional or marketing purposes.</strong>
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">4. Data Security</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or cellular networks can be guaranteed to be 100% secure.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">5. Your Rights & Opt-Outs</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              You have the right to request access to or deletion of your personal data. If you are subscribed to our SMS communications, you can opt-out at any time by replying "STOP" to any received message. This will permanently remove you from our automated messaging list.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">6. Policy Updates</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or relevant laws. We encourage you to review this page occasionally for the latest information on our privacy practices.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">Contact Us</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at 
              <a href="mailto:diamondroofrestorations@protonmail.com" className="text-cyan hover:underline ml-1">diamondroofrestorations@protonmail.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
