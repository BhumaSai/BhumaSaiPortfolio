import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MessageSquare, Phone, MapPin, CheckCircle2, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailconf } from '../../data/email';

emailjs.init(emailconf.publicID)

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        setIsSubmitting(true);
        await emailjs.send(
          emailconf.serviceID,
          emailconf.templateID,
          formData,
          emailconf.publicID
        );
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        setIsSubmitting(false);
        setIsSubmitted(false);
        alert("Something went wrong while sending message");
      }
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-300">
      {/* Permanent High-Energy Background for Contact */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Polka Dot / Square Grid */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.15] bg-[radial-gradient(#06b6d4_1px,transparent_1px)] dark:bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:32px_32px] animate-grid" />

        {/* Pulsing Vibrant Blobs */}
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-cyan-600/10 dark:bg-cyan-600/20 blur-[60px] rounded-full animate-blob" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/20 blur-[60px] rounded-full animate-blob" style={{ animationDelay: '-2s' }} />

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white dark:from-[#030712] dark:via-[#030712]/80 dark:to-[#030712]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 bg-clip-text text-transparent mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            I'm a motivated fresher actively seeking opportunities to contribute, learn, and grow. Let's discuss how I can add value to your team!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:items-stretch">
          <div className={`lg:w-1/3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="p-10 bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 dark:border-gray-800/50 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Contact Info</h3>

                <div className="space-y-10">
                  {[
                    { icon: <Mail size={24} />, label: 'Email', value: 'saibhuma.reddy@gmail.com', href: 'mailto:saibhuma.reddy@gmail.com' },
                    { icon: <Phone size={24} />, label: 'Phone', value: '+91 9110759739', href: 'tel:+919110759739' },
                    { icon: <MapPin size={24} />, label: 'Location', value: 'Andhra Pradesh, India' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400 mr-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{item.label}</h4>
                        {item.href ? (
                          <a href={item.href} className="text-xl font-bold text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-xl font-bold text-gray-900 dark:text-gray-200">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-100 dark:border-gray-800/50">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">Professional Networks</h4>
                <div className="flex space-x-6">
                  <a href="https://www.linkedin.com/in/bhuma-sai" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 dark:bg-black/40 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-500 shadow-sm">
                    <MessageSquare size={24} />
                  </a>
                  <a href="https://github.com/BhumaSai" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 dark:bg-black/40 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 shadow-sm">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`lg:w-2/3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="p-10 md:p-14 bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 dark:border-gray-800/50 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-20 animate-fadeIn">
                  <div className="inline-flex items-center justify-center w-28 h-28 bg-green-50 dark:bg-green-900/20 text-green-500 rounded-full mb-10 shadow-inner">
                    <CheckCircle2 size={56} />
                  </div>
                  <h3 className="text-4xl font-black mb-6 text-gray-900 dark:text-white">Message Sent Successfully!</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-12 py-5 bg-blue-300 hover:bg-blue-500 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/30 transition-all hover:scale-110 active:scale-95"
                  >
                    Send New Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-700 dark:text-gray-300 ml-2 uppercase tracking-[0.15em]">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-6 py-5 bg-gray-50/50 dark:bg-gray-800/20 border-2 ${errors.name ? 'border-red-500' : 'border-gray-100 dark:border-gray-700/50'} rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 dark:focus:bg-gray-900/50 transition-all duration-300 font-bold`}
                        placeholder="e.g. John Doe"
                      />
                      {errors.name && <p className="text-xs font-bold text-red-500 ml-2">{errors.name}</p>}
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-700 dark:text-gray-300 ml-2 uppercase tracking-[0.15em]">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-6 py-5 bg-gray-50/50 dark:bg-gray-800/20 border-2 ${errors.email ? 'border-red-500' : 'border-gray-100 dark:border-gray-700/50'} rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 dark:focus:bg-gray-900/50 transition-all duration-300 font-bold`}
                        placeholder="e.g. john@example.com"
                      />
                      {errors.email && <p className="text-xs font-bold text-red-500 ml-2">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-700 dark:text-gray-300 ml-2 uppercase tracking-[0.15em]">Subject of Inquiry</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-6 py-5 bg-gray-50/50 dark:bg-gray-800/20 border-2 ${errors.subject ? 'border-red-500' : 'border-gray-100 dark:border-gray-700/50'} rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 dark:focus:bg-gray-900/50 transition-all duration-300 font-bold`}
                      placeholder="e.g. Project Collaboration / General Inquiry"
                    />
                    {errors.subject && <p className="text-xs font-bold text-red-500 ml-2">{errors.subject}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-700 dark:text-gray-300 ml-2 uppercase tracking-[0.15em]">Detailed Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-6 py-5 bg-gray-50/50 dark:bg-gray-800/20 border-2 ${errors.message ? 'border-red-500' : 'border-gray-100 dark:border-gray-700/50'} rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 dark:focus:bg-gray-900/50 transition-all duration-300 font-bold resize-none`}
                      placeholder="Share your thoughts or project details here..."
                    />
                    {errors.message && <p className="text-xs font-bold text-red-500 ml-2">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/30 flex items-center justify-center space-x-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 disabled:opacity-50 text-xl tracking-tight"
                  >
                    {isSubmitting ? (
                      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={24} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;