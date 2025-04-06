'use client';
import { useState, useEffect } from 'react';
import DoctorList from '@/components/DoctorList';
import ConfirmationModal from '@/components/ConfirmationModal';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    doctorId: null,
    doctorName: ''
  });

  const fetchDoctors = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/doctors', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }

      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      setError('Failed to load doctors');
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleDeleteClick = (doctorId, doctorName) => {
    setDeleteModal({
      isOpen: true,
      doctorId,
      doctorName
    });
  };

  const handleDeleteConfirm = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/doctors/${deleteModal.doctorId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete doctor');
      }

      // Refresh the doctors list
      await fetchDoctors();
      setDeleteModal({ isOpen: false, doctorId: null, doctorName: '' });
    } catch (error) {
      setError('Failed to delete doctor');
      console.error('Error deleting doctor:', error);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModal({ isOpen: false, doctorId: null, doctorName: '' });
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
        <a
          href="/admin/doctors/add"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add New Doctor
        </a>
      </div>

      <DoctorList 
        doctors={doctors} 
        onDelete={handleDeleteClick}
      />

      <ConfirmationModal
        isOpen={deleteModal.isOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Doctor"
        message={`Are you sure you want to delete ${deleteModal.doctorName}? This action cannot be undone.`}
      />
    </div>
  );
} 