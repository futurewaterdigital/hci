'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import H1 from '@/components/ui/h1';

export default function EditPrice() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const id = searchParams.get('id');

  const [formData, setFormData] = useState({
    medical: {
      procedure: '',
      India: '',
      UK: '',
      USA: '',
      Thailand: '',
      Singapore: '',
      Turkey: ''
    },
    hotel: {
      category: '',
      Bangalore: '',
      Chennai: '',
      Delhi: '',
      Hyderabad: ''
    }
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (type && id) {
      fetchData();
    }
  }, [type, id]);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/admin/price-comparison?type=${type}&id=${id}`);
      const data = await response.json();
      
      if (type === 'medical') {
        setFormData(prev => ({
          ...prev,
          medical: {
            procedure: data.procedure,
            ...data
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          hotel: {
            category: data.category,
            ...data
          }
        }));
      }
      setLoading(false);
    } catch (error) {
      setMessage('Error loading data. Please try again.');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        type,
        id,
        data: type === 'medical' 
          ? { 
              procedure: formData.medical.procedure,
              prices: {
                India: formData.medical.India,
                UK: formData.medical.UK,
                USA: formData.medical.USA,
                Thailand: formData.medical.Thailand,
                Singapore: formData.medical.Singapore,
                Turkey: formData.medical.Turkey
              }
            }
          : { 
              category: formData.hotel.category,
              prices: {
                Bangalore: formData.hotel.Bangalore,
                Chennai: formData.hotel.Chennai,
                Delhi: formData.hotel.Delhi,
                Hyderabad: formData.hotel.Hyderabad
              }
            }
      };

      const response = await fetch('/api/admin/price-comparison', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to update entry');

      setMessage('Updated successfully!');
      setTimeout(() => {
        router.push('/admin/price-compare/view');
      }, 1500);
    } catch (error) {
      setMessage('Error updating entry. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <section className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <H1 title={`Edit ${type === 'medical' ? 'Medical Procedure' : 'Hotel Category'}`} />
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        {message && (
          <div className={`p-4 mb-4 rounded ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow">
          <form onSubmit={handleSubmit}>
            {type === 'medical' ? (
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Procedure Name</label>
                  <input
                    type="text"
                    name="procedure"
                    value={formData.medical.procedure}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter procedure name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">India Price</label>
                    <input
                      type="text"
                      name="India"
                      value={formData.medical.India}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">UK Price</label>
                    <input
                      type="text"
                      name="UK"
                      value={formData.medical.UK}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">USA Price</label>
                    <input
                      type="text"
                      name="USA"
                      value={formData.medical.USA}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Thailand Price</label>
                    <input
                      type="text"
                      name="Thailand"
                      value={formData.medical.Thailand}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Singapore Price</label>
                    <input
                      type="text"
                      name="Singapore"
                      value={formData.medical.Singapore}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Turkey Price</label>
                    <input
                      type="text"
                      name="Turkey"
                      value={formData.medical.Turkey}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Hotel Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.hotel.category}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter hotel category"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Bangalore Price</label>
                    <input
                      type="text"
                      name="Bangalore"
                      value={formData.hotel.Bangalore}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Chennai Price</label>
                    <input
                      type="text"
                      name="Chennai"
                      value={formData.hotel.Chennai}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Delhi Price</label>
                    <input
                      type="text"
                      name="Delhi"
                      value={formData.hotel.Delhi}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Hyderabad Price</label>
                    <input
                      type="text"
                      name="Hyderabad"
                      value={formData.hotel.Hyderabad}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => router.push('/admin/price-compare/view')}
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 