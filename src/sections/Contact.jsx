import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import AIAvatar from '../components/AIAvatar.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const updateFormField = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_API_URL || '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      let data = {};
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(data.error || `Transmission failed: ${response.status}`);
      }

      showAlert({
        show: true,
        text: 'Message received! Core link established. 😃',
        type: 'success',
      });

      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      showAlert({
        show: true,
        text: "Transmission failed. I didn't receive your message. 😢",
        type: 'danger',
      });
    } finally {
      setLoading(false);
      setTimeout(() => hideAlert(), 3000);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        {/* Terminal Background behind form only */}
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen opacity-10 pointer-events-none md:block hidden" />

        {/* Left: Contact Form */}
        <div className="contact-container w-full md:w-3/5 z-10 flex flex-col justify-center">
          <p className="text-xs font-orbitron font-bold tracking-[0.2em] text-cyber-blue uppercase animate-pulse">
            TRANSMISSION CORE
          </p>
          <h3 className="head-text text-cyber-gradient font-orbitron mt-2">Let's talk</h3>
          <p className="text-sm font-spacegrotesk text-white-600 mt-3 leading-relaxed">
            Whether you want to build a deep learning system, optimize backend APIs, review a dataset, or talk about a collaborative project, feel free to reach out.
          </p>
          
          {/* Quick Contact Details */}
          <div className="flex flex-wrap gap-3 mt-4 text-xs font-mono text-cyber-blue select-all">
            <span className="px-3 py-1.5 bg-[#080a14] border border-cyber-blue/20 rounded-md">
              📧 contact.shubhamkumar20@gmail.com
            </span>
            <span className="px-3 py-1.5 bg-[#080a14] border border-cyber-purple/20 rounded-md">
              📞 +91 7644907300
            </span>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-y-5">
            <label className="gap-y-2 flex flex-col">
              <span className="field-label font-orbitron text-xs tracking-wider text-cyber-blue">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={updateFormField}
                required
                className="field-input border border-cyber-blue/10 bg-[#0f111a]/40 focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all font-spacegrotesk text-sm"
                placeholder="Jane Doe"
              />
            </label>

            <label className="gap-y-2 flex flex-col">
              <span className="field-label font-orbitron text-xs tracking-wider text-cyber-purple">Email Address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateFormField}
                required
                className="field-input border border-cyber-purple/10 bg-[#0f111a]/40 focus:border-cyber-purple focus:shadow-[0_0_10px_rgba(189,0,255,0.2)] transition-all font-spacegrotesk text-sm"
                placeholder="janedoe@example.com"
              />
            </label>

            <label className="gap-y-2 flex flex-col">
              <span className="field-label font-orbitron text-xs tracking-wider text-cyber-pink">Secure Message Payload</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateFormField}
                required
                rows={4}
                className="field-input border border-cyber-pink/10 bg-[#0f111a]/40 focus:border-cyber-pink focus:shadow-[0_0_10px_rgba(255,0,127,0.2)] transition-all font-spacegrotesk text-sm"
                placeholder="Write your transmission parameters here..."
              />
            </label>

            <button className="field-btn bg-gradient-to-r from-cyber-blue to-cyber-purple border border-cyber-blue/20 hover:border-cyber-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all text-white font-orbitron tracking-widest text-sm uppercase py-3 font-semibold mt-4" type="submit" disabled={loading}>
              {loading ? 'Transmitting...' : 'Send Transmission'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>

        {/* Right: AI Interactive Avatar Panel */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center z-10 p-6 bg-[#0f111a]/20 border border-cyber-purple/15 rounded-2xl backdrop-blur-sm shadow-xl select-none">
          <AIAvatar />
          <div className="text-center mt-6">
            <span className="text-[10px] font-orbitron font-semibold tracking-widest text-cyber-purple/80 uppercase">AI AVATAR COGNITION MODULE</span>
            <p className="text-xs font-spacegrotesk text-white-600 mt-2 max-w-[200px] leading-relaxed">
              Hover over or move your pointer around the interface to stimulate neural network core receptors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
