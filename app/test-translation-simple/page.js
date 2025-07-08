"use client";
import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import TranslatableText from '@/components/TranslatableText/TranslatableText';

export default function TestTranslationSimple() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-3xl font-bold mb-6">Translation Test - Simple Examples</h1>
          
          {/* Language Switcher */}
          <div className="mb-8 p-4 bg-blue-50 rounded">
            <h2 className="font-semibold mb-4">Current Language: {currentLanguage}</h2>
            <div className="flex gap-2">
              {Object.entries(supportedLanguages).map(([code, lang]) => (
                <button
                  key={code}
                  onClick={() => changeLanguage(code)}
                  className={`px-4 py-2 rounded ${
                    currentLanguage === code 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {lang.flag} {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-6">
            <div className="p-4 bg-green-50 rounded">
              <h3 className="font-semibold mb-2">✅ This text WILL translate (wrapped in TranslatableText):</h3>
              <TranslatableText as="p" className="text-lg">
                Hello, welcome to Healthcare International!
              </TranslatableText>
            </div>

            <div className="p-4 bg-red-50 rounded">
              <h3 className="font-semibold mb-2">❌ This text will NOT translate (regular HTML):</h3>
              <p className="text-lg">
                Hello, welcome to Healthcare International!
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded">
              <h3 className="font-semibold mb-2">✅ Button text WILL translate:</h3>
              <TranslatableText as="button" className="px-4 py-2 bg-blue-600 text-white rounded">
                Click here to learn more
              </TranslatableText>
            </div>

            <div className="p-4 bg-green-50 rounded">
              <h3 className="font-semibold mb-2">✅ Multiple elements WILL translate:</h3>
              <div className="space-y-2">
                <TranslatableText as="h4">Medical Tourism Services</TranslatableText>
                <TranslatableText as="p">We provide the best healthcare services in India.</TranslatableText>
                <TranslatableText as="span" className="text-sm text-gray-600">
                  Trusted by thousands of patients worldwide.
                </TranslatableText>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 p-4 bg-yellow-50 rounded">
            <h3 className="font-semibold mb-2">How to use:</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Click the language buttons above to change language</li>
              <li>Notice how only the green boxes (with TranslatableText) change</li>
              <li>The red box (regular HTML) stays the same</li>
              <li>This is how you need to wrap ALL text you want translated</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
} 