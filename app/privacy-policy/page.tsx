import H2 from '@/components/ui/h2';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <H2 title="Privacy Policy" className="text-3xl font-medium text-center text-pink-500 mb-8" />

      <div className="space-y-8">
        {/* Introduction */}
        <div className="text-gray-600 font-light text-lg">
          <p>
            Healthcare International is committed to protecting the privacy of our users. This privacy policy outlines how we collect, use, store, and protect your personal information when you interact with our website and services.
          </p>
        </div>

        {/* Information We Collect */}
        <div>
          <H2 title="Information We Collect" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">When you visit our website, we may collect the following types of information:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 font-light text-lg">
            <li><span className="font-medium">Personal Information:</span> This includes your name, email address, phone number, and any other details you provide when filling out forms or contacting us</li>
            <li><span className="font-medium">Medical Information:</span> If you inquire about medical services, we may collect details related to your health condition to facilitate your request</li>
            <li><span className="font-medium">Technical Data:</span> This includes your IP address, browser type, operating system, and browsing behavior, which helps us improve website functionality</li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div>
          <H2 title="How We Use Your Information" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">We use the collected information for the following purposes:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 font-light text-lg">
            <li>To facilitate medical consultations and connect patients with healthcare providers</li>
            <li>To provide customer support and respond to inquiries</li>
            <li>To send updates, newsletters, or promotional materials, where consent has been provided</li>
            <li>To improve website functionality and user experience through analytics</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </div>

        {/* Data Security */}
        <div>
          <H2 title="Data Security" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            We implement strict security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, while we take reasonable steps to safeguard your information, no online data transmission is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        {/* Sharing of Information */}
        <div>
          <H2 title="Sharing of Information" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            HCI does not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 font-light text-lg">
            <li>Healthcare Providers: To facilitate consultations and medical treatment</li>
            <li>Service Providers: To help us with website maintenance, marketing, and analytics</li>
            <li>Legal Authorities: If required to comply with legal obligations or to protect our rights and interests</li>
          </ul>
        </div>

        {/* Your Rights */}
        <div>
          <H2 title="Your Rights" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">You have the right to:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 font-light text-lg">
            <li>Request access to the personal data we hold about you</li>
            <li>Request corrections to any inaccuracies in your data</li>
            <li>Request the deletion of your personal data, subject to legal and operational constraints</li>
          </ul>
          <p className="mt-3 text-gray-600 font-light text-lg">
            If you wish to exercise these rights, please contact us at info@healthcareinternational.in
          </p>
        </div>

        {/* Changes to Privacy Policy */}
        <div>
          <H2 title="Changes to the Privacy Policy" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            We may update this policy from time to time to reflect changes in our practices. Please review this page periodically to stay informed about how we protect your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 