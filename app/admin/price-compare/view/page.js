'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import H1 from '@/components/ui/h1';
import Link from 'next/link';

export default function ViewPrices() {
  const [type, setType] = useState('medical');
  const [medicalProcedures, setMedicalProcedures] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/admin/price-comparison');
      const data = await response.json();
      setMedicalProcedures(data.medicalProcedures);
      setHotelData(data.hotelPrices);
      setLoading(false);
    } catch (error) {
      setMessage('Error loading data. Please try again.');
      setLoading(false);
    }
  };

  const handleDelete = async (itemId, itemType) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      const response = await fetch('/api/admin/price-comparison', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: itemId, type: itemType }),
      });

      if (!response.ok) throw new Error('Failed to delete item');

      setMessage('Item deleted successfully!');
      fetchData(); // Refresh the data
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error deleting item. Please try again.');
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
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
          <H1 title="View Price Comparison Data" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto">
        {message && (
          <div className={`p-4 mb-4 rounded ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <select
                className="p-2 border rounded"
                value={type}
                onChange={handleTypeChange}
              >
                <option value="medical">Medical Procedures</option>
                <option value="hotel">Hotel Categories</option>
              </select>
            </div>
            <Link 
              href="/admin/price-compare/add"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add New Entry
            </Link>
          </div>

          <div className="overflow-x-auto">
            {type === 'medical' ? (
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border">Procedure</th>
                    <th className="py-2 px-4 border">India</th>
                    <th className="py-2 px-4 border">UK</th>
                    <th className="py-2 px-4 border">USA</th>
                    <th className="py-2 px-4 border">Thailand</th>
                    <th className="py-2 px-4 border">Singapore</th>
                    <th className="py-2 px-4 border">Turkey</th>
                    <th className="py-2 px-4 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {medicalProcedures.map((procedure) => (
                    <tr key={procedure._id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border">{procedure.procedure}</td>
                      <td className="py-2 px-4 border">{procedure.India}</td>
                      <td className="py-2 px-4 border">{procedure.UK}</td>
                      <td className="py-2 px-4 border">{procedure.USA}</td>
                      <td className="py-2 px-4 border">{procedure.Thailand}</td>
                      <td className="py-2 px-4 border">{procedure.Singapore}</td>
                      <td className="py-2 px-4 border">{procedure.Turkey}</td>
                      <td className="py-2 px-4 border">
                        <div className="flex space-x-2">
                          <Link
                            href={`/admin/price-compare/edit?type=medical&id=${procedure._id}`}
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(procedure._id, 'medical')}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border">Category</th>
                    <th className="py-2 px-4 border">Bangalore</th>
                    <th className="py-2 px-4 border">Chennai</th>
                    <th className="py-2 px-4 border">Delhi</th>
                    <th className="py-2 px-4 border">Hyderabad</th>
                    <th className="py-2 px-4 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {hotelData.map((hotel) => (
                    <tr key={hotel._id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border">{hotel.category}</td>
                      <td className="py-2 px-4 border">{hotel.Bangalore}</td>
                      <td className="py-2 px-4 border">{hotel.Chennai}</td>
                      <td className="py-2 px-4 border">{hotel.Delhi}</td>
                      <td className="py-2 px-4 border">{hotel.Hyderabad}</td>
                      <td className="py-2 px-4 border">
                        <div className="flex space-x-2">
                          <Link
                            href={`/admin/price-compare/edit?type=hotel&id=${hotel._id}`}
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(hotel._id, 'hotel')}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 