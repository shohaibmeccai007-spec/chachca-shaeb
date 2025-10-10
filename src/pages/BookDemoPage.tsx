import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const BookDemoPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    companyEmail: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    if (!formData.fullName.trim()) return 'Full name is required';
    if (!formData.companyName.trim()) return 'Company name is required';
    if (!formData.companyEmail.trim()) return 'Company email is required';
    // basic email regex
    const emailRe = /^\S+@\S+\.\S+$/;
    if (!emailRe.test(formData.companyEmail)) return 'Please enter a valid email';
    return null;
  };

  // Sends email via EmailJS REST API if environment variables are provided.
  // Fallback: if VITE_DEMO_ENDPOINT is provided, POST form JSON to that endpoint.
  // Final fallback: POST to FormSubmit to send email to info@flable.ai
  const sendEmail = async () => {
    const env: any = (import.meta as any).env;
    const emailjsService = env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplate = env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsUser = env.VITE_EMAILJS_USER_ID; // or PUBLIC KEY
    const customEndpoint = env.VITE_DEMO_ENDPOINT;

    // Preferred: EmailJS
    if (emailjsService && emailjsTemplate && emailjsUser) {
      const body = {
        service_id: emailjsService,
        template_id: emailjsTemplate,
        user_id: emailjsUser,
        template_params: {
          fullName: formData.fullName,
          companyName: formData.companyName,
          phoneNumber: formData.phoneNumber,
          companyEmail: formData.companyEmail,
          to_email: 'info@flable.ai' // ensure your EmailJS template uses this param or is configured to send to this address
        }
      };

      const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`EmailJS error: ${resp.status} ${text}`);
      }

      return;
    }

    // Fallback: custom server endpoint
    if (customEndpoint) {
      const resp = await fetch(customEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`Server error: ${resp.status} ${text}`);
      }

      return;
    }

    // Final fallback: use FormSubmit to send to info@flable.ai
    try {
      const resp = await fetch('https://formsubmit.co/ajax/info@flable.ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          phoneNumber: formData.phoneNumber,
          companyEmail: formData.companyEmail,
          _subject: 'New Demo Request from Website'
        })
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`FormSubmit error: ${resp.status} ${text}`);
      }

      return;
    } catch (err) {
      // If FormSubmit fails due to CORS or network, rethrow
      throw new Error('No email sending configuration available and FormSubmit failed. Configure EmailJS or a server endpoint.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setIsLoading(true);

    try {
      await sendEmail();
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError(err?.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto py-24 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Thanks — we received your request</h2>
        <p className="text-gray-600 mb-6">Our team will reach out to schedule your demo shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Book a Demo</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        {error && <div className="text-red-600">{error}</div>}

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Full name</span>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-200 rounded px-3 py-2"
            placeholder="Jane Doe"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Company name</span>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-200 rounded px-3 py-2"
            placeholder="Acme Co"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Phone number</span>
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-200 rounded px-3 py-2"
            placeholder="+1 555 555 5555"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Company email</span>
          <input
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-200 rounded px-3 py-2"
            placeholder="hello@company.com"
          />
        </label>

        <div className="flex items-center justify-between">
          <small className="text-gray-500">We’ll email you to schedule the demo.</small>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 disabled:opacity-60"
          >
            {isLoading ? 'Sending…' : 'Request Demo'}
          </button>
        </div>

        <div className="text-xs text-gray-500">
          Tip: configure EmailJS (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_USER_ID) or a server endpoint (VITE_DEMO_ENDPOINT) to actually send emails. Fallbacks are available to ensure delivery.
        </div>
      </form>
    </div>
  );
};

export default BookDemoPage;