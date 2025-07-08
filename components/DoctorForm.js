'use client';
import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function DoctorForm({ onSubmit, onChange, initialData, isEditing = false }) {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    qualification: [''],
    experience: '',
    rating: '',
    category: '',
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

  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const updateFormData = (newData) => {
    setFormData(newData);
    if (onChange) {
      onChange(newData);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log(name, value, type, checked);
    updateFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleArrayChange = (field, index, value) => {
    updateFormData({
      ...formData,
      [field]: formData[field].map((item, i) => i === index ? value : item)
    });
  };

  const handleNestedArrayChange = (parentField, field, index, value) => {
    updateFormData({
      ...formData,
      [parentField]: {
        ...formData[parentField],
        [field]: formData[parentField][field].map((item, i) => i === index ? value : item)
      }
    });
  };

  const addArrayItem = (field) => {
    updateFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const addNestedArrayItem = (parentField, field) => {
    updateFormData({
      ...formData,
      [parentField]: {
        ...formData[parentField],
        [field]: [...formData[parentField][field], '']
      }
    });
  };

  const removeArrayItem = (field, index) => {
    updateFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index)
    });
  };

  const removeNestedArrayItem = (parentField, field, index) => {
    updateFormData({
      ...formData,
      [parentField]: {
        ...formData[parentField],
        [field]: formData[parentField][field].filter((_, i) => i !== index)
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadError('Please upload an image file');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size should be less than 5MB');
      return;
    }

    setSelectedFile(file);
    setUploadError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadError('');

    try {
      let imageUrl = formData.image;

      // If a new file is selected, upload it
      if (selectedFile) {
        // If there's an existing image, delete it first
        if (formData.image) {
          try {
            const deleteResponse = await fetch('/api/delete-image', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ imageUrl: formData.image }),
            });

            if (!deleteResponse.ok) {
              console.error('Failed to delete old image');
            }
          } catch (error) {
            console.error('Error deleting old image:', error);
          }
        }

        const uploadFormData = new FormData();
        uploadFormData.append('file', selectedFile);
        uploadFormData.append('doctorName', formData.name);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: uploadFormData,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to upload image');
        }

        imageUrl = data.url;
      }

      // Submit the form with the image URL
      await onSubmit({
        ...formData,
        image: imageUrl,
      });
    } catch (error) {
      console.error('Error:', error);
      setUploadError(error.message || 'Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <div className="mt-1 flex items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {selectedFile ? 'Change Image' : 'Choose Image'}
          </label>
          {(formData.image || selectedFile) && (
            <div className="ml-4">
              <img
                src={selectedFile ? URL.createObjectURL(selectedFile) : formData.image}
                alt="Preview"
                className="h-20 w-20 object-cover rounded"
              />
            </div>
          )}
        </div>
        {uploadError && (
          <p className="mt-2 text-sm text-red-600">{uploadError}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
        name="category"
        value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="cardiac-sciences">Cardiac Sciences</option>
          <option value="oncology">Oncology</option>
          <option value="neuro-sciences">Neuro Sciences</option>
          <option value="gastroenterology">Gastroenterology</option>
          <option value="orthopedics">Orthopedics</option>
          
          
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Qualifications</label>
        {formData.qualification.map((qual, index) => (
          <div key={index} className="flex gap-2 mt-1">
            <input
              type="text"
              value={qual}
              onChange={(e) => handleArrayChange('qualification', index, e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('qualification', index)}
              className="p-2 text-red-600 hover:text-red-900 transition-colors duration-200"
              title="Remove qualification"
            >
              <FaMinus className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('qualification')}
          className="mt-2 p-2 text-blue-600 hover:text-blue-900 transition-colors duration-200"
          title="Add qualification"
        >
          <FaPlus className="h-4 w-4" />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Experience</label>
        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <input
          type="number"
          step="0.1"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Reviews</label>
        <input
          type="number"
          name="reviews"
          value={formData.reviews}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Expertise</label>
        {formData.expertise.map((exp, index) => (
          <div key={index} className="flex gap-2 mt-1">
            <input
              type="text"
              value={exp}
              onChange={(e) => handleArrayChange('expertise', index, e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('expertise', index)}
              className="p-2 text-red-600 hover:text-red-900 transition-colors duration-200"
              title="Remove expertise"
            >
              <FaMinus className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('expertise')}
          className="mt-2 p-2 text-blue-600 hover:text-blue-900 transition-colors duration-200"
          title="Add expertise"
        >
          <FaPlus className="h-4 w-4" />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">About</label>
        <textarea
          name="aboutData.about"
          value={formData.aboutData.about}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            aboutData: { ...prev.aboutData, about: e.target.value }
          }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows="4"
        />
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Publications</h3>
        {formData.publicationData.publications.map((pub, index) => (
          <div key={index} className="flex gap-2 mt-1">
            <input
              type="text"
              value={pub}
              onChange={(e) => handleNestedArrayChange('publicationData', 'publications', index, e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => removeNestedArrayItem('publicationData', 'publications', index)}
              className="p-2 text-red-600 hover:text-red-900 transition-colors duration-200"
              title="Remove publication"
            >
              <FaMinus className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addNestedArrayItem('publicationData', 'publications')}
          className="mt-2 p-2 text-blue-600 hover:text-blue-900 transition-colors duration-200"
          title="Add publication"
        >
          <FaPlus className="h-4 w-4" />
        </button>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Research</h3>
        {formData.researchData.research.map((res, index) => (
          <div key={index} className="flex gap-2 mt-1">
            <input
              type="text"
              value={res}
              onChange={(e) => handleNestedArrayChange('researchData', 'research', index, e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => removeNestedArrayItem('researchData', 'research', index)}
              className="p-2 text-red-600 hover:text-red-900 transition-colors duration-200"
              title="Remove research"
            >
              <FaMinus className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addNestedArrayItem('researchData', 'research')}
          className="mt-2 p-2 text-blue-600 hover:text-blue-900 transition-colors duration-200"
          title="Add research"
        >
          <FaPlus className="h-4 w-4" />
        </button>
      </div>

      <div className="flex gap-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="isVerified"
            checked={formData.isVerified}
            onChange={handleChange}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <span className="ml-2">Verified</span>
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <span className="ml-2">Featured</span>
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            name="reviewEnabled"
            checked={formData.reviewEnabled}
            onChange={handleChange}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <span className="ml-2">Reviews Enabled</span>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={isUploading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isUploading ? 'Saving...' : (isEditing ? 'Update Doctor' : 'Add Doctor')}
        </button>
      </div>
    </form>
  );
} 