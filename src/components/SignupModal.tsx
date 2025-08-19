import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { insertSignup } from '../lib/supabase';

interface SignupModalProps {
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentLocation: string;
  userType: string;
  interest: string;
  notes: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  currentLocation?: string;
  userType?: string;
  interest?: string;
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentLocation: '',
    userType: '',
    interest: '',
    notes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const locations = [
    'Zimbabwe', 'South Africa', 'United Kingdom', 'United States', 'Canada', 
    'Australia', 'New Zealand', 'Germany', 'Netherlands', 'Botswana', 'Namibia',
    'Zambia', 'Malawi', 'Mozambique', 'Tanzania', 'Kenya', 'Uganda', 'Nigeria',
    'Ghana', 'Other'
  ];

  const userTypes = [
    'I want to buy property',
    'I want to sell property',
    'I\'m an investor',
    'I\'m just exploring'
  ];

  const interests = [
    'Buying on installments',
    'Selling property smarter',
    'Paying lower fees than agents',
    'Exploring investment opportunities'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.currentLocation) {
      newErrors.currentLocation = 'Please select your current location';
    }

    if (!formData.userType) {
      newErrors.userType = 'Please select which best describes you';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select what interests you most';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for Supabase
      const signupData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        current_location: formData.currentLocation,
        user_type: formData.userType,
        interest: formData.interest,
        notes: formData.notes || ''
      };

      // Insert into Supabase
      await insertSignup(signupData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      
      // Provide more specific error messages
      let errorMessage = 'There was an error submitting your form. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('Supabase configuration is missing')) {
          errorMessage = 'Server configuration error. Please contact support.';
        } else if (error.message.includes('Database error')) {
          errorMessage = 'Database connection error. Please try again later.';
        } else if (error.message.includes('network') || error.message.includes('timeout')) {
          errorMessage = 'Network connection error. Please check your internet connection and try again.';
        }
      }
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  if (isSubmitted) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Mukamba Gateway!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for joining our early access program. We'll be in touch soon with exclusive updates and opportunities.
            </p>
            <button
              onClick={onClose}
              className="btn-primary w-full"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl p-4 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 sm:mx-0"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative mb-6">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pr-12">Mukamba Gateway - Early Access Sign-Up Form</h2>
              <div className="text-sm sm:text-base text-gray-600 mt-2 space-y-1">
                <p>Welcome to the Mukamba Gateway Early Access list. Explore a smarter way to buy, sell, or manage property, designed for Zimbabwe and the region.</p>
                <p>By signing up, you'll receive updates, invitations, and early access ahead of public launch.</p>
                <p className="italic">Your information will remain confidential and handled in line with data protection requirements. Terms and Conditions apply.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1. First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px] ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your answer"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* 2. Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                2. Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px] ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your answer"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* 3. Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                3. Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px] ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your answer"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* 4. Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                4. Phone Number (WhatsApp preferred) <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500 italic mb-2">
                Enter your phone number in international format, e.g., +263771234567
              </p>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px] ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your answer"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* 5. Current Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                5. Where are you currently based? (e.g. South Africa, UK, etc.) <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.currentLocation}
                onChange={(e) => handleInputChange('currentLocation', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px] ${
                  errors.currentLocation ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Choose</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              {errors.currentLocation && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.currentLocation}
                </p>
              )}
            </div>

            {/* 6. User Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                6. Which best describes you? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {userTypes.map((type, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      value={type}
                      checked={formData.userType === type}
                      onChange={(e) => handleInputChange('userType', e.target.value)}
                      className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
              {errors.userType && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.userType}
                </p>
              )}
            </div>

            {/* 7. Interest */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                7. What interests you most about Mukamba Gateway? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value={interest}
                      checked={formData.interest === interest}
                      onChange={(e) => handleInputChange('interest', e.target.value)}
                      className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
              {errors.interest && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.interest}
                </p>
              )}
            </div>

            {/* 8. Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                8. Notes / Questions
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Your answer"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={() => setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  currentLocation: '',
                  userType: '',
                  interest: '',
                  notes: ''
                })}
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
              >
                Clear form
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SignupModal;
