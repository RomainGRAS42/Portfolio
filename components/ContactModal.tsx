
import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Production Webhook URL
    const webhookUrl = "https://n8n.srv901593.hstgr.cloud/webhook/74406340-daf6-42e4-bdac-f8f25cd7b325";

    const payload = {
      email,
      message,
      submittedAt: new Date().toISOString(),
      source: "Portfolio Romain Gras v2"
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        // Reset form after a delay and close modal
        setTimeout(() => {
          setEmail('');
          setMessage('');
          setStatus('idle');
          onClose();
        }, 5000); // Increased delay to let the user read the longer English message
      } else {
        throw new Error('Webhook error');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-lg bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-12 border border-white/20 shadow-[0_0_80px_rgba(0,0,0,1)] animate-reveal overflow-hidden">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-zinc-300 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
          aria-label="Close form"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-10 text-center md:text-left">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-300 mb-4 block">Collaboration</span>
          <h2 id="modal-title" className="text-4xl font-heading font-black tracking-tighter uppercase leading-none text-white">
            Let's Start <br /> <span className="text-zinc-400">Something.</span>
          </h2>
        </div>

        {status === 'success' ? (
          <div className="py-12 text-center animate-reveal">
            <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-white font-black uppercase tracking-widest mb-4 text-lg">Got it! Thanks for your message.</h3>
            <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-tighter leading-relaxed max-w-[280px] mx-auto">
              You will receive a confirmation email in less than 5 minutes. Talk to you soon!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-white ml-1">
                Your Email <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input 
                id="email"
                required
                disabled={status === 'loading'}
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 text-white text-base focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all placeholder:text-zinc-600 disabled:opacity-50"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-white ml-1">
                Your Message <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <textarea 
                id="message"
                required
                disabled={status === 'loading'}
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 text-white text-base focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all placeholder:text-zinc-600 resize-none disabled:opacity-50"
              ></textarea>
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center">
                Something went wrong. Please try again.
              </p>
            )}

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-white text-black py-5 rounded-xl text-xs font-black uppercase tracking-[0.3em] hover:bg-zinc-200 transition-all active:scale-[0.98] shadow-2xl focus:ring-4 focus:ring-white/20 disabled:bg-zinc-800 disabled:text-zinc-600 flex items-center justify-center gap-3"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : "Send message"}
            </button>
          </form>
        )}

        <p className="text-center mt-10 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
          Response guaranteed within 24-48h
        </p>
      </div>
    </div>
  );
};

export default ContactModal;
