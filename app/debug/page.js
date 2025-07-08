"use client";
import React, { useState, useEffect } from 'react';
import TranslatableText from '@/components/TranslatableText/TranslatableText';

export default function DebugPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-3xl font-bold mb-6">Translation Debug</h1>
          {/* Examples */}
          <div className="space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h2 className="font-semibold mb-2">TranslatableText Test:</h2>
              <div className="space-y-2">
                <TranslatableText as="h3">This text should translate</TranslatableText>
                <TranslatableText as="p">Hello, this is a test of the translation system.</TranslatableText>
                <TranslatableText as="button" className="px-4 py-2 bg-blue-600 text-white rounded">
                  This button text should translate
                </TranslatableText>
              </div>
            </div>
            <div className="p-4 bg-red-50 rounded">
              <h2 className="font-semibold mb-2">Instructions:</h2>
              <ol className="list-decimal list-inside space-y-1">
                <li>Use the language selector at the top of the page to change language</li>
                <li>Check if the TranslatableText examples translate</li>
                <li>Open browser console (F12) to see any errors</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 