import H2 from '@/components/ui/h2';
import React from 'react';

const DisclaimerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <H2 title="Disclaimer" className="text-3xl font-medium text-center text-pink-500 mb-8" />

      <div className="space-y-8">
        {/* General Disclaimer */}
        <div className="text-gray-600 font-light text-lg">
          <p>
            The information available on the Healthcare International website is for informational and educational purposes only. While we strive to ensure the accuracy of our content, we make no warranties regarding its completeness, reliability, or timeliness.
          </p>
        </div>

        {/* Not a Substitute Section */}
        <div>
          <H2 title="Not a Substitute for Professional Medical Advice" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            The content on this website should not be interpreted as medical advice, diagnosis, or treatment. Healthcare International does not provide medical services directly; instead, we facilitate connections between patients and healthcare providers. Any medical decisions should be made in consultation with a qualified healthcare professional.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <H2 title="Limitation of Liability" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">Healthcare International shall not be held liable for any loss, damage, or injury resulting from:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 font-light text-lg">
            <li>Reliance on the information provided on this website</li>
            <li>Medical treatments, procedures, or consultations arranged through our platform</li>
            <li>Technical issues, website downtime, or errors in content</li>
          </ul>
          <p className="mt-3 text-gray-600 font-light text-lg">
            We strongly advise users to conduct their own research and consult with certified healthcare professionals before making medical decisions.
          </p>
        </div>

        {/* Third-Party Links */}
        <div>
          <H2 title="Third-Party Links and External Content" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            Our website may contain links to third-party websites, including healthcare providers, medical institutions, and external resources. These links are provided for convenience and informational purposes only. HCI does not endorse, control, or take responsibility for the accuracy, privacy policies, or practices of third-party websites. Users should review the terms and conditions of any external websites before engaging with them.
          </p>
        </div>

        {/* Use of Website */}
        <div>
          <H2 title="Use of the Website" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">By using our website, you acknowledge and agree that:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 font-light text-lg">
            <li>You will not use the website for any unlawful or harmful purposes</li>
            <li>You are responsible for ensuring that the medical services you seek comply with local laws and regulations</li>
            <li>HCI is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website</li>
          </ul>
        </div>

        {/* Modifications */}
        <div>
          <H2 title="Modifications to This Disclaimer" className="text-xl font-medium mb-3" />
          <p className="text-gray-600 font-light text-lg">
            We reserve the right to modify this disclaimer at any time without prior notice. Continued use of the website after changes are made constitutes acceptance of the revised terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage; 