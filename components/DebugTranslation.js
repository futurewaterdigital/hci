"use client";
import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { simpleTranslate } from '@/lib/simple-translation';
import { supportedLanguages } from '@/lib/translation';

export default function DebugTranslation() {
  const { currentLanguage, isTranslating, translate, changeLanguage } = useTranslation();
  const [testText, setTestText] = useState('Hello World');
  const [translatedText, setTranslatedText] = useState('');
  const [simpleTranslatedText, setSimpleTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Get the first available language as default
  const defaultLanguage = Object.keys(supportedLanguages)[0] || 'ar';

  const testTranslation = async () => {
    setIsLoading(true);
    setError('');
    try {
      // Test Google Translate API
      const result = await translate(testText, currentLanguage);
      setTranslatedText(result);
      
      // Test simple translation
      const simpleResult = simpleTranslate(testText, currentLanguage);
      setSimpleTranslatedText(simpleResult);
    } catch (err) {
      setError(err.message);
      console.error('Translation error:', err);
      
      // Fallback to simple translation
      const simpleResult = simpleTranslate(testText, currentLanguage);
      setSimpleTranslatedText(simpleResult);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentLanguage !== defaultLanguage) {
      testTranslation();
    } else {
      setTranslatedText(testText);
      setSimpleTranslatedText(testText);
    }
  }, [currentLanguage, testText, defaultLanguage]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Translation Debug</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Current Language:</label>
          <p className="text-sm bg-gray-100 p-2 rounded">{currentLanguage}</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Translation Status:</label>
          <p className="text-sm bg-gray-100 p-2 rounded">
            {isTranslating ? 'Translating...' : 'Ready'}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Test Text:</label>
          <input
            type="text"
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Google Translate API Result:</label>
          <p className="text-sm bg-blue-50 p-2 rounded min-h-[2rem]">
            {isLoading ? 'Loading...' : translatedText || 'No translation yet'}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Simple Translation Result:</label>
          <p className="text-sm bg-green-50 p-2 rounded min-h-[2rem]">
            {simpleTranslatedText || 'No translation yet'}
          </p>
        </div>

        {error && (
          <div>
            <label className="block text-sm font-medium mb-2 text-red-600">Error:</label>
            <p className="text-sm bg-red-50 p-2 rounded text-red-600">{error}</p>
          </div>
        )}

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => changeLanguage('ar')}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
          >
            Switch to Arabic
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
          >
            Switch to French
          </button>
          <button
            onClick={() => changeLanguage('bn')}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
          >
            Switch to Bengali
          </button>
        </div>

        <div>
          <button
            onClick={testTranslation}
            disabled={isLoading}
            className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
          >
            {isLoading ? 'Translating...' : 'Test Translation'}
          </button>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">Troubleshooting:</h4>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• If Google Translate shows the original text, there might be an API issue</li>
            <li>• If Simple Translation works, the issue is with the Google Translate package</li>
            <li>• Check browser console for any error messages</li>
            <li>• Try different languages to see if some work and others don't</li>
            <li>• Make sure you're using TranslatableText components for text you want translated</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 