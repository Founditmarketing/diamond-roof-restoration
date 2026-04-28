import { motion } from 'motion/react';

export function TermsPage() {
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
            Terms & <span className="text-cyan">Conditions</span>
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
              These Terms and Conditions apply to all SMS messages sent and received as part of the A2P 10DLC messaging services provided by Diamond Roof Restorations. Your use of this service constitutes acceptance of these terms.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">Messaging Consent</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              As a user, you must explicitly consent to receive messages from Diamond Roof Restorations. Consent can be given through various channels including, but not limited to, our website sign-up forms, paper forms, or verbally through customer service interactions.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">Message Types and Frequency</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              Messages sent by Diamond Roof Restorations may include alerts, reminders, promotional offers, updates, and other relevant communications. The frequency of these messages will depend on your interaction with our services and your preferences.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">Data Rates and Charges</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              Standard message and data rates may apply to any messages you send or receive as part of our service. This could affect your bill and depends on the terms set by your mobile carrier.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">Opt-Out Instructions</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              To discontinue receiving messages from Diamond Roof Restorations, you can reply "STOP" to any of our messages at any time. This will unsubscribe you from our SMS communications.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">Privacy Policy</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              Our Privacy Policy outlines how we collect, use, and protect your data in relation to our A2P 10DLC messaging service. It can be found on our website.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">Message Delivery</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              Diamond Roof Restorations does not guarantee that messages will be delivered without delays or failures. Such issues can occur due to factors outside our control, such as network problems or device compatibility.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">User Obligations</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              When using our messaging service, you agree to abide by all applicable laws and regulations. You must not use this service to send messages that are offensive, illegal, or intended to harass or harm others.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">Compliance with Laws</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              You acknowledge that the messaging service must be used in compliance with all relevant laws, including those relating to privacy, telecommunications, and commercial communications.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">Changes to Terms and Conditions</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              Diamond Roof Restorations reserves the right to change these Terms and Conditions at any time. Changes will be communicated through our website or direct communications where feasible.
            </p>

            <h3 className="text-xl text-cyan mb-3 mt-8">Contact Information</h3>
            <p className="text-ghost/80 mb-6 leading-relaxed">
              For any queries or concerns regarding these Terms and Conditions, please contact Diamond Roof Restorations at 
              <a href="mailto:diamondroofrestorations@protonmail.com" className="text-cyan hover:underline ml-1">diamondroofrestorations@protonmail.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
