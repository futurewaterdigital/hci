'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DoctorForm from '@/components/DoctorForm';
import DoctorPreview from '@/components/DoctorPreview';

export default function EditDoctorPage({ params }) {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`/api/admin/doctors/${params.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch doctor');
        }

        const data = await response.json();
        setDoctor(data);
        
      } catch (error) {
        setError('Failed to load doctor');
        console.error('Error fetching doctor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [params.id]);

  const handleFormChange = (newFormData) => {
    setDoctor(newFormData);
  };

  const handleSubmit = async (formData) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/doctors/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update doctor');
      }

      // Redirect to doctors list
      router.push('/admin/doctors');
    } catch (error) {
      setError('Failed to update doctor');
      console.error('Error updating doctor:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">Doctor not found</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">
          Edit Doctor
        </h3>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <DoctorForm 
          onSubmit={handleSubmit} 
          onChange={handleFormChange}
          initialData={doctor}
          isEditing={true}
        />
      </div>
      
      <div className="overflow-hidden sm:rounded-lg p-6">
        <DoctorPreview doctor={doctor} />
      </div>
    </div>
  );
} 