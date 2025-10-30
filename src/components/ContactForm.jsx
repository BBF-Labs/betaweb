import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    const [focused, setFocused] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            console.log('Form submitted:', formData);
            alert('Message sent successfully! We\'ll get back to you soon.');
            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 px-6 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 animate-bounce">
                            <MessageSquare className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">
                        Let's <span className="text-emerald-500">Connect</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-3xl shadow-2xl p-12 backdrop-blur-lg border border-emerald-100">
                    <div className="space-y-10">
                        {/* First Row - First Name and Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* First Name */}
                            <div className="group">
                                <label
                                    htmlFor="firstName"
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider"
                                >
                                    <User className="w-4 h-4 text-emerald-500" />
                                    First Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('firstName')}
                                        onBlur={() => setFocused('')}
                                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300 text-lg"
                                        placeholder="John"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-300"
                                        style={{ width: focused === 'firstName' ? '100%' : '0%' }}
                                    />
                                </div>
                            </div>

                            {/* Last Name */}
                            <div className="group">
                                <label
                                    htmlFor="lastName"
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider"
                                >
                                    <User className="w-4 h-4 text-emerald-500" />
                                    Last Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('lastName')}
                                        onBlur={() => setFocused('')}
                                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300 text-lg"
                                        placeholder="Doe"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-300"
                                        style={{ width: focused === 'lastName' ? '100%' : '0%' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Second Row - Phone and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Phone Number */}
                            <div className="group">
                                <label
                                    htmlFor="phone"
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider"
                                >
                                    <Phone className="w-4 h-4 text-emerald-500" />
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('phone')}
                                        onBlur={() => setFocused('')}
                                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300 text-lg"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-300"
                                        style={{ width: focused === 'phone' ? '100%' : '0%' }}
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="group">
                                <label
                                    htmlFor="email"
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider"
                                >
                                    <Mail className="w-4 h-4 text-emerald-500" />
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused('')}
                                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300 text-lg"
                                        placeholder="john@example.com"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-300"
                                        style={{ width: focused === 'email' ? '100%' : '0%' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="group">
                            <label
                                htmlFor="message"
                                className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider"
                            >
                                <MessageSquare className="w-4 h-4 text-emerald-500" />
                                Your Message
                            </label>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    rows="5"
                                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-emerald-500 focus:bg-white resize-none transition-all duration-300 text-lg"
                                    placeholder="Tell us about your project..."
                                />
                                <div
                                    className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-300"
                                    style={{ width: focused === 'message' ? '100%' : '0%' }}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`group relative w-full md:w-auto px-10 py-5 bg-emerald-500 text-white text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-200 hover:scale-105'
                                    }`}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600">
                        Prefer email? Reach us at{' '}
                        <a href="mailto:hello@example.com" className="text-emerald-500 font-semibold hover:underline">
                            hello@example.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}