import React, { useState } from 'react';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const [focused, setFocused] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({
            fullName: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="min-h-[80vh] bg-gray-100 py-12 px-4 flex items-center">
            <div className="max-w-5xl mx-auto w-full">
                <div className="bg-white rounded-[2rem] border border-gray-900/10 p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Side - Form */}
                        <div>
                            {/* Full Name */}
                            <div className="mb-6">
                                <label className="block text-lg font-light text-gray-900 mb-2">
                                    Full Name*
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('fullName')}
                                    onBlur={() => setFocused('')}
                                    className="w-full bg-transparent border-b pb-2 text-gray-900 focus:outline-none transition-colors duration-300 text-base"
                                    style={{
                                        borderColor: focused === 'fullName' ? '#10b981' : '#1f2937'
                                    }}
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-6">
                                <label className="block text-lg font-light text-gray-900 mb-2">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    className="w-full bg-transparent border-b pb-2 text-gray-900 focus:outline-none transition-colors duration-300 text-base"
                                    style={{
                                        borderColor: focused === 'email' ? '#10b981' : '#1f2937'
                                    }}
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-6">
                                <label className="block text-lg font-light text-gray-900 mb-2">
                                    Message*
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    rows="3"
                                    className="w-full bg-transparent border-b pb-2 text-gray-900 focus:outline-none resize-none transition-colors duration-300 text-base"
                                    style={{
                                        borderColor: focused === 'message' ? '#10b981' : '#1f2937'
                                    }}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                className="px-8 py-3 bg-green-600 text-white text-base font-medium rounded-full hover:bg-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-md"
                            >
                                Send
                            </button>
                        </div>

                        {/* Right Side - Contact Info */}
                        <div className="flex flex-col justify-between">
                            <div>
                                {/* Main Heading */}
                                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 leading-tight">
                                    Want to bring a project to life?
                                </h2>
                                <p className="text-gray-600 text-base mb-10 max-w-md">
                                    Whether you’re starting something new or need help improving an existing project,
                                    I’d love to collaborate. Let’s build something impactful together.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                                            Email
                                        </h3>
                                        <a
                                            href="mailto:fazeel@gmail.com"
                                            className="text-lg font-medium text-gray-900 hover:text-emerald-500 transition-colors duration-300"
                                        >
                                            fazeel@gmail.com
                                        </a>
                                    </div>

                                    <div>
                                        <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                                            Phone
                                        </h3>
                                        <a
                                            href="tel:123-456-7890"
                                            className="text-lg font-medium text-gray-900 hover:text-emerald-500 transition-colors duration-300"
                                        >
                                            123-456-7890
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="flex gap-6 mt-10">
                                {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="text-gray-700 hover:text-emerald-500 transition-transform transform hover:scale-110"
                                        aria-label="Social Link"
                                    >
                                        <Icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}