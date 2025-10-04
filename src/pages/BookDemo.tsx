import React, { useState } from 'react';

const BookDemo: React.FC = () => {
  const [form, setForm] = useState({ fullName: '', companyName: '', phoneNumber: '', companyEmail: '' });
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const [error, setError] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
      setForm({ fullName: '', companyName: '', phoneNumber: '', companyEmail: '' });
    } catch (err: any) {
      setStatus('error');
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Book a Demo</h1>
        <p className="text-gray-600 mb-10">Fill out your details and our team will reach out shortly.</p>

        {status === 'success' ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl">
            Thank you! Our team will contact you shortly.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input required name="fullName" value={form.fullName} onChange={onChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input required name="companyName" value={form.companyName} onChange={onChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Acme Inc." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input required name="phoneNumber" value={form.phoneNumber} onChange={onChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="+1 (555) 555-5555" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Email</label>
                <input required type="email" name="companyEmail" value={form.companyEmail} onChange={onChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="name@company.com" />
              </div>
            </div>

            {status === 'error' && (
              <div className="mt-4 text-red-600 font-medium">{error}</div>
            )}

            <button type="submit" disabled={status === 'submitting'} className="mt-8 btn-primary">
              {status === 'submitting' ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default BookDemo;
