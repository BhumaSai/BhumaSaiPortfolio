import React, { useState } from 'react';
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
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-[#030712]">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 bg-clip-text text-transparent mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            I'm a motivated fresher actively seeking opportunities to contribute, learn, and grow. Let's discuss how I can add value to your team!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:items-stretch">
          <div className="lg:w-1/3">
            <div className="p-5 sm:p-10 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-white/40 dark:border-gray-800/50 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-3xl font-black mb-6 sm:mb-10 text-gray-900 dark:text-white">Contact Info</h3>

                <div className="space-y-10">
                  {[
                    { icon: <Mail size={24} />, label: 'Email', value: 'saibhuma.reddy@gmail.com', href: 'mailto:saibhuma.reddy@gmail.com' },
                    { icon: <Phone size={24} />, label: 'Phone', value: '+91 9110759739', href: 'tel:+919110759739' },
                    { icon: <MapPin size={24} />, label: 'Location', value: 'Andhra Pradesh, India' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="p-4 sm:p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400 mr-4 sm:mr-6 group-hover:bg-blue-600 group-hover:text-white shadow-sm shrink-0">
                        {item.icon}
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1 sm:mb-2">{item.label}</h4>
                        {item.href ? (
                          <a href={item.href} className="text-sm sm:text-lg font-bold text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 block break-all">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm sm:text-lg font-bold text-gray-900 dark:text-gray-200 block break-words">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-100 dark:border-gray-800/50">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">Professional Networks</h4>
                <div className="flex space-x-6">
                  <a href="https://www.linkedin.com/in/bhuma-sai" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 dark:bg-black/40 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white shadow-sm">
                    <MessageSquare size={24} />
                  </a>
                  <a href="https://github.com/BhumaSai" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 dark:bg-black/40 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white shadow-sm">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="p-5 sm:p-14 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-white/40 dark:border-gray-800/50 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-10 sm:py-20">
                  <div className="inline-flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 bg-green-50 dark:bg-green-900/20 text-green-500 rounded-full mb-6 sm:mb-10 shadow-inner">
                    <CheckCircle2 size={40} className="sm:w-14 sm:h-14" />
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black mb-4 sm:mb-6 text-gray-900 dark:text-white">Message Sent!</h3>
                  <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-4 sm:px-12 sm:py-5 bg-blue-300 hover:bg-blue-500 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/30 text-sm sm:text-base"
                  >
                    Send New Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-700 dark:text-gray-300 ml-2 uppercase tracking-[0.15em]">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 sm:px-6 sm:py-5 bg-gray-50/50 dark:bg-gray-800/20 border-2 ${errors.name ? 'border-red-500' : 'border-gray-100 dark:border-gray-700/50'} rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 dark:focus:bg-gray-900/50 font-bold`}
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
                        className={`w-full px-6 py-5 bg-gray-50/50 dark:bg-gray-800/20 border-2 ${errors.email ? 'border-red-500' : 'border-gray-100 dark:border-gray-700/50'} rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 dark:focus:bg-gray-900/50 font-bold`}
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
                      className={`w-full px-6 py-5 bg-gray-50/50 dark:bg-gray-800/20 border-2 ${errors.subject ? 'border-red-500' : 'border-gray-100 dark:border-gray-700/50'} rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 dark:focus:bg-gray-900/50 font-bold`}
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
                      className={`w-full px-6 py-5 bg-gray-50/50 dark:bg-gray-800/20 border-2 ${errors.message ? 'border-red-500' : 'border-gray-100 dark:border-gray-700/50'} rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 dark:focus:bg-gray-900/50 font-bold resize-none`}
                      placeholder="Share your thoughts or project details here..."
                    />
                    {errors.message && <p className="text-xs font-bold text-red-500 ml-2">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 sm:py-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/30 flex items-center justify-center space-x-4 disabled:opacity-50 text-lg sm:text-xl tracking-tight"
                  >
                    {isSubmitting ? (
                      <div>Sending...</div>
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