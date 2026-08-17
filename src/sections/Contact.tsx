import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { siteConfig } from '../data/config';
import { Send, CheckCircle2, Clock, MapPin, MessageSquare, Copy, Check, AlertCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypeOptions = [
    'Full-Stack Web Application',
    'AI & LLM Integration',
    'Enterprise Migration / Modernization',
    'React / Angular Frontend Development',
    'Node.js Backend & API Development',
    'Data Analytics Dashboard',
    'Long-Term Engineering Partner'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Direct email dispatch to contactksingh.dev@gmail.com with reply-to set to the user's email
      const response = await fetch('https://formsubmit.co/ajax/contactksingh.dev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: `New Project Inquiry from ${formData.name} [${formData.projectType}]`,
          projectType: formData.projectType,
          targetBudget: formData.budget || 'Flexible / To be discussed',
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        // In case of service issue, fallback to mailto
        const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
          `Project Inquiry from ${formData.name} [${formData.projectType}]`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${
            formData.budget || 'Flexible'
          }\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error('Submission error, fallback to mail client:', err);
      // Fallback
      const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
        `Project Inquiry from ${formData.name} [${formData.projectType}]`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${
          formData.budget || 'Flexible'
        }\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-slate-950/70">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionHeader
          badge="Start A Conversation"
          badgeIcon={<MessageSquare className="w-4 h-4" />}
          title={
            <span>
              Let's Build Something <span className="gradient-text-cyan">Great Together</span>
            </span>
          }
          subtitle="Have an application to build, an existing product to improve, or an idea that needs a technical partner? Let's discuss your requirements and build a scalable solution."
        />

        {/* Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
              <div className="space-y-2">
                <Badge variant="cyan" size="sm">
                  Direct Inquiries
                </Badge>
                <h3 className="text-2xl font-bold text-white">
                  Get in Direct Touch
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Submissions are sent directly to my inbox. I typically respond within 12 hours with architectural recommendations and availability details.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 block">
                  Primary Engineering Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono font-medium text-white truncate">
                    {siteConfig.contact.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors flex items-center gap-1 text-xs cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Status Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Response Time: <strong>{siteConfig.contact.responseTime}</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Status: <strong className="text-emerald-300">{siteConfig.contact.availability}</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Location: <strong>{siteConfig.contact.timezone}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    Your details have been delivered to <span className="text-cyan-400 font-mono">{siteConfig.contact.email}</span>. I will review your requirements and get back to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Full-Stack Web Application',
                        budget: '',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1 border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out this form to send your project requirements directly to <span className="text-cyan-400 font-mono">{siteConfig.contact.email}</span>.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-400 transition-colors"
                      >
                        {projectTypeOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-slate-900 text-slate-100">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Target Budget - Open text input */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Target Budget
                      </label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="e.g. $10,000, $5k-10k, or Flexible"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current application goals, timeline, and tech stack requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-400 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Sending Transmission to contactksingh.dev@gmail.com...' : "Let's Discuss Your Project"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
