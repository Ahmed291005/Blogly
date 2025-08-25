import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
<div className="max-w-2xl mx-auto py-12 px-4 bg-neutral-100">
  <h1 
    id="privacy-policy" 
    className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"
  >
    Privacy Policy
  </h1>
  <ul className="space-y-2 text-gray-700 text-base">
    <li>We collect only the data necessary to improve your experience.</li>
    <li>Cookies are used to enhance usability and track site performance.</li>
    <li>Personal information is never shared with third parties, except as required by law.</li>
    <li>Your data is secured using industry-standard protection.</li>
    <li>By using Blogly, you consent to these privacy practices.</li>
  </ul>

  <h1 
    id="terms-of-service" 
    className="text-3xl md:text-4xl font-bold text-center mt-10 mb-4 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"
  >
    Terms of Service
  </h1>
  <ul className="space-y-2 text-gray-700 text-base">
    <li>You are responsible for the content you post and your account activity.</li>
    <li>Accounts may be suspended or terminated for violating policies.</li>
    <li>All content remains the property of its original creator.</li>
    <li>We strive for uninterrupted service but cannot guarantee availability.</li>
    <li>By using Blogly, you agree to abide by these terms.</li>
  </ul>
</div>

  );
};

export default PrivacyPolicy;