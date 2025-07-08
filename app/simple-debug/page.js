"use client";
import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

export default function SimpleDebug() {
  try {
    const { currentLanguage, supportedLanguages } = useTranslation();
    
    console.log('SimpleDebug - Context loaded successfully');
    console.log('Current language:', currentLanguage);
    console.log('Supported languages:', supportedLanguages);

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h1 className="text-2xl font-bold mb-6">Simple Debug - Translation Context Test</h1>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded">
                <h2 className="font-semibold text-green-800 mb-2">✅ Success!</h2>
                <p className="text-green-700">TranslationContext is working correctly.</p>
                <p><strong>Current Language:</strong> {currentLanguage}</p>
                <p><strong>Supported Languages:</strong> {Object.keys(supportedLanguages).join(', ')}</p>
              </div>

              <div className="p-4 bg-blue-50 rounded">
                <h2 className="font-semibold mb-2">Next Steps:</h2>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Visit <code>/debug</code> for full testing</li>
                  <li>Check browser console (F12) for detailed logs</li>
                  <li>Try switching languages using the header switcher</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('SimpleDebug - Error loading TranslationContext:', error);
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h1 className="text-2xl font-bold mb-6 text-red-600">❌ Error!</h1>
            
            <div className="p-4 bg-red-50 rounded">
              <h2 className="font-semibold text-red-800 mb-2">TranslationContext Error:</h2>
              <p className="text-red-700 mb-2">{error.message}</p>
              <p className="text-sm text-red-600">Check browser console (F12) for more details.</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded mt-4">
              <h2 className="font-semibold text-yellow-800 mb-2">Possible Issues:</h2>
              <ul className="list-disc list-inside space-y-1 text-yellow-700">
                <li>TranslationProvider not wrapping the app correctly</li>
                <li>Import/export issues in TranslationContext</li>
                <li>Missing dependencies</li>
                <li>Server-side rendering issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
} 