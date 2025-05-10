import React, { useState } from 'react';
import { Send, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
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
  };

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    
    
    if (validate()) {
      
      try {
        setIsSubmitting(true);
        await emailjs.send(
          emailconf.serviceID,
          emailconf.templateID,
          formData,
          emailconf.publicID
        )
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
      } catch (err) {
        setIsSubmitting(false);
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert("something wrong while sending message")
        
      }
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block mb-3">
            Get In Touch
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form or contact me directly using the information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a 
                      href="mailto:&#115;&#097;&#105;&#098;&#104;&#117;&#109;&#097;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      saibhuma.reddy&#64;gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Social Media</h4>
                    <div className="text-gray-600 dark:text-gray-400">
                      <a 
                        href="https://www.linkedin.com/in/bhuma-sai" 
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        LinkedIn
                      </a>
                      {' / '}
                      <a 
                        href="https://github.com/BhumaSai" 
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+91 9110759739</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">India, Andhra Pradesh, Kurnool(dist)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your message has been sent successfully. I'll get back to you soon!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                          errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                        placeholder="Name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                          errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                        placeholder="abc@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                        errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                        errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none`}
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-shadow ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
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