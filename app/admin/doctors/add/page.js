'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DoctorForm from '@/components/DoctorForm';
import DoctorPreview from '@/components/DoctorPreview';

export default function AddDoctorPage() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    qualification: [''],
    experience: '',
    rating: '',
    reviews: '',
    expertise: [''],
    publicationData: {
      heading: 'Publications',
      publications: ['']
    },
    researchData: {
      heading: 'Research',
      research: ['']
    },
    aboutData: {
      heading: 'About',
      about: ''
    },
    isVerified: false,
    isActive: true,
    isFeatured: false,
    reviewEnabled: false
  });
  const router = useRouter();

  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleSubmit = async (formData) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add doctor');
      }

      // Redirect to doctors list
      router.push('/admin/doctors');
    } catch (error) {
      setError('Failed to add doctor');
      console.error('Error adding doctor:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">
          Add New Doctor
        </h3>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <DoctorForm 
          onSubmit={handleSubmit} 
          onChange={handleFormChange}
        />
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">
          Preview
        </h3>
        <DoctorPreview doctor={formData} />
      </div>
    </div>
  );
} 