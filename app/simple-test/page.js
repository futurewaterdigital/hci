"use client";
import React, { useState, useEffect } from 'react';
import { translateText } from '@/lib/translation';
import { simpleTranslate } from '@/lib/simple-translation';

export default function SimpleTest() {
  const [currentLang, setCurrentLang] = useState('ar');
  const [testText, setTestText] = useState('Hello World');
  const [googleResult, setGoogleResult] = useState('');
  const [simpleResult, setSimpleResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const testGoogleTranslate = async () => {
    if (currentLang === 'ar') {
      setGoogleResult(testText);
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const result = await translateText(testText, currentLang, 'ar');
      setGoogleResult(result);
    } catch (err) {
      setError(`Google Translate Error: ${err.message}`);
      console.error('Google Translate error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const testSimpleTranslate = () => {
    const result = simpleTranslate(testText, currentLang);
    setSimpleResult(result);
  };

  useEffect(() => {
    testGoogleTranslate();
    testSimpleTranslate();
  }, [currentLang, testText]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Simple Translation Test
          </h1>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Current Language:</label>
              <select
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="ar">Arabic (العربية)</option>
                <option value="fr">French (Français)</option>
                <option value="bn">Bengali (বাংলা)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Test Text:</label>
              <input
                type="text"
                value={testText}
                onChange={(e) => setTestText(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter text to translate"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Google Translate API Result:</label>
              <div className="bg-blue-50 p-3 rounded min-h-[3rem]">
                {isLoading ? (
                  <p className="text-blue-600">Loading...</p>
                ) : (
                  <p className="text-gray-800">{googleResult || 'No result'}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Simple Translation Result:</label>
              <div className="bg-green-50 p-3 rounded min-h-[3rem]">
                <p className="text-gray-800">{simpleResult || 'No result'}</p>
              </div>
            </div>

            {error && (
              <div>
                <label className="block text-sm font-medium mb-2 text-red-600">Error:</label>
                <div className="bg-red-50 p-3 rounded">
                  <p className="text-red-600">{error}</p>
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={testGoogleTranslate}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                Test Google Translate
              </button>
              <button
                onClick={testSimpleTranslate}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Test Simple Translate
              </button>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Test Instructions:</h3>
              <ol className="text-sm text-yellow-800 space-y-1 list-decimal list-inside">
                <li>Select a language from the dropdown</li>
                <li>Enter or modify the test text</li>
                <li>Compare the results from both translation methods</li>
                <li>Check the browser console for any errors</li>
                <li>If Google Translate fails, the simple translation should still work</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Quick Tests:</h3>
              <div className="flex gap-2 flex-wrap">
                {[
                  'Hello World',
                  'Welcome to Healthcare International',
                  'Contact Us',
                  'Cardiac Surgery',
                  'We provide world-class medical services.'
                ].map((text) => (
                  <button
                    key={text}
                    onClick={() => setTestText(text)}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
                  >
                    {text.length > 20 ? text.substring(0, 20) + '...' : text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 