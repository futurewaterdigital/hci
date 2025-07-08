import H2 from '@/components/ui/h2';
import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <H2 title="Terms and Conditions" className="text-3xl font-medium text-center text-pink-500 mb-8" />

      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-gray-600 font-light text-lg">
          <h2 className="text-xl font-medium mb-3">Welcome to Healthcare International!</h2>
          <p>
            By accessing and using our website, you agree to comply with the terms and conditions outlined below. These terms govern your use of the website, including all services, features, and content available. If you do not agree with any part of these terms, you should discontinue using the site immediately.
          </p>
        </div>

        {/* Use of the Website */}
        <div>
          <H2 title="Use of the Website" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            The information provided on this website is for general informational purposes only. While we strive to ensure accuracy, we do not guarantee that all content is free of errors, omissions, or out-dated information. Healthcare decisions should always be made in consultation with a qualified medical professional, and the information on this website should not be used as a substitute for professional advice.
          </p>
          <p className="mt-3 text-gray-600 font-light text-lg">By using our website, you agree not to engage in any activities that:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 font-light text-lg">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the intellectual property rights of HCI or any third party</li>
            <li>Attempt to gain unauthorized access to our systems, networks, or data</li>
            <li>Distribute harmful software, malware, or viruses</li>
          </ul>
        </div>

        {/* Intellectual Property Rights */}
        <div>
          <H2 title="Intellectual Property Rights" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            All content, including text, images, graphics, logos, and other materials on this website, is the property of Healthcare International or licensed for use by us. Unauthorized reproduction, distribution, or modification of any content is strictly prohibited without prior written permission from HCI.
          </p>
        </div>

        {/* Medical Services and Liability */}
        <div>
          <H2 title="Medical Services and Liability" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            HCI acts as a facilitator in connecting patients with healthcare providers and institutions. However, we do not directly provide medical services, diagnoses, or treatments. Any medical procedures, consultations, or treatments arranged through HCI are the sole responsibility of the healthcare provider. HCI is not liable for medical outcomes, complications, or dissatisfaction arising from treatments received.
          </p>
        </div>

        {/* Modification of Terms */}
        <div>
          <H2 title="Modification of Terms" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            We reserve the right to modify these terms and conditions at any time without prior notice. It is your responsibility to review this page periodically for updates. Continued use of our website following any changes constitutes acceptance of the revised terms.
          </p>
        </div>

        {/* Governing Law */}
        <div>
          <H2 title="Governing Law" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            These terms and conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the courts in Bengaluru, India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage; 