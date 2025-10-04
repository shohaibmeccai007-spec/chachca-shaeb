import React, { useState } from 'react';
import Seo from '../components/Seo';

const COMPANY_EMAIL = 'leads@flable.ai';

const BookDemoPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const sendViaMailto = () => {
    const subject = encodeURIComponent('New Demo Request');
    const body = encodeURIComponent(
      `Full Name: ${fullName}\nCompany Name: ${companyName}\nPhone Number: ${phoneNumber}\nCompany Email: ${companyEmail}`
    );
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Optional: integrate with EmailJS or server endpoint if available via env
      const emailJsService = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const emailJsTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (emailJsService && emailJsTemplate && emailJsPublicKey) {
        const payload = {
          service_id: emailJsService,
          template_id: emailJsTemplate,
          user_id: emailJsPublicKey,
          template_params: {
            full_name: fullName,
            company_name: companyName,
            phone_number: phoneNumber,
            company_email: companyEmail,
          },
        };

        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error('EmailJS request failed');

        setStatus('success');
        return;
      }

      // Fallback: open mail client to send lead
      sendViaMailto();
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <>
      <Seo title="Book a Demo — Flable.ai" description="Request a live demo of Flable.ai." />
      <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Book a Demo</h1>
          <p className="text-gray-600">See how Flable.ai boosts ROI and cuts wasted ad spend</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="companyName">Company Name</label>
              <input id="companyName" type="text" required value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Acme Inc." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phoneNumber">Phone Number</label>
              <input id="phoneNumber" type="tel" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="+1 555 123 4567" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="companyEmail">Company Email</label>
              <input id="companyEmail" type="email" required value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="jane@acme.com" />
            </div>
          </div>

          <button type="submit" disabled={status === 'submitting'} className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition disabled:opacity-60">
            {status === 'submitting' ? 'Submitting…' : 'Book a Demo'}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-green-700 font-medium">Thank you! Our team will contact you shortly.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-600 font-medium">Something went wrong. Please try again or email us at leads@flable.ai.</p>
          )}
        </form>
      </div>
      </section>
    </>
  );
};

export default BookDemoPage;
